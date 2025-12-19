'use client';

import { useAuth, useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

interface MemberData {
    membershipStatus: string;
    membershipType: string;
    expiryDate: string | null;
}

export function MembershipCard() {
    const { isLoaded, userId } = useAuth();
    const { user } = useUser();
    const [memberData, setMemberData] = useState<MemberData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMemberData() {
            if (!userId) return;

            try {
                const response = await fetch('/api/member/profile');
                if (response.ok) {
                    const data = await response.json();
                    setMemberData(data);
                }
            } catch (error) {
                console.error('Error fetching member data:', error);
            } finally {
                setLoading(false);
            }
        }

        if (isLoaded && userId) {
            fetchMemberData();
        }
    }, [isLoaded, userId]);

    if (!isLoaded || loading) {
        return <div className="animate-pulse bg-gray-200 h-48 rounded-lg" />;
    }

    if (!userId) {
        return (
            <div className="rounded-lg border border-gray-200 p-6">
                <p className="text-gray-600">Please sign in to view membership details.</p>
            </div>
        );
    }

    return (
        <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-semibold mb-4">Membership Details</h3>

            {memberData ? (
                <div className="space-y-3">
                    <div>
                        <label className="text-sm text-gray-600">Status</label>
                        <p className="font-semibold">{memberData.membershipStatus}</p>
                    </div>
                    <div>
                        <label className="text-sm text-gray-600">Type</label>
                        <p className="font-semibold">{memberData.membershipType}</p>
                    </div>
                    {memberData.expiryDate && (
                        <div>
                            <label className="text-sm text-gray-600">Expires</label>
                            <p className="font-semibold">
                                {new Date(memberData.expiryDate).toLocaleDateString()}
                            </p>
                        </div>
                    )}
                </div>
            ) : (
                <p className="text-gray-600">No membership data available.</p>
            )}
        </div>
    );
}
