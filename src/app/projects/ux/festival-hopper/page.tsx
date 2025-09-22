"use client";
import { useEffect } from "react";
import CaseSection, { CaseImage } from "@/app/components/CaseSection";
import CaseCarousel from "@/app/components/CaseCarousel";
import { useSections } from "@/app/components/SectionsContext";

import logo from "@/../public/assets/projects/FestivalHopper/festival-hopper-logo.png";
import img1 from "@/../public/assets/projects/FestivalHopper/festival-hopper-img1.jpg";
import img2 from "@/../public/assets/projects/FestivalHopper/festival-hopper-img2.png";
import img3 from "@/../public/assets/projects/FestivalHopper/festival-hopper-img3.jpg";
import img4 from "@/../public/assets/projects/FestivalHopper/festival-hopper-img4.png";
import img5 from "@/../public/assets/projects/FestivalHopper/festival-hopper-img5.png";
import img6 from "@/../public/assets/projects/FestivalHopper/festival-hopper-img6.png";
import img7 from "@/../public/assets/projects/FestivalHopper/festival-hopper-img7.jpg";
import img8 from "@/../public/assets/projects/FestivalHopper/festival-hopper-img8.jpg";
import img9 from "@/../public/assets/projects/FestivalHopper/festival-hopper-img9.jpg";
import img10 from "@/../public/assets/projects/FestivalHopper/festival-hopper-img10.jpg";
import img11 from "@/../public/assets/projects/FestivalHopper/festival-hopper-img11.png";
import img12 from "@/../public/assets/projects/FestivalHopper/festival-hopper-img12.png";
import img13 from "@/../public/assets/projects/FestivalHopper/festival-hopper-img13.jpg";

