import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BabbleBuddy",
  keywords: ["AI", "Education", "Teaching", "Companions", "Learning"],
  description: "BabbleBuddy: Your AI companion for learning and exploration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mt-2" suppressHydrationWarning>
      <body className={`${bricolage.variable} antialiased`}>
        <ClerkProvider appearance={{ variables: { colorPrimary: "#64eb34" } }}>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </ClerkProvider>
        <Footer />
      </body>
    </html>
  );
}
