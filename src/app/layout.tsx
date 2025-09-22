import "./globals.css";
import type { Metadata } from "next";
import { Inter, Reem_Kufi_Ink } from "next/font/google";
import GlobalLoader from "@/app/components/GlobalLoader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const kufi = Reem_Kufi_Ink({
	subsets: ["latin"],
	variable: "--font-kufi",
	weight: "400",
});

export const metadata: Metadata = {
	title: "Walther Schneider Portfolio",
	description: "UX & Developer Portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${kufi.variable} font-sans`}>
				{/* Background Additional Layers */}
				<div className="stars-layer2 fixed inset-0 pointer-events-none w-full h-full -z-[1]" />
				<div className="stars-layer3 fixed inset-0 pointer-events-none w-full h-full -z-[1]" />

				{/* Loader and Content */}
				<GlobalLoader>{children}</GlobalLoader>
			</body>
		</html>
	);
}
