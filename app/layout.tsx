import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { Oxanium } from "next/font/google";
import LoadingProvider from "@/components/LoadingProvider";

const oxanium = Oxanium({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oxanium",
});

export const metadata: Metadata = {
  title: "Mahesh R",
  description: "Full Stack AI Developer Intern @ StackLane",
  openGraph: {
    type: "website",
    url: "https://m57.vercel.app/",
    title: "Mahesh R",
    description: "Full Stack AI Developer Intern @ StackLane",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/61df15e6-7582-44a0-a380-694d9fd9dcfb.png?token=slwfH-9uBqHRZs0zc6sXGcm-zP9CHqxTz_bDz0TuzN0&height=800&width=1200&expires=33281208445",
        width: 1200,
        height: 800,
      },
    ],
  },
};


const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className={oxanium.className}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Theme radius="medium" accentColor="violet">
            <LoadingProvider>{children}</LoadingProvider>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
