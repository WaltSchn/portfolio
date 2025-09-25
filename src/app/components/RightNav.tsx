"use client";
import { FaGithub, FaLinkedin, FaDribbble, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import blackhole from "@/../public/assets/blackhole-nasa.gif";

export default function RightNav() {
	return (
		<aside className="flex flex-col items-center gap-8 px-4 overflow-x-hidden">
			<div className="flex items-center justify-center overflow-hidden bg-black border-2 rounded-full w-44 h-44 border-primary">
				<div
					className="relative"
					style={{
						width: "100%",
						height: "90%",
						overflow: "hidden",
					}}
				>
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
			<div className="text-center max-w-[220px]">
				<div className="text-lg font-bold leading-tight text-white lg:text-xl">
					Walther Schneider
				</div>
				<div className="mt-1 text-sm text-lightAccent">
					UX Designer & Fullstack Dev
				</div>
			</div>
			<p className="max-w-xs mt-3 text-sm leading-relaxed text-center text-text">
				With a background in UX design and fullstack development, I create
				products that balance{" "}
				<span className="font-semibold text-primary">
					usability, accessibility, and performance
				</span>
				. I enjoy working across design and code to build practical,
				user-friendly solutions.
			</p>
			<div className="flex flex-nowrap items-center justify-between w-full max-w-[300px] gap-1 px-8 overflow-hidden">
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
	);
}
