import 'dotenv/config';

console.log("Checking Environment Variables...");
console.log("NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ? "SET" : "MISSING");
console.log("CLERK_SECRET_KEY:", process.env.CLERK_SECRET_KEY ? "SET" : "MISSING");
console.log("NEXT_PUBLIC_CLERK_SIGN_IN_URL:", process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL);
console.log("NEXT_PUBLIC_CLERK_SIGN_UP_URL:", process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL);
console.log("NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL:", process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL);
console.log("NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL:", process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL);
console.log("DATABASE_URL:", process.env.DATABASE_URL ? "SET" : "MISSING");
