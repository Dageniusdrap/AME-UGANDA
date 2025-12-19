import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import Navbar from '@/components/shared/navbar';
import './globals.css';

export const metadata = {
  title: 'Aviation Engineers Uganda',
  description: 'The premier body for Aircraft Maintenance, Aeronautical, and Aerospace Engineers Uganda',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ClerkProvider ...>  <-- Disabled due to invalid Publishable Key
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
    // </ClerkProvider>
  );
}
