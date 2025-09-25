"use client";
import BackToTop from "@/app/components/BackToTop";
import LeftNav from "@/app/components/LeftNav";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import ProjectIndexNav from "@/app/components/ProjectIndexNav";
import { SectionsProvider } from "@/app/components/SectionsContext";

export default function Layout({
	children,
	sections,
}: {
	children: React.ReactNode;
	sections?: { id: string; label: string; level?: number }[];
}) {
	return (
		<div>
			<SectionsProvider>
				<Header />
				<div className="flex flex-col px-6 pt-10 md:flex-row">
					{/* LeftNav */}
					<aside className="hidden min-[1300px]:flex lg:w-[14%] sticky top-20 self-start z-10">
						<LeftNav />
					</aside>

					{/* Main Content */}
					<main className="w-full md:w-[70%] px-4 md:px-12 pb-10">
						{children}
					</main>

					{/* Right Index */}
					<aside className="hidden min-[1300px]:flex lg:w-[16%] sticky top-20 bottom-0 self-start z-10 overflow-y-auto">
						<ProjectIndexNav />
					</aside>
				</div>
				<Footer />
				<BackToTop />
			</SectionsProvider>
		</div>
	);
}
