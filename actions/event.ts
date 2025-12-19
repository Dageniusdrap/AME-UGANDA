'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';
import { requireAuth } from '@/lib/auth';

export async function registerForEvent(eventId: string) {
    try {
        const user = await requireAuth();

        // Check if already registered
        const existingRegistration = await db.eventRegistration.findUnique({
            where: {
                eventId_userId: {
                    eventId,
                    userId: user.id,
                },
            },
        });

        if (existingRegistration) {
            return { success: false, error: 'Already registered for this event' };
        }

        // Check event capacity
        const event = await db.event.findUnique({
            where: { id: eventId },
            include: {
                _count: {
                    select: { registrations: true },
                },
            },
        });

        if (!event) {
            return { success: false, error: 'Event not found' };
        }

        if (event.capacity && event._count.registrations >= event.capacity) {
            return { success: false, error: 'Event is full' };
        }

        // Create registration
        const registration = await db.eventRegistration.create({
            data: {
                eventId,
                userId: user.id,
                status: 'CONFIRMED',
                paymentStatus: event.registrationFee ? 'PENDING' : 'COMPLETED',
            },
        });

        revalidatePath('/dashboard/events');
        revalidatePath(`/events/${event.slug}`);

        return { success: true, data: registration };
    } catch (error: any) {
        console.error('Error registering for event:', error);
        return { success: false, error: error.message };
    }
}

export async function getUpcomingEvents() {
    try {
        const events = await db.event.findMany({
            where: {
                published: true,
                startDate: {
                    gte: new Date(),
                },
            },
            orderBy: { startDate: 'asc' },
            take: 6,
        });

        return { success: true, data: events };
    } catch (error: any) {
        console.error('Error fetching events:', error);
        return { success: false, error: error.message };
    }
}

export async function getUserEventRegistrations() {
    try {
        const user = await requireAuth();

        const registrations = await db.eventRegistration.findMany({
            where: { userId: user.id },
            include: {
                event: true,
            },
            orderBy: { createdAt: 'desc' },
        });

        return { success: true, data: registrations };
    } catch (error: any) {
        console.error('Error fetching registrations:', error);
        return { success: false, error: error.message };
    }
}
