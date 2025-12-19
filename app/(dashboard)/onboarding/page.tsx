import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { MemberOnboardingForm } from '@/components/forms/member-onboarding-form';

export default async function OnboardingPage() {
    const user = await currentUser();

    if (!user) {
        redirect('/sign-in');
    }

    // Check if user already has a member profile
    // Check if user already has a member profile
    let existingMember = null;
    try {
        existingMember = await db.user.findUnique({
            where: { clerkId: user.id },
            include: { member: true },
        });
    } catch (error) {
        console.warn("Database connection failed (expected in preview):", error);
        // Continue as new user if DB is unreachable (Mock/Dev mode)
    }

    if (existingMember?.member) {
        redirect('/dashboard');
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-aviation-50 to-slate-50 -z-10" />
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-aviation-100 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute top-40 left-0 -ml-20 w-60 h-60 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />

            <div className="max-w-4xl mx-auto relative">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg border border-aviation-100 mb-6 transform rotate-3">
                        <span className="text-3xl">✈️</span>
                    </div>
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
                        Welcome to the <span className="text-aviation-600">Flight Deck</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        To verify your credentials and grant you access to the member portal, we need a few details about your aviation background.
                    </p>
                </div>

                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-1">
                    <div className="bg-white rounded-[1.3rem] overflow-hidden">
                        <div className="h-2 bg-gradient-to-r from-aviation-500 via-blue-600 to-aviation-700 w-full" />
                        <div className="p-8 sm:p-12">
                            <MemberOnboardingForm userId={user.id} />
                        </div>
                    </div>
                </div>

                <p className="text-center text-sm text-slate-400 mt-8">
                    Secured by Aviation Engineers Uganda • ID: {user.id.slice(0, 8)}...
                </p>
            </div>
        </div>
    );
}
