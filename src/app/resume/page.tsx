"use client";

import { useEffect } from "react";
import CaseSection from "@/app/components/CaseSection";
import { useSections } from "@/app/components/SectionsContext";
import { FaDownload } from "react-icons/fa";

export default function ResumePage() {
	const { setSections } = useSections();

	useEffect(() => {
		setSections([
			{ id: "summary", label: "Summary" },
			{ id: "skills", label: "Skills" },
			{ id: "projects", label: "Academic Projects" },
			{ id: "experience", label: "Professional Experience" },
			{ id: "volunteer", label: "Volunteer Experience" },
			{ id: "education", label: "Education" },
		]);
	}, [setSections]);

	return (
		<>
			<div className="flex flex-col items-center justify-between mb-12 md:flex-row">
				<div className="pl-10 text-center md:text-left">
					<h1 className="text-4xl font-bold text-text">Walther Schneider</h1>
					<p className="mt-1 mb-1 text-text/80">
						walther.schneider@hotmail.com • +1 (672) 380-3012
					</p>
					<p className="text-text/80">
						<a
							href="https://www.linkedin.com/in/waltherschneider"
							className="underline text-primary hover:text-primary/80"
						>
							LinkedIn
						</a>{" "}
						•{" "}
						<a
							href="#"
							className="ml-1 underline text-primary hover:text-primary/80"
						>
							Portfolio
						</a>
					</p>
				</div>

				{/* Right: Download Button */}
				<div className="pr-10 mt-4 md:mt-0">
					<a
						href="/assets/Walther_Schneider_Resume.pdf"
						download
						aria-label="Download Resume"
						className="inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-medium transition-colors duration-200 border rounded-md border-text/40 text-text hover:bg-primary hover:text-white"
					>
						<FaDownload className="w-4 h-4" />
						Download Resume
					</a>
				</div>
			</div>

			{/* Summary */}
			<div id="summary">
				<CaseSection title="Summary">
					<p className="leading-relaxed text-text">
						User Experience and Interactive Design student with a foundation in
						web development and process automation. Skilled in translating
						complex workflows into simple, usable digital tools. Known for being
						detail-oriented, collaborative, and focused on practical,
						user-centered solutions. Eager to grow in a role where I can connect
						design thinking with real-world development.
					</p>
				</CaseSection>
			</div>

			{/* Skills */}
			<div id="skills">
				<CaseSection title="Skills">
					<ul className="pl-5 space-y-1 list-disc text-text">
						<li>
							<strong>Languages & Frameworks:</strong> HTML, CSS, JavaScript,
							React, Angular, C#, Next.js
						</li>
						<li>
							<strong>Tools:</strong> Figma, Git, Jira, Confluence
						</li>
						<li>
							<strong>Soft Skills & Methods:</strong> Responsive design,
							accessibility basics, documentation, Agile methodology,
							collaboration, problem-solving, attention to detail, adaptability,
							user-focused mindset
						</li>
					</ul>
				</CaseSection>
			</div>

			{/* Academic Projects */}
			<div id="projects">
				<CaseSection title="Academic Projects">
					<div className="mb-4">
						<h3 className="font-semibold text-text">
							OpenWay - Accessibility Map App
						</h3>
						<ul className="pl-5 space-y-1 list-disc text-text">
							<li>
								Designed and tested personalized routing and accessibility
								filters to improve navigation in Vancouver.
							</li>
							<li>
								Conducted competitor analysis and usability testing, refining
								navigation and content structure.
							</li>
						</ul>
					</div>

					<div className="mb-4">
						<h3 className="font-semibold text-text">
							Festival Hopper - Festival & Concert Planning App
						</h3>
						<ul className="pl-5 space-y-1 list-disc text-text">
							<li>
								Built an app concept to help users discover, track, and purchase
								tickets for festivals.
							</li>
							<li>
								Created user personas, information architecture, and prototypes;
								usability tests validated ease of checkout and ticketing.
							</li>
						</ul>
					</div>

					<div className="mb-4">
						<h3 className="font-semibold text-text">
							Bee the Chef - Meal Planner App
						</h3>
						<ul className="pl-5 space-y-1 list-disc text-text">
							<li>
								Designed a mobile app promoting healthy and affordable eating
								with local ingredients.
							</li>
							<li>
								Led user research, usability testing, and iterative design to
								refine recipe, meal plan, and grocery flows.
							</li>
						</ul>
					</div>
				</CaseSection>
			</div>

			{/* Professional Experience */}
			<div id="experience">
				<CaseSection title="Professional Experience">
					<div className="mb-4">
						<h3 className="font-semibold text-text">
							Itaú Unibanco - São Paulo, Brazil
						</h3>
						<p className="mb-1 italic text-text">
							Tech Lead | Sep 2022 - Mar 2024
						</p>
						<ul className="pl-5 space-y-1 list-disc text-text">
							<li>
								Led a team of 5 developers across 3 projects, boosting delivery
								speed by 20% through concise meetings and upfront alignment with
								business goals.
							</li>
							<li>
								Implemented process improvements in internal documentation,
								making it easier for teams to find information and reducing
								recurring support requests.
							</li>
						</ul>
					</div>

					<div className="mb-4">
						<p className="mb-1 italic text-text">
							Tech Analyst | Jan 2021 - Aug 2022
						</p>
						<ul className="pl-5 space-y-1 list-disc text-text">
							<li>
								Supported 10-20 internal teams weekly with documentation, API
								usage, and infrastructure needs.
							</li>
							<li>
								Maintained onboarding materials and improved launch guides,
								reducing support delays.
							</li>
							<li>
								Collaborated with senior developers and UX designers to refine
								workflows and internal dashboards.
							</li>
						</ul>
					</div>

					<div className="mb-4">
						<p className="mb-1 italic text-text">
							Web Developer | Oct 2018 - Dec 2020
						</p>
						<ul className="pl-5 space-y-1 list-disc text-text">
							<li>
								Developed and maintained internal tools using Angular and C#.
							</li>
							<li>
								Reduced manual processing by 30% by designing a checks portal
								feature that combined data from multiple APIs into complete
								check records.
							</li>
							<li>
								Conducted user interviews and translated requirements into
								wireframes and user flows.
							</li>
						</ul>
					</div>
				</CaseSection>
			</div>

			{/* Volunteer Experience */}
			<div id="volunteer">
				<CaseSection title="Volunteer Experience">
					<div className="mb-4">
						<h3 className="font-semibold text-text">
							Vancouver Startup Week & Vancouver Cloud Summit (2025)
						</h3>
						<ul className="pl-5 space-y-1 list-disc text-text">
							<li>
								Helped attendees exchange event items at the trading booth while
								providing directions and maintaining a welcoming atmosphere.
							</li>
							<li>
								Greeted and checked in attendees, assisting with setup and
								backstage tasks.
							</li>
						</ul>
					</div>
				</CaseSection>
			</div>

			{/* Education */}
			<div id="education">
				<CaseSection title="Education">
					<ul className="pl-5 space-y-1 list-disc text-text">
						<li>
							Diploma in User Experience and Interactive Design | CCTB -
							Vancouver, Canada (2024-Present)
						</li>
						<li>
							MBA in Full Stack Development - Design, Engineering & Deployment |
							FIAP - São Paulo, Brazil (2022-2023)
						</li>
						<li>
							Bachelor’s in Chemical Engineering | UNIFESP - São Paulo, Brazil
							(2013-2019)
						</li>
					</ul>
				</CaseSection>
			</div>
		</>
	);
}
