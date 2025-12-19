import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';

export default async function DashboardPage() {
    // MOCK AUTHENTICATION - Keys are invalid, using mock data for development.
    const user = { id: 'mock_user_id', firstName: 'Engineer' };

    // Mock Member Data
    const member = {
        member: {
            membershipStatus: 'ACTIVE',
            licenseNumber: 'AME-2024-001',
            membershipType: 'REGULAR'
        }
    };

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">
                Welcome, {user.firstName} (Preview Mode)!
            </h1>

            {member?.member ? (
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-lg border p-6">
                        <h3 className="font-semibold">Membership Status</h3>
                        <p className="text-2xl font-bold text-green-600 mt-2">
                            {member.member.membershipStatus}
                        </p>
                    </div>

                    <div className="rounded-lg border p-6">
                        <h3 className="font-semibold">License Number</h3>
                        <p className="text-2xl font-bold mt-2">
                            {member.member.licenseNumber || 'N/A'}
                        </p>
                    </div>

                    <div className="rounded-lg border p-6">
                        <h3 className="font-semibold">Membership Type</h3>
                        <p className="text-2xl font-bold mt-2">
                            {member.member.membershipType}
                        </p>
                    </div>
                </div>
            ) : (
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-6">
                    <p className="text-amber-800">
                        Complete your member profile to access all features.
                    </p>
                </div>
            )}
        </div>
    );
}
