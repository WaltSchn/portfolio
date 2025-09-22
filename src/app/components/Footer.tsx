"use client";
import { FaGithub, FaLinkedin, FaDribbble, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import blackhole from "@/../public/assets/blackhole-nasa.gif";

export default function Footer() {
	return (
		<footer className="flex flex-col items-center gap-6 w-full p-6 border-t bg-background/80 border-white/10">
			<div className="flex flex-col items-center gap-2">
				<div className="relative w-24 h-24 overflow-hidden rounded-full border-2 border-primary">
					<Image
						src={blackhole}
						alt="Black Hole Avatar"
						fill
						style={{ objectFit: "cover", objectPosition: "center" }}
					/>
				</div>
				<div className="text-lg font-bold leading-tight text-white">
					Walther Schneider
				</div>
				<div className="text-sm text-center text-lightAccent">
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

			<div className="flex flex-wrap justify-center gap-4 mt-2">
				{[
					{
						href: "https://github.com/WaltSchn",
						icon: FaGithub,
						label: "Github",
					},
					{
						href: "https://linkedin.com/in/waltherschneider",
						icon: FaLinkedin,
						label: "LinkedIn",
					},
					/* 
					{
						href: "",
						icon: FaDribbble,
						label: "Dribbble",
					},
					*/
					{
						href: "mailto:walther.schneider@hotmail.com",
						icon: FaEnvelope,
						label: "Email",
					},
				].map(({ href, icon: Icon, label }) => (
					<a
						key={label}
						href={href}
						aria-label={label}
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col items-center gap-1 px-2 py-1 group hover:text-primary"
					>
						<Icon className="w-5 h-5 transition-colors duration-200" />
						<span className="text-xs">{label}</span>
					</a>
				))}
			</div>
		</footer>
	);
}
