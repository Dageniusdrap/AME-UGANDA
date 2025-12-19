import { z } from "zod";

export const memberProfileSchema = z.object({
    // Personal Information
    phone: z.string().min(10, "Phone number must be at least 10 characters"),
    dateOfBirth: z.date().optional(),
    nationality: z.string().min(2, "Nationality is required").default("Ugandan"),
    address: z.string().optional(),
    city: z.string().optional(),

    // Professional Information
    licenseNumber: z.string().optional(),
    licenseType: z.enum(['AME_CAT_A', 'AME_CAT_B', 'AME_CAT_C', 'STUDENT', 'APPRENTICE']).optional(),
    licenseIssueDate: z.date().optional(),
    licenseExpiryDate: z.date().optional(),
    employerName: z.string().optional(),
    jobTitle: z.string().optional(),
    yearsOfExperience: z.number().int().min(0).optional(),
    specializations: z.array(z.string()).default([]),

    // Membership
    membershipType: z.enum(['STUDENT', 'REGULAR', 'SENIOR', 'LIFETIME', 'HONORARY']),
});

export const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export const eventRegistrationSchema = z.object({
    eventId: z.string().cuid(),
    additionalNotes: z.string().optional(),
});
