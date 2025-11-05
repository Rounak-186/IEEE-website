import type { Metadata } from "next";
import { Geist, Geist_Mono, Ubuntu, Ubuntu_Mono } from "next/font/google";
// @ts-ignore: allow importing global CSS without type declarations
import "./globals.css";
// @ts-ignore: allow importing nprogress CSS without type declarations
import 'nprogress/nprogress.css';
import NavBar from "@/components/navBar";
import { NavbarProvider } from "@/context/navbarContext";
import { HeaderNav } from "@/components/HeaderNav";
import { Footer } from "@/components/Footer";
import { StoreProvider } from "@/context/storeContext";
import LoadingProgress from "@/components/PageProgressBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IEEE JGEC Student Branch",
  description: "Welcome to IEEE JGEC Student Branch — inspiring innovation, empowering learners, and building a community of tech enthusiasts at JGEC."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu} antialiased`}
      >
        <StoreProvider>
          <NavbarProvider>
            {/* Progress bar */}
            <LoadingProgress />
            {/* NavBar */}
            <HeaderNav />
            <main className="min-h-screen">
              {children}
            </main>
            <footer>
              <Footer />
            </footer>
          </NavbarProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
