import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';

import { ThemeProvider } from "~/components/ThemeProvider";
import { Contents } from "~/contents/Sentences";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(Contents.MetaData.Url),
  title: {
    default: Contents.MetaData.Name,
    template: `%s | ${Contents.MetaData.Name}`,
  },
  description: Contents.MetaData.Description,
  openGraph: {
    title: `${Contents.MetaData.Name}`,
    description: Contents.MetaData.Description,
    url: Contents.MetaData.Url,
    siteName: `${Contents.Name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${Contents.MetaData.Name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <NextTopLoader
            color="#4EE35A"
            initialPosition={0.08}
            crawlSpeed={100}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={100}
            shadow="0 0 10px #6533e2,0 0 5px #6533e2"
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
