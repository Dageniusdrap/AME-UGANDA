'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { memberProfileSchema } from '@/lib/validations/member'; // Assuming I created this based on the snippet
import { createOrUpdateMemberProfile } from '@/actions/member';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type MemberFormValues = z.infer<typeof memberProfileSchema>;

export function MemberOnboardingForm({ userId }: { userId: string }) {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<MemberFormValues>({
        resolver: zodResolver(memberProfileSchema),
        defaultValues: {
            membershipType: 'REGULAR',
            nationality: 'Ugandan',
        },
    });

    const onSubmit = async (data: MemberFormValues) => {
        setError(null);
        const formData = new FormData();
        // Append all fields
        Object.entries(data).forEach(([key, value]) => {
            if (value instanceof Date) {
                formData.append(key, value.toISOString());
            } else if (Array.isArray(value)) {
                // Handle array if needed, though schema currently defaults to empty array and simplified in action
                // For specializations (string[])
                value.forEach(v => formData.append(key, v));
            } else if (value !== undefined && value !== null) {
                formData.append(key, value.toString());
            }
        });

        const result = await createOrUpdateMemberProfile(formData);

        if (result?.success) {
            router.push('/dashboard/profile');
        } else {
            setError(result?.error || 'Something went wrong');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow">
            {error && (
                <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
                    {error}
                </div>
            )}

            <div className="space-y-4">
                <h3 className="text-lg font-medium">Personal Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            {...register('phone')}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                        <input
                            type="date"
                            {...register('dateOfBirth', { valueAsDate: true })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                        />
                        {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nationality</label>
                        <input
                            {...register('nationality')}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                        />
                        {errors.nationality && <p className="text-red-500 text-xs mt-1">{errors.nationality.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            {...register('address')}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">City</label>
                        <input
                            {...register('city')}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-medium">Professional Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">License Number (if any)</label>
                        <input
                            {...register('licenseNumber')}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">License Type</label>
                        <select
                            {...register('licenseType')}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                        >
                            <option value="">Select Type</option>
                            <option value="AME_CAT_A">AME Category A</option>
                            <option value="AME_CAT_B">AME Category B</option>
                            <option value="AME_CAT_C">AME Category C</option>
                            <option value="STUDENT">Student</option>
                            <option value="APPRENTICE">Apprentice</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Employer Name</label>
                        <input
                            {...register('employerName')}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Job Title</label>
                        <input
                            {...register('jobTitle')}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-medium">Membership</h3>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Membership Type</label>
                    <select
                        {...register('membershipType')}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                    >
                        <option value="STUDENT">Student</option>
                        <option value="REGULAR">Regular</option>
                        <option value="SENIOR">Senior</option>
                        <option value="LIFETIME">Lifetime</option>
                        <option value="HONORARY">Honorary</option>
                    </select>
                </div>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Saving...' : 'Complete Profile'}
            </Button>
        </form>
    );
}
