"use client";
import { useEffect } from "react";
import CaseSection, { CaseImage } from "@/app/components/CaseSection";
import CaseCarousel from "@/app/components/CaseCarousel";
import { useSections } from "@/app/components/SectionsContext";

import logo from "@/../public/assets/projects/OpenWay/openway-logo.png";
import img1 from "@/../public/assets/projects/OpenWay/openway-img1.jpg";
import img2 from "@/../public/assets/projects/OpenWay/openway-img2.jpg";
import img3 from "@/../public/assets/projects/OpenWay/openway-img3.jpg";
import img4 from "@/../public/assets/projects/OpenWay/openway-img4.jpg";
import img5 from "@/../public/assets/projects/OpenWay/openway-img5.jpg";
import img6 from "@/../public/assets/projects/OpenWay/openway-img6.jpg";
import img7 from "@/../public/assets/projects/OpenWay/openway-img7.jpg";
import img8 from "@/../public/assets/projects/OpenWay/openway-img8.jpg";
import img9 from "@/../public/assets/projects/OpenWay/openway-img9.jpg";
import img10 from "@/../public/assets/projects/OpenWay/openway-img10.jpg";
import img11 from "@/../public/assets/projects/OpenWay/openway-img11.jpg";
import img12 from "@/../public/assets/projects/OpenWay/openway-img12.jpg";
import img13 from "@/../public/assets/projects/OpenWay/openway-img13.jpg";
import img14 from "@/../public/assets/projects/OpenWay/openway-img14.jpg";
import img15 from "@/../public/assets/projects/OpenWay/openway-img15.jpg";
import img16 from "@/../public/assets/projects/OpenWay/openway-img16.jpg";
import img17 from "@/../public/assets/projects/OpenWay/openway-img17.jpg";
import img18 from "@/../public/assets/projects/OpenWay/openway-img18.jpg";
import img19 from "@/../public/assets/projects/OpenWay/openway-img19.jpg";

