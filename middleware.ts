import { NextResponse } from "next/server";

// Valid Clerk keys are required for the real middleware.
// Reverting to mock mode until KEYS are updated in .env.local
export function middleware() {
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
