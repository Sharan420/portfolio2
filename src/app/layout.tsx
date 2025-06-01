import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeprovider";
import { ThemeBtn } from "@/components/ui/themebtn";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sharan Suri",
  description: "Hi this is my Portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={`${inter.className} antialiased w-screen md:w-full`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='fixed bottom-4 right-4 z-20'>
            <ThemeBtn />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
