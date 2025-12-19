'use server';

import { db } from '@/lib/db';
import { contactFormSchema } from '@/lib/validations/member';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
    try {
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            subject: formData.get('subject') as string,
            message: formData.get('message') as string,
        };

        const validatedData = contactFormSchema.parse(data);

        // Save to database
        const submission = await db.contactSubmission.create({
            data: validatedData,
        });

        // Send notification email
        if (process.env.RESEND_API_KEY) {
            await resend.emails.send({
                from: 'AME Uganda <noreply@ameuganda.org>',
                to: 'info@ameuganda.org',
                subject: `Contact Form: ${validatedData.subject}`,
                html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone || 'N/A'}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message}</p>
        `,
            });
        }

        return { success: true, data: submission };
    } catch (error: any) {
        console.error('Error submitting contact form:', error);
        return { success: false, error: error.message };
    }
}
