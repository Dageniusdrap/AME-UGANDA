'use client';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
                    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Something went wrong!</h2>
                        <p className="text-slate-600 mb-6 font-mono text-sm bg-slate-100 p-2 rounded">
                            {error.message || 'Unknown error occurred'}
                        </p>
                        <button
                            onClick={() => reset()}
                            className="w-full bg-aviation-600 text-white font-bold py-3 rounded-xl hover:bg-aviation-700 transition"
                        >
                            Try again
                        </button>
                        <a href="/" className="block mt-4 text-sm text-slate-500 hover:text-aviation-600">
                            Go back home
                        </a>
                    </div>
                </div>
            </body>
        </html>
    );
}