export default function OpenWayProject() {
	const { setSections } = useSections();

	useEffect(() => {
		setSections([
			{ id: "section-0", label: "Project Overview" },
			{ id: "section-1", label: "1 - Empathize & Discover" },
			{ id: "section-1.1", label: "1.1 - Context", level: 1 },
			{ id: "section-1.2", label: "1.2 - Statistics", level: 1 },
			{ id: "section-1.3", label: "1.3 - Survey", level: 1 },
			{ id: "section-1.4", label: "1.4 - Competitive Analysis", level: 1 },
			{ id: "section-2", label: "2 - Define & Refine" },
			{ id: "section-2.1", label: "2.1 - Persona", level: 1 },
			{ id: "section-2.2", label: "2.2 - User Journey Map", level: 1 },
			{ id: "section-2.3", label: "2.3 - Problem & HMW", level: 1 },
			{ id: "section-2.4", label: "2.4 - Solution & MVP", level: 1 },
			{ id: "section-3", label: "3 - Ideate & Conceptualize" },
			{ id: "section-3.1", label: "3.1 - Brainstorm & IA", level: 1 },
			{ id: "section-3.2", label: "3.2 - Wireframes", level: 1 },
			{ id: "section-4", label: "4 - Prototype & Test" },
			{ id: "section-4.1", label: "4.1 - High-Fidelity Prototype", level: 1 },
			{ id: "section-4.2", label: "4.2 - Usability Testing", level: 1 },
			{ id: "section-5", label: "5 - Deliver & Next Steps" },
			{ id: "section-5.1", label: "5.1 - Final Design", level: 1 },
			{ id: "section-5.2", label: "5.2 - Next Steps", level: 1 },
		]);
	}, [setSections]);
	return (
		<>
			{/* Project Header */}
			<div className="mb-12">
				<div className="flex items-center justify-center gap-12 mb-12">
					<CaseImage src={logo} alt="OpenWay logo" isLogo />
					<h1 className="text-4xl font-bold text-text">OpenWay</h1>
				</div>
				<div className="flex flex-col items-start max-w-4xl mx-auto space-y-1 text-sm text-text">
					<span>
						<strong className="text-primary">Role:</strong> UX - Focus on
						Research & Design
					</span>
					<span>
						<strong className="text-primary">Timeline:</strong> April 2025 -
						June 2025
					</span>
					<span>
						<strong className="text-primary">Tools:</strong> Figma, Figjam,
						Google Forms, Useberry
					</span>
					<span>
						<strong className="text-primary">Deliverables:</strong> Research,
						IA, Wireframes, Prototype
					</span>
					<span>
						<strong className="text-primary">Tags:</strong> UX / User Research /
						Usability Testing / Wireframing / Prototyping / Information
						Architecture
					</span>
				</div>
			</div>
			{/* Project Overview */}
			<div id="section-0">
				<CaseSection title="Project Overview">
					<p className="mb-4 text-text">
						One afternoon in Vancouver, an elderly woman asked me for directions
						to the entrance elevator, only to find it was out of service. She
						sighed, saying it wasn&apos;t the first time. That brief moment
						showed me how much timely accessibility information can affect
						someone&apos;s day.
					</p>
					<p className="mb-4 text-text">
						This inspired OpenWay, a community-driven platform where users share
						real-time details about the accessibility of public spaces,
						businesses, and transit in Vancouver, making navigation easier, more
						predictable, and inclusive for all. The project was developed as
						part of my coursework at CCTB, focusing on user-centered design and
						practical UX skills.
					</p>
				</CaseSection>
			</div>
			<h2 className="mb-6 text-2xl font-bold">Design Thinking Process:</h2>
			{/* 1 - Empathize & Discover */}
			<div id="section-1">
				<CaseSection title="1 - Empathize & Discover">
					<div className="mb-8" id="section-1.1">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							1.1 - Context & Core Concepts
						</h4>

						{/* General Concepts */}
						<h5 className="mb-2 ml-20 text-base font-semibold text-lightAccent">
							General Concepts of Accessibility
						</h5>
						<p className="mb-4 ml-20 text-text">
							Accessibility is about ensuring that all people can participate
							fully and independently in everyday life, regardless of physical,
							sensory, or cognitive abilities. It is both the removal of
							barriers and the proactive design of environments that welcome
							everyone.
						</p>
						<ul className="mb-4 ml-32 list-disc text-text">
							<li>Equal access to spaces, services, and opportunities.</li>
							<li>
								Clear and inclusive communication, both physical and digital.
							</li>
							<li>
								Environments that adapt to diverse needs without requiring
								special modifications.
							</li>
						</ul>

						{/* Urban Accessibility */}
						<h5 className="mb-2 ml-20 text-base font-semibold text-lightAccent">
							Urban Accessibility
						</h5>
						<p className="mb-4 ml-20 text-text">
							In the context of cities, these ideas become{" "}
							<i>urban accessibility</i>: creating sidewalks, streets, public
							transit, and facilities that can be navigated and used by
							everyone. It also includes signage, technology, and community
							services that consider a variety of physical and cognitive
							abilities.
						</p>

						{/* Vancouver Practices */}
						<h5 className="mb-2 ml-20 text-base font-semibold text-lightAccent">
							Accessibility in Vancouver
						</h5>
						<p className="mb-4 ml-20 text-text">
							In Vancouver, accessibility is integrated into long-term urban
							planning. Practical measures include:
						</p>
						<ul className="mb-4 ml-32 list-disc text-text">
							<li>Curb cuts and wide, obstruction-free sidewalks.</li>
							<li>Tactile paving for wayfinding and safety.</li>
							<li>Audio-visual announcements in public transit.</li>
							<li>Step-free access to buildings and facilities.</li>
							<li>
								Consistent maintenance of accessibility features across
								neighborhoods.
							</li>
						</ul>

						<h5 className="mb-2 ml-20 text-base font-semibold text-lightAccent">
							Design Principles
						</h5>
						<p className="mb-4 ml-20 text-text">
							From a design perspective, Vancouver follows principles from the{" "}
							<i>Universal Design</i> framework, such as:
						</p>
						<ul className="mb-4 ml-32 list-disc text-text">
							<li>
								<b>Equitable Use</b>: serving people with diverse abilities
								equally.
							</li>
							<li>
								<b>Flexibility</b>: accommodating different preferences and
								abilities.
							</li>
							<li>
								<b>Perceptible Information</b>: making information clear,
								regardless of sensory abilities.
							</li>
						</ul>
						<h5 className="mb-2 ml-20 text-base font-semibold text-lightAccent">
							Key References
						</h5>
						<div className="mb-8 ml-32 list-disc text-text">
							<p>
								<a
									href="https://www.un.org/disabilities/documents/convention/convention_accessible_pdf.pdf"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									United Nations - Convention on the Rights of Persons with
									Disabilities
								</a>
							</p>
							<p>
								<a
									href="https://design.ncsu.edu/wp-content/uploads/2022/11/principles-of-universal-design.pdf"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									The Principles of Universal Design - Center for Universal
									Design
								</a>
							</p>
							<p>
								<a
									href="https://metrovancouver.org/about-us/Documents/metro-vancouvers-accessibility-plan-2023-2026.pdf"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									Metro Vancouver Accessibility Plan (2023-2026)
								</a>
							</p>
							<p>
								<a
									href="https://www.translink.ca/rider-guide/transit-accessibility/accessibility-plan"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									Accessibility in Transit - TransLink
								</a>
							</p>
						</div>
					</div>

					<div className="mb-8" id="section-1.2">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							1.2 - Statistics & Demographics
						</h4>
						<ul className="mb-4 ml-20 list-disc text-text">
							<li>
								27% of Canadians aged 15 years and older, or 8.0 million people,
								reported one or more disabilities that limited them in their
								daily activities. (
								<a
									href="https://www150.statcan.gc.ca/n1/daily-quotidien/231201/dq231201b-eng.htm"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									Canadian Survey on Disability, 2023
								</a>
								).
							</li>
							<li>
								In Vancouver, as of 2022, 25% of persons aged 15 and over live
								with a disability (
								<a
									href="https://council.vancouver.ca/20240709/documents/r2.pdf"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									Vancouver City Council, 2024
								</a>
								).
							</li>
							<li>
								Many public spaces in Metro Vancouver, including buildings,
								parks, and transit facilities, still fall short of accessibility
								standards. Feedback showed that wheelchair users, older adults,
								and people with visual or hearing impairments report the most
								accessibility barriers. (
								<a
									href="https://metrovancouver.org/about-us/Documents/metro-vancouvers-accessibility-plan-2023-2026.pdf"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									Metro Vancouver Accessibility Plan, 2023
								</a>
								)
							</li>
							<li>
								The senior population (65+) in British Columbia is projected to
								10.7 million by 2040, around 25% of the overall population.
								<p className="ml-4 text-sm italic text-text/80">
									&quot;While seniors are living longer and with more years in
									good health, population aging also means an increase in the
									number of people living with chronic diseases and
									conditions.&quot;
								</p>
								(
								<a
									href="https://www.canada.ca/en/public-health/services/publications/diseases-conditions/aging-chronic-diseases-profile-canadian-seniors-report.html"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									Public Health Agency of Canada, 2020
								</a>
								)
							</li>
						</ul>
					</div>

					<div className="mb-8" id="section-1.3">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							1.3 - Survey
						</h4>
						<p className="mb-4 ml-20 text-text">
							To ground my research in real experiences, I ran a short survey in
							a Vancouver disability support group. The responses revealed
							consistent pain points, especially around everyday mobility and
							public infrastructure:
						</p>

						<CaseImage
							src={img1}
							alt="Pie chart showing results of a short survey pf the hardest places to access in Vancouver."
							width={600}
							withLightbox
							caption="Respondents highlighted transit and sidewalks as the biggest barriers."
						/>

						<ul className="mb-4 ml-32 list-disc text-text">
							<li>
								Public transit and sidewalks came up repeatedly as the hardest
								places to navigate.
							</li>
							<li>
								All respondents said they would use a crowdsourced accessibility
								app regularly.
							</li>
							<li>
								Temporary disruptions, like construction or broken elevators,
								often go unreported, leaving people stranded.
							</li>
						</ul>
					</div>

					<div className="mb-8" id="section-1.4">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							1.4 - Competitive Analysis
						</h4>
						<p className="mb-4 ml-20 text-text">
							While several accessibility apps already exist, most take a narrow
							approach. They tend to focus mainly on mobility challenges,
							leaving out the broader spectrum of user needs. Features like
							real-time reporting, nuanced rating systems, and integration with
							transit are often missing, creating space for innovation.
						</p>
						<p className="mt-4 ml-20 text-text">
							I reviewed the competitors using a SWOT Analysis approach:
						</p>
						<CaseImage
							src={img2}
							alt="SWOT Analysis between 3 possible competitors: AXS Map, AccessNow and WheelMap."
							width={600}
							withLightbox
							caption="SWOT comparison of existing accessibility apps."
						/>
						<p className="mt-4 ml-20 text-text">Key observations:</p>
						<ul className="mb-4 ml-32 list-disc text-text">
							<li>
								Most platforms overlook users with visual, auditory, or
								cognitive disabilities by focusing solely on mobility.
							</li>
							<li>
								Temporary accessibility issues like broken elevators and
								construction are rarely addressed.
							</li>
							<li>
								Rating systems lack nuance and context, making decision-making
								difficult.
							</li>
							<li>
								Limited or no integration with public transit data reduces
								usefulness for route planning.
							</li>
							<li>
								Crowdsourcing depends on user contributions but often lacks
								incentives for ongoing engagement.
							</li>
						</ul>
					</div>
				</CaseSection>
			</div>
			{/* 2 - Define & Refine */}
			<div id="section-2">
				<CaseSection title="2 - Define & Refine">
					{/* 2.1 - Persona Highlight */}
					<div className="mb-8" id="section-2.1">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							2.1 - Persona Highlight
						</h4>
						<p className="mb-4 ml-20 text-text">
							To design for real needs, I focused on{" "}
							<strong>Miguel Ortega</strong>, 39, a building maintenance
							technician from Surrey, BC. Miguel is active but experiences knee
							pain on long walks or stairs. He values quick, reliable route info
							and minimal reporting steps, aiming to move independently through
							the city.
						</p>
						<CaseImage
							src={img3}
							alt="Miguel - persona illustration and summary."
							width={700}
							withLightbox
							fit="contain"
							caption="Miguel represents core accessibility challenges in daily Vancouver travel."
						/>
						<p className="mb-4 ml-20 text-text">
							I also considered other personas: <strong>May Chen</strong>, a
							university student with a visual impairment who often struggles to
							navigate the city independently; <strong>Prisha Gupta</strong>, a
							caregiver balancing her own routine while supporting her mother
							with mobility challenges; and <strong>Liam Park</strong>, a
							community-minded resident without a disability who wants tools to
							better support accessibility for others. <strong>Miguel</strong>{" "}
							was chosen as the primary persona because his challenges highlight
							common accessibility gaps across multiple user types.
						</p>
					</div>

					{/* 2.2 - User Journey Map */}
					<div className="mb-8" id="section-2.2">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							2.2 - User Journey Map
						</h4>
						<p className="mb-4 ml-20 text-text">
							To uncover where accessibility gaps affect Miguel, I mapped a
							simple errand: checking transit, transferring at the SkyTrain,
							picking up supplies, and grabbing a coffee. Along the way, missing
							ramp details, broken elevators, detours, and narrow aisles created
							constant friction.
						</p>
						<p className="mb-4 ml-20 text-text">
							These moments revealed opportunities for tools to find step-free
							routes, live obstacle alerts, elevator status, and crowd-verified
							accessibility notes, features designed to make everyday trips less
							stressful and more predictable.
						</p>

						<CaseImage
							src={img4}
							alt="Miguel journey map illustration, showing his actions, pain points and the opportunities that this analysis brings."
							width={700}
							fit="contain"
							withLightbox
							caption="Mapping Miguel's errands helped identify pain points and opportunities."
						/>
					</div>

					{/* 2.3 - Problem Statement & HMW */}
					<div className="mb-8" id="section-2.3">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							2.3 - Problem Statement & &quot;How Might We&quot; Question
						</h4>
						<p className="mb-4 ml-20 text-text">
							<span>
								<strong>Problem:</strong> Accessibility in Vancouver is often
								uncertain. Ramps, elevators, and detours can&apos;t always be
								trusted to be where people need them, and existing tools reduce
								this complexity into a single rating. For users like Miguel,
								even a short errand can become stressful and unpredictable.
							</span>
							<span className="italic">
								Missing details mean missed opportunities and everyday
								independence depends on accurate, timely information.
							</span>
						</p>
						<p className="mb-4 ml-20 text-text">
							<strong>How might we</strong> make sharing accessibility
							information easier for people with mobility challenges in
							Vancouver so that they can navigate the city more independently?
						</p>
					</div>

					{/* 2.4 - Proposed Solution & MVP */}
					<div className="mb-8" id="section-2.4">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							2.4 - Proposed Solution & MVP
						</h4>
						<p className="mb-4 ml-20 text-text">
							<strong>Proposed solution:</strong> a mobile-first platform for
							sharing and discovering accessibility information in Vancouver,
							focusing on quick reporting, reliable updates, and easy
							navigation.
						</p>
						<ol className="mb-4 ml-32 list-decimal text-text">
							<li>Report obstacles quickly.</li>
							<li>
								Show temporary accessibility issues in real time with clear
								alerts for temporary barriers.
							</li>
							<li>
								Functionalities tailored to different kinds of disabilities.
							</li>
							<li>User-submitted accessibility input for reviews/ratings.</li>
						</ol>
					</div>
				</CaseSection>
			</div>
			{/* 3 - Ideate & Conceptualize */}
			<div id="section-3">
				<CaseSection title="3 - Ideate & Conceptualize">
					{/* 3.1 - Brainstorm & High-Level App Structure */}
					<div className="mb-8" id="section-3.1">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							3.1 - Brainstorm & Information Architecture
						</h4>

						{/* Brainstorm */}
						<h5 className="mb-2 ml-20 text-base font-semibold text-lightAccent">
							Brainstorm
						</h5>
						<div className="mb-4 ml-20 text-text">
							<p className="mb-2">
								During class, each student conducted an open brainstorm where we
								presented the problem and our &quot;How Might We&quot; question.
								Peers suggested various ideas without worrying about
								feasibility, encouraging creative exploration.
							</p>
							<div className="max-w-lg mx-auto mb-6">
								<CaseImage
									src={img5}
									alt="Brainstorm board with ideas."
									width={700}
									withLightbox
									fit="contain"
									caption="Brainstorm activity."
								/>
							</div>
						</div>

						{/* Information Architecture */}
						<h5 className="mb-2 ml-20 text-base font-semibold text-lightAccent">
							Information Architecture
						</h5>
						<div className="mb-4 ml-20 text-text">
							<p className="mb-2">
								Based on the second version of the Information Architecture
								diagram, I iteratively refined the app&apos;s structure.
								Starting with v1 from initial research, I moved to v2 during
								brainstorming sessions, and finalized v3 in parallel with the
								evolution of the wireframes into the high-fidelity prototype.
								Early MVP definition helped keep the focus on essential features
								and flows.
							</p>
							<p className="mb-4">
								Defining the MVP early was crucial, providing a clear focus for
								features and flows.
							</p>
							<div className="max-w-[400px] mx-auto">
								<CaseCarousel
									images={[
										{
											src: img6,
											alt: "Evolution of High-Level App Structure (IA)",
											caption: "Information Architecture - v1.",
										},
										{
											src: img7,
											alt: "Wireframes",
											caption: "Information Architecture - v2.",
										},
										{
											src: img8,
											alt: "Final UI",
											caption: "Information Architecture - v3.",
										},
									]}
									options={{ loop: false }}
								/>
							</div>
						</div>
					</div>

					{/* 3.2 - Wireframes & Interaction Flows */}
					<div className="mb-8" id="section-3.2">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							3.2 - Wireframes & Interaction Flows
						</h4>

						<p className="mb-4 ml-20 text-text">
							Using IA v2 as a foundation, I created multiple low-fidelity
							screens and gradually developed high-fidelity wireframes. Two main
							flows guided the design:
						</p>
						<ul className="mb-4 ml-24 list-disc">
							<li>
								<strong className="text-lightAccent">Flow 1:</strong> Find an
								accessible coffee shop nearby with a step-free entrance and
								accessible washrooms.
							</li>
							<li>
								<strong className="text-lightAccent">Flow 2:</strong> Report an
								accessibility issue at the Vancouver Public Library.
							</li>
						</ul>

						<p className="mb-4 ml-20 text-text">
							Through iterations, feedback from peers and the instructor
							informed refinements, IA v3 was generated. Challenges included map
							accessibility, search/filter usability, and reporting flows.
							Solutions included:
						</p>
						<ul className="mb-6 ml-24 list-disc text-text">
							<li>Tabbed map/list view for flexible navigation.</li>
							<li>Category-specific filters for different disabilities.</li>
							<li>
								Persistent &quot;Report&quot; button with overlay for quick
								submissions.
							</li>
							<li>
								Separate accessibility scores and temporary issue indicators
								(&quot;caution&quot;/&quot;warning&quot;).
							</li>
						</ul>
						<div className="max-w-[600px] mx-auto">
							<CaseCarousel
								images={[
									{
										src: img9,
										alt: "Wireframes evolution from low-fidelity to high-fidelity.",
										caption:
											"Wireframes evolution from low-fidelity to high-fidelity.",
									},
									{
										src: img10,
										alt: "Wireframes evolution from low-fidelity to high-fidelity.",
										caption:
											"Wireframes evolution from low-fidelity to high-fidelity.",
									},
								]}
								options={{ loop: false }}
							/>
						</div>
					</div>
				</CaseSection>
			</div>

			{/* 4 - Prototype & Test */}
			<div id="section-4">
				<CaseSection title="4 - Prototype & Test">
					<div className="mb-8" id="section-4.1">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							4.1 - High-Fidelity Prototype
						</h4>
						<p className="mb-4 ml-20 text-text">
							After refining the wireframes, I developed high-fidelity screens
							that focused on quick reporting, clear map views, and
							accessibility filters. The prototype aimed to make navigation
							intuitive and minimize friction for users seeking or sharing
							accessibility information.
						</p>
						<p className="mb-4 ml-20 text-text">
							Key elements included persistent reporting buttons, tabbed
							map/list views, and differentiated accessibility scores for
							establishments and temporary barriers.
						</p>
						<div className="max-w-[600px] mx-auto">
							<CaseCarousel
								images={[
									{
										src: img11,
										alt: "Key screens of the high-fidelity design.",
										caption: "Key screens of the high-fidelity design.",
									},
									{
										src: img12,
										alt: "Key screens of the high-fidelity design.",
										caption: "Key screens of the high-fidelity design.",
									},
								]}
								options={{ loop: false }}
							/>
						</div>
					</div>

					<div className="mb-8" id="section-4.2">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							4.2 - Usability Testing
						</h4>
						<p className="mb-4 ml-20 text-text">
							Testing with peers and instructors helped validate design
							decisions and revealed opportunities to improve usability.
						</p>
						<ul className="mb-4 ml-32 list-disc text-text">
							<li>
								Users appreciated the quick reporting feature but found the
								filter hierarchy confusing.
							</li>
							<li>Icons with text labels improved clarity.</li>
							<li>
								An undo option after submitting a report reduced anxiety around
								accidental submissions.
							</li>
						</ul>

						<div className="max-w-[600px] mx-auto">
							<CaseCarousel
								images={[
									{
										src: img13,
										alt: "Screenshots showing the Usability Testing in Useberry.",
										caption: "Usability Test in Useberry.",
									},
									{
										src: img14,
										alt: "Screenshots showing the Usability Testing in Useberry.",
										caption: "Usability Test in Useberry.",
									},
									{
										src: img15,
										alt: "Screenshots showing the Usability Testing in Useberry.",
										caption: "Usability Test in Useberry.",
									},
									{
										src: img16,
										alt: "Screenshots showing the Usability Testing in Useberry.",
										caption: "Usability Test in Useberry.",
									},
									{
										src: img17,
										alt: "Screenshots showing the Usability Testing in Useberry.",
										caption: "Usability Test in Useberry.",
									},
									{
										src: img18,
										alt: "Screenshots showing the Usability Testing in Useberry.",
										caption: "Usability Test in Useberry.",
									},
								]}
								options={{ loop: true }}
							/>
						</div>
					</div>
				</CaseSection>
			</div>

			{/* 5 - Deliver & Next Steps */}
			<div id="section-5">
				<CaseSection title="5 - Deliver & Next Steps">
					<div className="mb-8" id="section-5.1">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							5.1 - Final Design
						</h4>

						<h5 className="mb-2 ml-20 text-base font-semibold text-lightAccent">
							Styles & Typography
						</h5>
						<p className="mb-4 ml-20 text-text">
							To keep the interface clear and approachable, I chose a simple and
							readable visual language. The typography combines the fonts{" "}
							<strong className="text-lightAccent">Montserrat</strong> for
							titles and{" "}
							<strong className="text-lightAccent">Source Sans Pro</strong> for
							body text, balancing modernity with accessibility. The color
							palette was designed with strong contrasts to make navigation
							easier: light tones like #74D0FB (light blue) and #FAF3F0
							(off-white) contrast with darker tones like #005C51 (teal green)
							and #212121 (charcoal). Together, these elements guide users&apos;
							attention without adding unnecessary noise.
						</p>
						<CaseImage
							src={img19}
							alt="Board illustrating the Styles & Typography used in the design."
							width={600}
							fit="contain"
							withLightbox
							caption="Styles & Typography."
						/>
						<h5 className="mb-2 ml-20 text-base font-semibold text-lightAccent">
							Prototype
						</h5>
						<p className="mb-4 ml-20 text-text">
							The final prototype integrates the refined high-fidelity screens
							with usability insights, ensuring users can report issues, explore
							routes, and interact with the community seamlessly.
						</p>
						<iframe
							className="w-full h-[600px] border-0"
							src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/gyPR9bCeSBYaCWTyBVo4CC/Open-Way?node-id=250-326&t=lHXW86a9rsCXRRSS-1&scaling=scale-down&content-scaling=fixed&page-id=249%3A367&starting-point-node-id=250%3A326"
							allowFullScreen
						></iframe>
					</div>

					<div className="mb-8" id="section-5.2">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							5.2 - Next Steps
						</h4>
						<p className="mb-4 ml-20 text-text">
							Moving forward, the focus will be on expanding the app beyond the
							MVP, refining flows, and enhancing accessibility features. Future
							improvements include onboarding screens, notifications for
							temporary barriers, and enhanced community engagement tools, all
							guided by ongoing user feedback.
						</p>
					</div>
				</CaseSection>
			</div>
		</>
	);
}
