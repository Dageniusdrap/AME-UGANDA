'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Something went wrong!</h2>
                <p className="text-slate-600 mb-6">
                    We apologize for the inconvenience. The application encountered an unexpected error.
                </p>
                <button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                    className="w-full bg-aviation-600 text-white font-bold py-3 rounded-xl hover:bg-aviation-700 transition"
                >
                    Try again
                </button>
            </div>
        </div>
    );
}
