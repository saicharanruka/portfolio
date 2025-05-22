import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Analytics } from "@vercel/analytics/next";
import Head from "next/head";

const spaceGrotesk = Space_Grotesk({
	variable: "--font-primary",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Ruka Sai Charan | Web developer & designer",
	description:
		"I am a web developer focused on making modern, fast and SEO optimized websites",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${spaceGrotesk.variable} font-primary`}>
			<Head>
				<meta
					name="google-site-verification"
					content="e98s5H2TrfjOkoKAi8J9-vohdvr_RZoUKpdzryFvuQ4"
				/>
			</Head>
			<body
				className={`max-w-5xl mx-4 mt-5 lg:mx-auto antialiased bg-[#F4F4F4]`}
			>
				<Analytics />
				<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
					<NavBar />

					{children}
				</main>
			</body>
		</html>
	);
}
