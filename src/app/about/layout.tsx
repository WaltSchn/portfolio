"use client";
import BackToTop from "@/app/components/BackToTop";
import LeftNav from "@/app/components/LeftNav";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import ProjectIndexNav from "@/app/components/ProjectIndexNav";
import { ReactNode } from "react";
import { SectionsProvider } from "@/app/components/SectionsContext";
import Image from "next/image";
import blackhole from "@/../public/assets/blackhole-nasa.gif";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

interface LayoutProps {
	children: ReactNode;
	sections?: { id: string; label: string; level?: number }[];
}

export default function Layout({ children }: LayoutProps) {
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
					<aside className="hidden min-[1300px]:flex lg:w-[16%] sticky top-20 bottom-0 self-start z-10 flex-col items-center overflow-y-auto gap-8">
						<ProjectIndexNav />
						<div className="flex items-center justify-center overflow-hidden bg-black border-2 rounded-full w-56 h-56 border-primary">
							<div className="relative w-full h-full overflow-hidden">
								<Image
									src={blackhole}
									alt="Black Hole Avatar"
									fill
									style={{
										objectFit: "cover",
										objectPosition: "center",
									}}
								/>
							</div>
						</div>

						<div className="flex flex-nowrap items-center justify-between w-full max-w-[300px] gap-1 mt-6 px-8 overflow-hidden">
							{[
								{
									href: "https://github.com/WaltSchn",
									label: "Github",
									icon: FaGithub,
								},
								{
									href: "https://linkedin.com/in/waltherschneider",
									label: "LinkedIn",
									icon: FaLinkedin,
								},
								/* 
											{
												href: "",
												label: "Dribbble",
												icon: FaDribbble,
											},
											*/
								{
									href: "mailto:walther.schneider@hotmail.com",
									label: "Email",
									icon: FaEnvelope,
								},
							].map(({ href, label, icon: Icon }) => (
								<a
									key={label}
									href={href}
									aria-label={label}
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-col items-center gap-3 px-1 py-1 group hover:hover-style"
								>
									<Icon className="w-5 h-5 transition-all duration-200 text-text group-hover:hover-style" />
									<span className="text-xs text-text group-hover:hover-style">
										{label}
									</span>
								</a>
							))}
						</div>
					</aside>
				</div>
				<BackToTop />
			</SectionsProvider>
		</div>
	);
}
