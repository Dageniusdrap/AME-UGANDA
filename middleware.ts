import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
    '/onboarding(.*)',
    '/api/member(.*)'
]);

export default function middleware(req: any, evt: any) {
    // Check for valid keys to avoid crash in Preview Mode
    const pubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
    const isMock = !pubKey || pubKey.includes('mock');

    if (isMock) {
        return NextResponse.next();
    }

    // Real Enterprise Security
    return clerkMiddleware(async (auth, req) => {
        if (isProtectedRoute(req)) await auth.protect();
    })(req, evt);
}

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
