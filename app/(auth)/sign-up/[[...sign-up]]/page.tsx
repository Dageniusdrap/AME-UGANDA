import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Join Aviation Engineers Uganda
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Become part of Uganda's premier aviation maintenance community
                    </p>
                </div>

                <SignUp
                    appearance={{
                        elements: {
                            formButtonPrimary:
                                'bg-blue-600 hover:bg-blue-700 text-sm normal-case',
                            card: 'shadow-xl',
                            headerTitle: 'hidden',
                            headerSubtitle: 'hidden',
                        },
                    }}
                    redirectUrl="/onboarding"
                />

                <p className="text-center text-sm text-gray-600 mt-4">
                    Already a member?{' '}
                    <a href="/sign-in" className="text-blue-600 hover:underline">
                        Sign in here
                    </a>
                </p>
            </div>
        </div>
    );
}
