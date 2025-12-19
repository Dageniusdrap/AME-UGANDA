import { NextResponse } from "next/server";

// TEMPORARILY DISABLED FOR MOCK MODE
// import { authMiddleware } from "@clerk/nextjs/server";

// export default authMiddleware({
//   // ... (original config preserved in comments)
// });

export function middleware() {
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