export default function FestivalHopperProject() {
	const { setSections } = useSections();

	useEffect(() => {
		setSections([
			{ id: "section-0", label: "Project Overview" },
			{ id: "section-1", label: "1 - Empathize & Discover" },
			{
				id: "section-1.1",
				label: "1.1 - Context & Appeal",
				level: 1,
			},
			{ id: "section-1.2", label: "1.2 - Market Data", level: 1 },
			{ id: "section-1.3", label: "1.3 - Competitive Analysis", level: 1 },
			{ id: "section-2", label: "2 - Define & Refine" },
			{ id: "section-2.1", label: "2.1 - Persona", level: 1 },
			{ id: "section-2.2", label: "2.2 -  Problem Statement & HMW", level: 1 },
			{ id: "section-2.3", label: "2.3 - Proposed Solution & MVP", level: 1 },
			{ id: "section-3", label: "3 - Ideate & Conceptualize" },
			{ id: "section-3.1", label: "3.1 - Information Architecture", level: 1 },
			{ id: "section-3.2", label: "3.2 - Card Sorting", level: 1 },
			{ id: "section-3.3", label: "3.3 - Tree Testing", level: 1 },
			{ id: "section-3.4", label: "3.4 - Wireframes", level: 1 },
			{ id: "section-4", label: "4 - Prototype & Test" },
			{ id: "section-4.1", label: "4.1 - Mid-Fidelity Prototype", level: 1 },
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
					<CaseImage src={logo} alt="Festival Hopper logo" isLogo />
					<h1 className="text-4xl font-bold text-text">Festival Hopper</h1>
				</div>
				<div className="flex flex-col items-start max-w-4xl mx-auto space-y-1 text-sm text-text">
					<span>
						<strong className="text-primary">Role:</strong> UX - Focus on
						Information Architecture & Design
					</span>
					<span>
						<strong className="text-primary">Timeline:</strong> January 2025 -
						April 2025
					</span>
					<span>
						<strong className="text-primary">Tools:</strong> Figma, Figjam,
						Useberry
					</span>
					<span>
						<strong className="text-primary">Deliverables:</strong> Research,
						IA, Wireframes, Prototype
					</span>
					<span>
						<strong className="text-primary">Tags:</strong> UX / Usability
						Testing / Wireframing / Prototyping / Information Architecture
					</span>
				</div>
			</div>
			{/* Project Overview */}
			<div id="section-0">
				<CaseSection title="Project Overview">
					<p className="mb-4 text-text">
						Planning to go to a festival or concert often feels overwhelming,
						details are usually spread across different sites and platforms.
						Many fans end up missing out or overspending simply because
						it&apos;s hard to stay organized.
					</p>
					<p className="mb-4 text-text">
						Festival Hopper was designed as a one-stop app to make this process
						easier. It helps users discover upcoming events, track the ones they
						care about, buy tickets securely, and connect with like-minded
						communities. The project was developed as part of my coursework at
						CCTB, where I practiced core UX skills including information
						architecture, usability testing, and building user-centered
						solutions from concept to prototype.
					</p>
				</CaseSection>
			</div>
			<h2 className="mb-6 text-2xl font-bold">Design Thinking Process:</h2>
			{/* 1 - Empathize & Discover */}
			<div id="section-1">
				<CaseSection title="1 - Empathize & Discover">
					{/* 1.1 - Context & Appeal */}
					<div className="mb-8" id="section-1.1">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							1.1 - Context & Appeal
						</h4>
						<p className="mb-4 ml-20 text-text">
							Festivals have become more than entertainment, they&apos;re
							cultural moments where people connect, explore, and express
							themselves. From global icons like Coachella and Glastonbury to
							niche gatherings like Burning Man or La Tomatina, the variety
							shows how diverse and influential the festival space has become.
						</p>
					</div>

					{/* 1.2 - Market Data*/}
					<div className="mb-8" id="section-1.2">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							1.2 - Market Data
						</h4>
						<ul className="mb-4 ml-20 list-disc text-text">
							<li>
								The global events industry has been estimated in the low
								trillions (USD) in the mid-2020s, with analysts forecasting
								continued growth through the decade. (
								<a
									href="https://www.expertmarketresearch.com/reports/events-industry-market"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									Expert Market Research - Events Industry, 2024
								</a>
								)
							</li>

							<li>
								Reports on the music festival market show aggressive projected
								growth (large CAGR ranges depending on source), reflecting
								rising demand for live-music and festival experiences. (
								<a
									href="https://marketmindpartners.com/music-festival-market"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									MarketMindPartners - Music Festival Market
								</a>
								)
							</li>

							<li>
								Regional segments such as music-tourism are sizable: for
								example, U.S. music-tourism estimates are reported in the tens
								of billions (USD). (
								<a
									href="https://www.grandviewresearch.com/industry-analysis/us-music-tourism-market-report"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									Grand View Research - U.S. Music Tourism Market
								</a>
								)
							</li>

							<li>
								Common growth drivers: preference for experiences over goods,
								higher disposable income and travel, and deeper technology
								integration (apps, cashless payments, recommendations, AR/VR). (
								<a
									href="https://www.prnewswire.com/news-releases/events-industry-market-to-grow-by-usd-722-67-billion-2024-2028-increase-in-corporate-events-driving-revenue-market-evolution-powered-by-ai---technavio-302334588.html"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									Technavio / PR Newswire - Events Industry Summary
								</a>
								)
							</li>
						</ul>
					</div>

					{/* 1.3 - Competitive Analysis */}
					<div className="mb-8" id="section-1.3">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							1.3 - Competitive Analysis
						</h4>

						<p className="mb-4 ml-20 text-text">
							We reviewed platforms that address parts of the discovery,
							tracking, and ticketing flows. Below are concise observations for
							each competitor.
						</p>

						<ul className="mb-4 ml-32 list-disc text-text">
							<li>
								<b>Eventbrite</b> - Strengths: wide event catalogue and strong
								organizer tools (ticketing, check-in, analytics). Weaknesses:
								general-purpose approach means less festival-focused discovery
								or dedicated community features. (
								<a
									href="https://www.eventbrite.com/organizer/overview/"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									Eventbrite Organizer overview
								</a>
								)
							</li>

							<li>
								<b>Songkick</b> - Strengths: robust artist tracking and
								personalized alerts; strong for concerts and tours. Weaknesses:
								festival coverage and ticketing depend on external partnerships.
								(
								<a
									href="https://www.songkick.com/"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									Songkick Official site
								</a>
								)
							</li>

							<li>
								<b>FestGPS</b> - Strengths: festival-focused discovery with
								integrations (streaming-data recommendations, travel bundles).
								Weaknesses: smaller user base and reliance on external data
								integrations. (
								<a
									href="https://festgps.app/"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									FestGPS - Music Festival Finder
								</a>
								)
							</li>

							<li>
								<b>Fest / FestApp</b> - Strengths: dedicated festival apps
								(schedules, maps, on-site notifications) that improve on-site
								logistics. Weaknesses: typically limited to partnered festivals
								and inconsistent feature sets across events. (
								<a
									href="https://festapp.io/"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									FestApp Official site
								</a>
								)
							</li>
						</ul>
					</div>
				</CaseSection>
			</div>
			{/* 2 - Define & Refine */}
			<div id="section-2">
				<CaseSection title="2 - Define & Refine">
					{/* 2.1 - Persona */}
					<div className="mb-8" id="section-2.1">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							2.1 - Persona
						</h4>
						<p className="mb-4 ml-20 text-text">
							To ground the design process, we focused on{" "}
							<strong>Jordan Reyes</strong>, 24, a barista from Toronto, ON.
							Jordan loves discovering new artists and traveling to festivals
							with friends but faces challenges when it comes to organizing the
							experience affordably and efficiently.
						</p>
						<p className="mb-4 ml-20 text-text">
							Jordan represents the core user group of budget-conscious
							festival-goers who want a smoother way to discover, plan, and
							enjoy events without missing opportunities or overspending.
						</p>
						<CaseImage
							src={img1}
							alt="Jordan - persona illustration and summary."
							width={700}
							withLightbox
							fit="contain"
							caption="Jordan highlights common goals and frustrations of young, budget-conscious festival-goers."
						/>
					</div>

					{/* 2.2 - Problem Statement & HMW */}
					<div className="mb-8" id="section-2.2">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							2.2 - Problem Statement &amp; &quot;How Might We&quot; Question
						</h4>
						<p className="mb-4 ml-20 text-text">
							<strong>Problem:</strong> The process of finding and planning
							festivals is fragmented and overwhelming. Information is scattered
							across different sources, tickets often sell out quickly, and
							scheduling conflicts or venue confusion make the experience
							stressful instead of exciting.
						</p>
						<p className="mb-4 ml-20 text-text">
							<strong>How might we</strong> create a simple, engaging tool that
							helps festival-goers discover events that fit their interests and
							budget while streamlining planning, ticketing, and schedules?
						</p>
					</div>

					{/* 2.3 - Proposed Solution & MVP */}
					<div className="mb-8" id="section-2.3">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							2.3 - Proposed Solution &amp; MVP
						</h4>
						<p className="mb-4 ml-20 text-text">
							<strong>Proposed solution:</strong> Festival Hopper, a
							mobile-first app that combines festival discovery, trip planning,
							and ticket management into a single platform.
						</p>
						<ol className="mb-4 ml-32 list-decimal text-text">
							<li>
								Curated festival recommendations tailored to user interests and
								location.
							</li>
							<li>Clear event pages with lineup, dates, and key details.</li>
							<li>Easy sharing options to coordinate with friends.</li>
							<li>Access ticket and purchase options in one place.</li>
						</ol>
						<p className="mb-4 ml-20 text-text">
							This MVP focuses on discovery and practicality, helping users feel
							excited for the festival experience, having all the information
							they need in one single app.
						</p>
					</div>
				</CaseSection>
			</div>

			{/* 3 - Ideate & Conceptualize */}
			<div id="section-3">
				<CaseSection title="3 - Ideate & Conceptualize">
					{/* 3.1 - Information Architecture */}
					<div className="mb-8" id="section-3.1">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							3.1 - Information Architecture
						</h4>
						<p className="mb-4 ml-20 text-text">
							To organize the app&apos;s content and flows, we focused on
							developing a detailed Information Architecture (IA). After a card
							sorting exercise in Useberry, each of us proposed a high-level
							version of the main screens, which formed the basis for IA v1. The
							IA went through five major iterations, evolving with feedback from
							card sorting, tree testing, and wireframe refinements.
						</p>
						<p className="mb-4 ml-20 text-text">
							Key content categories considered for the IA included
							Home/Explore, Festival Categories & Filters, Community, Profile,
							Merch, Planning, Tickets, and Help/Info. These categories were
							informed by user needs for discovering festivals, sharing
							experiences, and accessing tickets or merch.
						</p>
						<p className="ml-20 text-text">
							<span>You can view the full IA versions </span>
							<a
								href="https://www.figma.com/design/DjyN8JsF6STnZa4EcHO0lz/UED-108-Project--Copy-?node-id=207-246&p=f&t=9MasJP1PNMiJT3wm-0"
								target="_blank"
								rel="noreferrer"
								className="underline text-lightAccent"
							>
								here on Figma
							</a>
							.
						</p>

						<div className="max-w-[500px] mx-auto">
							<CaseImage
								src={img2}
								alt="IA v5."
								width={700}
								withLightbox
								fit="contain"
								caption="Final IA aligned with prototype and flows."
							/>
						</div>
					</div>

					{/* 3.2 - Card Sorting */}
					<div className="mb-8" id="section-3.2">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							3.2 - Card Sorting
						</h4>
						<p className="mb-4 ml-20 text-text">
							A card sorting activity helped us understand how users naturally
							group festival app features. Categories tested included
							Home/Explore, Festival Discovery, Community, Profile, Merch,
							Planning, Tickets, and Help/Info. Insights from this exercise
							guided the first version of the IA and helped prioritize content
							placement in the navigation structure.
						</p>
						<p className="ml-20 text-text">
							<span>You can check the detailed Card Sorting Analysis </span>
							<a
								href="https://www.figma.com/design/DjyN8JsF6STnZa4EcHO0lz/UED-108-Project--Copy-?node-id=207-246&p=f&t=9MasJP1PNMiJT3wm-0"
								target="_blank"
								rel="noreferrer"
								className="underline text-lightAccent"
							>
								here on Figma
							</a>
							.
						</p>
						<div className="max-w-[500px] mx-auto">
							<CaseImage
								src={img3}
								alt="Card Sorting overview."
								width={700}
								withLightbox
								fit="contain"
								caption="Card sorting exercise overview."
							/>
						</div>
					</div>

					{/* 3.3 - Tree Testing */}
					<div className="mb-8" id="section-3.3">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							3.3 - Tree Testing
						</h4>
						<p className="mb-4 ml-20 text-text">
							To validate the IA v3, we conducted a simple tree test with five
							participants in Useberry. Participants completed tasks such as
							searching for a festival on the map, checking the community feed,
							purchasing merch, and accessing help. Task 1 (searching for a
							festival) showed the most errors, highlighting areas where
							labeling and hierarchy could be improved.
						</p>
						<div className="max-w-[600px] mx-auto">
							<CaseCarousel
								images={[
									{
										src: img4,
										alt: "Tree Testing screenshot from Useberry.",
										caption: "Tree Testing (Useberry).",
									},
									{
										src: img5,
										alt: "Tree Testing Results.",
										caption: "Tree Testing Results.",
									},
									{
										src: img6,
										alt: "Tree testing - analysis of Task 1 errors.",
										caption: "Tree testing - analysis of Task 1 errors.",
									},
								]}
								options={{ loop: true }}
							/>
						</div>
					</div>

					{/* 3.4 - Wireframes */}
					<div className="mb-8" id="section-3.4">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							3.4 - Wireframes
						</h4>
						<p className="mb-4 ml-20 text-text">
							Based on IA v5, we created wireframes for three main user flows:
							1) searching and finding a specific festival, 2) purchasing a
							ticket, and 3) accessing the purchased ticket. Additional
							supporting screens provided context and navigation. Iterations
							moved from low-fidelity sketches to mid-fidelity mockups, ensuring
							alignment with the IA and usability goals.
						</p>
						<p className="mb-4 ml-20 text-text"></p>
						<div className="max-w-[600px] mx-auto">
							<CaseCarousel
								images={[
									{
										src: img7,
										alt: "Wireframes evolution from low-fidelity to mid-fidelity.",
										caption:
											"Wireframes evolution from low-fidelity to mid-fidelity.",
									},
									{
										src: img8,
										alt: "Wireframes evolution from low-fidelity to mid-fidelity.",
										caption:
											"Wireframes evolution from low-fidelity to mid-fidelity.",
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
					{/* 4.1 - Mid-Fidelity Prototype */}
					<div className="mb-8" id="section-4.1">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							4.1 - Mid-Fidelity Prototype
						</h4>
						<p className="mb-4 ml-20 text-text">
							We developed Mid-fidelity screens with interactions to make the
							experience feel more realistic during testing. After purchasing a
							ticket, for example, the confirmation modal included a smooth
							animation, and tickets could be “flipped” to reveal the QR code on
							the back. We also added an error screen for unfinished flows to
							keep the prototype cohesive despite scope limitations.
						</p>
						<div className="max-w-[600px] mx-auto">
							<CaseCarousel
								images={[
									{
										src: img9,
										alt: "Mid-fidelity prototype screens.",
										caption: "Mid-fidelity prototype screens.",
									},
									{
										src: img10,
										alt: "Error Screen for unfinished flows or buttons that were not implemented yet.",
										caption: "Error Screen.",
									},
								]}
								options={{ loop: true }}
							/>
						</div>
					</div>

					{/* 4.2 - Usability Testing */}
					<div className="mb-8" id="section-4.2">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							4.2 - Usability Testing
						</h4>
						<p className="mb-4 ml-20 text-text">
							We tested the prototype with peers in Useberry through four main
							tasks: first click on the Home Screen, finding a festival, buying
							a ticket, and accessing the QR code, followed by a section with
							free exploration so the user could be immersed in the app.
						</p>

						<h5 className="mb-2 ml-20 text-base font-semibold text-lightAccent">
							User Testing Insights
						</h5>
						<ul className="mb-4 ml-32 list-disc text-text">
							<li>
								Checkout and ticket features were intuitive and easy to use.
							</li>
							<li>
								Animations and interactive feedback made the app feel engaging.
							</li>
							<li>Testers said they would use the app in the future.</li>
							<li>Users wanted more details, like duration of the festival.</li>
							<li>
								Minor navigation confusion highlighted opportunities to refine
								hierarchy.
							</li>
						</ul>

						<div className="max-w-[600px] mx-auto">
							<CaseCarousel
								images={[
									{
										src: img11,
										alt: "Usability testing plan dashboard.",
										caption: "Usability testing plan dashboard.",
									},
									{
										src: img12,
										alt: "Screens during usability test.",
										caption: "Usability test - Festival Hopper prototype.",
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
					{/* 5.1 - Final Design */}
					<div className="mb-8" id="section-5.1">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							5.1 - Final Design
						</h4>

						<h5 className="mb-2 ml-20 text-base font-semibold text-lightAccent">
							Styles & Typography
						</h5>
						<p className="mb-4 ml-20 text-text">
							The Festival Hopper design uses a colorful palette to highlight
							categories and make navigation more fun and engaging.
						</p>
						<p className="mb-4 ml-20 text-text">
							For the navigation bar, we used{" "}
							<strong className="text-lightAccent">off-white (#F5F0EB)</strong>{" "}
							and{" "}
							<strong className="text-lightAccent">dark blue (#1A2B47)</strong>{" "}
							to create contrast and balance. The background is light with blur
							and a grainy texture, giving it a relaxed and approachable vibe.
						</p>
						<p className="mb-4 ml-20 text-text">
							The chosen fonts are{" "}
							<strong className="text-lightAccent">Poppins</strong> and{" "}
							<strong className="text-lightAccent">DM Sans</strong>. Poppins
							adds a friendly and inviting tone, while DM Sans balances it with
							a clean and modern look.
						</p>
						<div className="max-w-[500px] mx-auto">
							<CaseImage
								src={img13}
								alt="Board illustrating the Styles used in the design."
								width={700}
								withLightbox
								fit="contain"
								caption="Styles & UI elements."
							/>
						</div>
						<h5 className="mb-2 ml-20 text-base font-semibold text-lightAccent">
							Prototype
						</h5>
						<p className="mb-4 ml-20 text-text">
							The final prototype brings together the main MVP flows in high
							fidelity: discovering festivals, viewing details, sharing with
							friends, and accessing ticket links, all in one place.
						</p>
						<iframe
							className="w-full h-[600px] border-0"
							src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/DjyN8JsF6STnZa4EcHO0lz/UED-108-Project--Copy-?node-id=314-6567&t=9MasJP1PNMiJT3wm-0&scaling=scale-down&content-scaling=fixed&page-id=33%3A10&starting-point-node-id=314%3A6567https://www.figma.com/proto/DjyN8JsF6STnZa4EcHO0lz/UED-108-Project--Copy-?node-id=314-6567&t=V3RvbC6AXzoOSvo6-1&scaling=scale-down&content-scaling=fixed&page-id=33%3A10&starting-point-node-id=314%3A6567"
							allowFullScreen
						></iframe>
					</div>

					<div className="mb-8" id="section-5.2">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							5.2 - Next Steps
						</h4>
						<p className="mb-4 ml-20 text-text">
							Moving forward, the focus will be on:
						</p>
						<ul className="mb-4 list-disc ml-28 text-text">
							<li>Iterating based on user feedback</li>
							<li>Running more usability tests with diverse festival-goers</li>
							<li>
								Refining features that were out of scope for this MVP but remain
								part of the core vision:{" "}
								<strong>Merch, Community, Profile, and Support</strong>
							</li>
						</ul>
					</div>
				</CaseSection>
			</div>
		</>
	);
}
