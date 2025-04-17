import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { Oxanium } from "next/font/google";

const oxanium = Oxanium({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oxanium",
});

export const metadata: Metadata = {
  title: "Mahesh R",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={oxanium.className}>
        <ThemeProvider attribute="class" enableSystem>
          <Theme radius="medium" accentColor="violet">
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
