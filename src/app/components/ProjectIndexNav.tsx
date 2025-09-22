"use client";
import React from "react";
import clsx from "clsx";
import { useSections } from "@/app/components/SectionsContext";

export default function ProjectIndexNav() {
	const { sections } = useSections();

	return (
		<nav className="max-h-[calc(100vh-5rem)] overflow-y-auto mb-8">
			<h3 className="mb-4 text-lg font-semibold text-lightAccent">
				On this page
			</h3>
			<ul className="space-y-2 text-xs">
				{sections.map(({ id, label, level }) => (
					<li
						key={id}
						className={clsx({
							"ml-0": !level,
							"ml-4": level === 1,
							"ml-8": level === 2,
							"ml-12": level === 3,
						})}
					>
						<a
							href={`#${id}`}
							className="block transition-colors duration-200 text-text hover:text-lightAccent"
							onClick={(e) => {
								e.preventDefault();
								document
									.getElementById(id)
									?.scrollIntoView({ behavior: "smooth" });
							}}
						>
							{label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
