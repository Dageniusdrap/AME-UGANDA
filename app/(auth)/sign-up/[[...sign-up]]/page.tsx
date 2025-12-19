'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [socialLoading, setSocialLoading] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
    const isMock = !publishableKey || publishableKey.includes('mock');

    // If we have real keys, use the Enterprise-grade Clerk Component
    if (!isMock) {
        console.log("Rendering Real Clerk SignUp");
        return (
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-aviation-50 to-aviation-100 py-12 px-4 sm:px-6 lg:px-8">
                <SignUp
                    fallbackRedirectUrl="/onboarding"
                    appearance={{
                        elements: {
                            card: 'shadow-2xl border border-gray-100 rounded-2xl',
                            formButtonPrimary: 'bg-aviation-600 hover:bg-aviation-700',
                            footerActionLink: 'text-aviation-600 hover:text-aviation-700'
                        }
                    }}
                />
            </div>
        );
    }

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        // Simulate network request
        setTimeout(() => {
            setIsLoading(false);
            router.push('/dashboard');
        }, 1500);
    };

    const handleSocialLogin = (provider: string) => {
        setSocialLoading(provider);
        setError(null);

        // Simulate OAuth restriction
        setTimeout(() => {
            setSocialLoading(null);
            setError(`${provider.charAt(0).toUpperCase() + provider.slice(1)} registration is unavailable in this preview.`);
        }, 1500);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-aviation-50 to-aviation-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                        Join Aviation Engineers Uganda
                    </h1>
                    <p className="text-gray-600 mt-2 text-sm">
                        Become part of Uganda's premier aviation maintenance community
                    </p>
                </div>

                {/* Mock Sign Up Form for Preview */}
                <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg flex items-center">
                            <span className="mr-2">!</span> {error}
                        </div>
                    )}

                    <form className="space-y-5" onSubmit={handleRegister}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
                                <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aviation-500 focus:border-aviation-500 transition-all outline-none" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name</label>
                                <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aviation-500 focus:border-aviation-500 transition-all outline-none" placeholder="Doe" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                            <input required type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aviation-500 focus:border-aviation-500 transition-all outline-none" placeholder="john.doe@example.com" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
                            <input required type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aviation-500 focus:border-aviation-500 transition-all outline-none" placeholder="••••••••" />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading || !!socialLoading}
                            className="w-full bg-aviation-600 hover:bg-aviation-700 text-white font-bold py-3 rounded-xl transition-all duration-300 transform active:scale-95 shadow-lg shadow-aviation-600/20 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    Creating Account...
                                </>
                            ) : (
                                "Create Account"
                            )}
                        </button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                        <p className="text-xs text-gray-500 mb-4">Or continue with</p>
                        <div className="flex justify-center gap-4">
                            <button
                                type="button"
                                onClick={() => handleSocialLogin('google')}
                                disabled={!!socialLoading}
                                className="p-2 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-all disabled:opacity-50"
                            >
                                {socialLoading === 'google' ? (
                                    <Loader2 className="w-5 h-5 animate-spin text-gray-600" />
                                ) : (
                                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                                )}
                            </button>
                            <button
                                type="button"
                                onClick={() => handleSocialLogin('linkedin')}
                                disabled={!!socialLoading}
                                className="p-2 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-all disabled:opacity-50"
                            >
                                {socialLoading === 'linkedin' ? (
                                    <Loader2 className="w-5 h-5 animate-spin text-blue-700" />
                                ) : (
                                    <img src="https://www.svgrepo.com/show/448234/linkedin.svg" className="w-5 h-5" alt="LinkedIn" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Already a member?{' '}
                    <a href="/sign-in" className="text-aviation-600 hover:underline font-semibold">
                        Sign in here
                    </a>
                </p>
            </div>
        </div>
    );
}
