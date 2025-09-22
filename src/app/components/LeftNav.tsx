"use client";
import Link from "next/link";
import Image from "next/image";

export default function LeftNav() {
	return (
		<aside className="mb-12 space-y-6 md:space-y-8 lg:space-y-10">
			<Link href="/home/ux">
				<Image
					src="/assets/Logo.png"
					alt="Logo"
					width={200}
					height={200}
					className="
    w-24 h-auto rounded-[20px] mx-auto 
    md:w-24 lg:w-48
  "
				/>
			</Link>
			<nav className="space-y-4 text-base text-center md:space-y-6 lg:space-y-8 md:text-lg">
				<Link href="/home/ux" className="block hover:hover-style">
					UX Projects
				</Link>
				<Link href="/home/dev" className="block hover:hover-style">
					Dev Projects
				</Link>
				<Link href="/about" className="block hover:hover-style">
					About Me
				</Link>
				<Link href="/resume" className="block hover:hover-style">
					Resume
				</Link>
			</nav>
		</aside>
	);
}
