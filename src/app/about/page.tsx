"use client";
import { useEffect } from "react";
import CaseSection from "@/app/components/CaseSection";
import { useSections } from "@/app/components/SectionsContext";

export default function AboutMe() {
	const { setSections } = useSections();

	useEffect(() => {
		setSections([
			{ id: "section-0", label: "Introduction" },
			{ id: "section-1", label: "Background" },
			{ id: "section-2", label: "Skills & Interests" },
		]);
	}, [setSections]);

	return (
		<>
			{/* Page Header */}
			<div className="mb-12">
				<div className="flex flex-col items-center justify-center gap-6 mb-12">
					<h1 className="text-4xl font-bold text-text">About Me</h1>
				</div>
			</div>

			{/* Introduction */}
			<div id="section-0">
				<CaseSection title="Introduction">
					<p className="mb-4 text-text">
						I’m
						<span className="font-bold text-primary"> Walther Schneider</span>,
						a<span className="text-primary"> UX designer & developer </span>
						focused on building digital experiences that feel natural and
						useful. I enjoy working across
						<span className="text-primary"> design</span> and
						<span className="text-primary"> code</span>, turning ideas into
						solutions that are <span className="text-primary">accessible</span>,
						<span className="text-primary"> practical</span>, and
						<span className="text-primary"> user-friendly</span>. My goal is
						always to bridge creativity with functionality, making technology
						easier for people to use and enjoy.
					</p>
				</CaseSection>
			</div>

			{/* Background */}
			<div id="section-1">
				<CaseSection title="Background">
					<p className="mb-4 text-text">
						Before moving into design, I worked in{" "}
						<span className="text-primary">web development</span> and{" "}
						<span className="text-primary">process automation</span>, mainly
						supporting teams with internal tools and documentation with a touch
						of project management. After realizing my interest about technology,
						I decided to take an{" "}
						<span className="text-primary">MBA course</span> to understand that
						world better and I was introduced to{" "}
						<span className="text-primary">UX</span>. Those experiences taught
						me how much <span className="text-primary">usability</span> matters
						and pushed me to specialize in this area. Today, I combine that
						technical background with design methods like{" "}
						<span className="text-primary">user research</span>,{" "}
						<span className="text-primary">prototyping</span>, and{" "}
						<span className="text-primary">usability testing</span>.
					</p>
				</CaseSection>
			</div>

			{/* Interests */}
			<div id="section-2">
				<CaseSection title="Interests & Hobbies">
					<p className="mb-4 text-text">
						Outside of work and studies, I enjoy{" "}
						<span className="text-primary">
							learning about languages and cultures
						</span>
						, <span className="text-primary">gaming (PC and mobile)</span>, and{" "}
						<span className="text-primary">listening to music</span>. I’m also
						passionate about astronomy, science, and animals. In my free time,
						you might find me gaming, practicing Duolingo, watching funny pet
						videos, or contemplating the universe.
					</p>
				</CaseSection>
			</div>
		</>
	);
}
