import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { ModalProvider } from "@/context/ModalContext";
import ContactModal from "@/components/ContactModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DEVSIRCH HUB - Empowering Your Digital Future",
  description: "Comprehensive IT solutions including cybersecurity, web development, and ICT infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider>
          <Layout>{children}</Layout>
          <ContactModal />
        </ModalProvider>
      </body>
    </html>
  );
}
