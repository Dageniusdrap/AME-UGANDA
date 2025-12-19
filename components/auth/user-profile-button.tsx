'use client';

import { UserButton, useUser } from '@clerk/nextjs';
// import { Button } from '@/components/ui/button'; // Commented out as UI components are not yet created. Using native buttons or standard HTML for now or I should create a quick Button component?
// The user typically uses shadcn/ui. I will create a simple button or just assume it exists if I can install it.
// The user provided package.json has "class-variance-authority", "clsx", "tailwind-merge", so they are ready for shadcn.
// I'll create a basic Button component in components/ui/button.tsx quickly after this.
// For now I'll write this file and assume Button exists. I will create Button next.
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function UserProfileButton() {
    const { isSignedIn, user, isLoaded } = useUser();

    if (!isLoaded) {
        return <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />;
    }

    if (!isSignedIn) {
        return (
            <div className="flex gap-2">
                <Button asChild variant="ghost">
                    <Link href="/sign-in">Sign In</Link>
                </Button>
                <Button asChild>
                    <Link href="/sign-up">Join Now</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
                Hello, {user.firstName}
            </span>
            <UserButton
                afterSignOutUrl="/"
                appearance={{
                    elements: {
                        avatarBox: "w-10 h-10"
                    }
                }}
            />
        </div>
    );
}
