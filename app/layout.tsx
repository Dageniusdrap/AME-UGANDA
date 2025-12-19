import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import Navbar from '@/components/shared/navbar';
import './globals.css';

export const metadata = {
  title: 'Aviation Engineers Uganda',
  description: 'Aviation Engineers and Maintenance Professionals Uganda',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark, // or undefined for light mode
        variables: {
          colorPrimary: '#1e3a8a', // Navy blue
          colorBackground: '#ffffff',
          colorText: '#111827',
          colorInputBackground: '#f9fafb',
          colorInputText: '#111827',
        },
        elements: {
          formButtonPrimary:
            'bg-blue-600 hover:bg-blue-700 text-white',
          card: 'shadow-lg',
          headerTitle: 'text-blue-900',
          headerSubtitle: 'text-gray-600',
          socialButtonsBlockButton:
            'border-gray-300 hover:bg-gray-50',
          formFieldLabel: 'text-gray-700 font-medium',
          footerActionLink: 'text-blue-600 hover:text-blue-700',
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
