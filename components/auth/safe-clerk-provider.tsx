'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import React from 'react';

// Aviation Brand Colors
const brandPrimary = '#0f172a'; // aviation-900 like
const brandSecondary = '#0ea5e9'; // aviation-500 like

export default function SafeClerkProvider({
    children
}: {
    children: React.ReactNode
}) {
    const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
    const isMockKey = !publishableKey || publishableKey.includes('mock');

    if (isMockKey) {
        // If keys are missing, we pass children through WITHOUT the provider
        // This effectively disables "real" auth but stops the crash.
        // The UI must handle the missing auth context gracefully.
        return (
            <>
                {children}
                <div className="fixed bottom-0 left-0 w-full bg-amber-500 text-white text-center text-xs py-1 z-[100]">
                    ⚠ Simulation Mode: Authentication keys are missing. Login is simulated.
                </div>
            </>
        );
    }

    // If keys look valid, we use the real ClerkProvider
    // This enables "Gold Star" Enterprise Auth
    return (
        <ClerkProvider
            appearance={{
                baseTheme: undefined,
                variables: {
                    colorPrimary: '#0284c7', // aviation-600
                    colorText: '#0f172a',
                    borderRadius: '0.75rem',
                    fontFamily: 'inherit',
                },
                elements: {
                    card: 'shadow-xl border border-slate-100',
                    logoBox: 'hidden', // We use our own logo
                    formButtonPrimary: 'bg-aviation-600 hover:bg-aviation-700 text-sm normal-case',
                    headerTitle: 'text-2xl font-bold text-slate-900',
                    headerSubtitle: 'text-slate-500',
                    socialButtonsBlockButton: 'border-slate-200 text-slate-600 hover:bg-slate-50 font-medium',
                    dividerLine: 'bg-slate-200',
                    dividerText: 'text-slate-400',
                    formFieldLabel: 'text-slate-700 font-semibold',
                    formFieldInput: 'border-slate-200 focus:border-aviation-500 focus:ring-aviation-500',
                    footerActionLink: 'text-aviation-600 hover:text-aviation-700 font-semibold'
                }
            }}
        >
            {children}
        </ClerkProvider>
    );
}
