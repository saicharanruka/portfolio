import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const spaceGrotesk = Space_Grotesk({
	variable: "--font-primary",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Ruka Sai Charan | Web developer & designer",
	description: "Ruka Sai Charan's portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${spaceGrotesk.variable} font-primary`}>
			<body
				className={`max-w-5xl mx-4 mt-5 lg:mx-auto antialiased bg-[#F4F4F4]`}
			>
				<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
					<NavBar />

					{children}
				</main>
			</body>
		</html>
	);
}
