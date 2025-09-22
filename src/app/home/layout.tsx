import { ReactNode } from "react";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function HomeLayout({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-col min-h-screen overflow-visible">
			<Header />

			<div className="z-10 flex flex-1 min-h-screen px-6 pt-20 md:flex-row">
				{/* LeftNav */}
				<aside className="hidden min-[1300px]:flex lg:w-[14%] sticky top-20 self-start z-10">
					<LeftNav />
				</aside>

				{/* Main Content */}
				<main className="w-full md:w-[65%] max-w-4xl mx-auto px-2 md:px-6 pb-20">
					{children}
				</main>

				{/* RightNav */}
				<aside className="hidden min-[1500px]:flex lg:w-[21%] sticky top-20 self-start z-10">
					<RightNav />
				</aside>
			</div>
			<div className="min-[1500px]:hidden">
				<Footer />
			</div>

			<BackToTop />
		</div>
	);
}
