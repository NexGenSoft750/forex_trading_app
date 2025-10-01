import type { Metadata, Viewport } from "next";
import "@/styles/globals.scss";
import { Poppins } from 'next/font/google';
import Layout from "@/components/layout/Layout";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Dashboard Overview",
    template: "%s | Forex Admin"
  },
  description: "Professional forex trading administration dashboard for managing trading operations, analytics, and market insights",
  keywords: ["forex", "trading", "admin", "dashboard", "analytics", "market", "finance"],
  authors: [{ name: "Forex Admin Team" }],
  creator: "Forex Admin",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dashboard Overview | Forex Admin",
    description: "Professional forex trading administration dashboard",
    siteName: "Forex Admin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard Overview | Forex Admin",
    description: "Professional forex trading administration dashboard",
    creator: "@forexadmin",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={poppins.variable}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
