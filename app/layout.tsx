import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meet",
  description: "Video calling App",
  icons: {
    icon: "/icons/Video.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/The Meet-logo.svg",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#8b5cf6",
            colorBackground: "#000000",
            colorInputBackground: "#1a1a1a",
            colorInputText: "#fff",
          },
        }}
      >
        <body className={`${inter.className} bg-black-gradient min-h-screen`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
