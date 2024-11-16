import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
    title: "유리책 : Your Retry Check",
    description: "예비 번호를 받은 당신, 합격률을 확인해보세요.",
    openGraph: {
        title: "유리책 : Your Retry Check",
        description: "예비 번호를 받은 당신, 합격률을 확인해보세요.",
        url: "https://yourecheck.xyz",
        images: [
            {
                url: "https://bucket.singlethread.studio/yourecheck.png",
                width: 1200,
                height: 630,
                alt: "유리책 로고 및 소개 이미지"
            }
        ],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "유리책 : Your Retry Check",
        description: "예비 번호를 받은 당신, 합격률을 확인해보세요.",
        images: [
            "https://bucket.singlethread.studio/yourecheck.png"
        ]
    }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <Analytics/>
      <Head>
          <meta name="keywords" content="수능, 논술, 예비, 대학, 합격, 입학처, 재수, 반수, 정시, 응원"/>
      </Head>
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {children}
      </body>
      </html>
  );
}
