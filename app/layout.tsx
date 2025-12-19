import SafeClerkProvider from '@/components/auth/safe-clerk-provider';
import Navbar from '@/components/shared/navbar';
import './globals.css';
import '../app/global-error'; // Import to ensure it's registered if needed

export const metadata = {
  title: 'Aviation Engineers Uganda',
  description: 'The premier body for Aircraft Maintenance, Aeronautical, and Aerospace Engineers Uganda',
};

import { Toaster } from 'sonner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SafeClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning>
          <Navbar />
          {children}
          <Toaster position="top-center" richColors />
        </body>
      </html>
    </SafeClerkProvider>
  );
}
