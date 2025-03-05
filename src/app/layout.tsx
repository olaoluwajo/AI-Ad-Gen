import clsx from "clsx";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { TopProgressBarProvider } from "@/lib/nprogress/top-progress-bar-provider";
import QueryProvider from "@/lib/react-query/query-provider";
import { SonnerToaster } from "@/components/sonner-toaster";

import Header from "@/components/Header";

import "./globals.css";
import Footer from "@/components/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Adgen",
  description: "AI Adgen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(manrope.variable)}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <body className="dark font-manrope">
        <QueryProvider>
          <TopProgressBarProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
              <SonnerToaster />
            </div>
          </TopProgressBarProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
