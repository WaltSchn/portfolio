"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 p-4 space-y-4 flex flex-col items-center min-[1300px]:hidden background-header">
			{/* Logo */}
			<div className="flex justify-center shrink-0">
				<Image
					src="/assets/Logo.png"
					alt="Logo"
					width={60}
					height={60}
					className="rounded-xl"
				/>
			</div>

			<nav className="flex flex-wrap justify-center gap-6 px-2">
				{[
					{ href: "/home/ux", label: "UX Projects" },
					{ href: "/home/dev", label: "Dev Projects" },
					{ href: "/about", label: "About Me" },
					{ href: "/resume", label: "Resume" },
				].map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className="px-3 py-2 text-sm rounded-full bg-[rgba(111,78,140,0.2)] text-s hover:hover-style"
					>
						{item.label}
					</Link>
				))}
			</nav>
		</header>
	);
}
