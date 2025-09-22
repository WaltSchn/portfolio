"use client";
import { useEffect } from "react";
import CaseSection, { CaseImage } from "@/app/components/CaseSection";
import CaseCarousel from "@/app/components/CaseCarousel";
import { useSections } from "@/app/components/SectionsContext";

import logo from "@/../public/assets/projects/BeeTheChef/bee-the-chef-logo.png";
import img1 from "@/../public/assets/projects/BeeTheChef/bee-the-chef-img1.jpg";
import img2 from "@/../public/assets/projects/BeeTheChef/bee-the-chef-img2.jpg";
import img3 from "@/../public/assets/projects/BeeTheChef/bee-the-chef-img3.jpg";
import img4 from "@/../public/assets/projects/BeeTheChef/bee-the-chef-img4.jpg";
import img5 from "@/../public/assets/projects/BeeTheChef/bee-the-chef-img5.jpg";
import img6 from "@/../public/assets/projects/BeeTheChef/bee-the-chef-img6.jpg";
import img7 from "@/../public/assets/projects/BeeTheChef/bee-the-chef-img7.jpg";
import img8 from "@/../public/assets/projects/BeeTheChef/bee-the-chef-img8.jpg";
import img9 from "@/../public/assets/projects/BeeTheChef/bee-the-chef-img9.jpg";
import img10 from "@/../public/assets/projects/BeeTheChef/bee-the-chef-img10.jpg";
import img11 from "@/../public/assets/projects/BeeTheChef/bee-the-chef-img11.jpg";
import img12 from "@/../public/assets/projects/BeeTheChef/bee-the-chef-img12.jpg";

export default function BeeTheChefProject() {
	const { setSections } = useSections();

	useEffect(() => {
		setSections([
			{ id: "section-0", label: "Project Overview" },

			{ id: "section-1", label: "1 - Empathize & Discover" },
			{ id: "section-1.1", label: "1.1 - Interview Insights", level: 1 },
			{ id: "section-1.2", label: "1.2 - Statistics", level: 1 },
			{ id: "section-1.3", label: "1.3 - Market Data", level: 1 },
			{ id: "section-1.4", label: "1.4 - Competitive Analysis", level: 1 },

			{ id: "section-2", label: "2 - Define & Refine" },
			{ id: "section-2.1", label: "2.1 - Persona Highlight", level: 1 },
			{ id: "section-2.2", label: "2.2 - Problem Statement & HMW", level: 1 },
			{ id: "section-2.3", label: "2.3 - Proposed Solution & MVP", level: 1 },

			{ id: "section-3", label: "3 - Ideate & Conceptualize" },
			{ id: "section-3.1", label: "3.1 - Ideation Workshops", level: 1 },
			{ id: "section-3.2", label: "3.2 - Information Architecture", level: 1 },
			{ id: "section-3.3", label: "3.3 - User Flows & Wireframes", level: 1 },

			{ id: "section-4", label: "4 - Prototype & Test" },
			{ id: "section-4.1", label: "4.1 - Mid-Fidelity Prototype", level: 1 },
			{ id: "section-4.2", label: "4.2 - Usability Testing", level: 1 },

			{ id: "section-5", label: "5 - Deliver & Next Steps" },
			{ id: "section-5.1", label: "5.1 - Refinements", level: 1 },
			{ id: "section-5.2", label: "5.2 - Final Design", level: 1 },
			{ id: "section-5.3", label: "5.3 - Next Steps", level: 1 },
		]);
	}, [setSections]);
	return (
		<>
			{/* Project Header */}
			<div className="mb-12">
				<div className="flex items-center justify-center gap-12 mb-12">
					<CaseImage src={logo} alt="Festival Hopper logo" isLogo />
					<h1 className="text-4xl font-bold text-text">Bee The Chef</h1>
				</div>
				<div className="flex flex-col items-start max-w-4xl mx-auto space-y-1 text-sm text-text">
					<span>
						<strong className="text-primary">Role:</strong> UX - Focus on
						Research & User Testing
					</span>
					<span>
						<strong className="text-primary">Timeline:</strong> September 2024 -
						December 2024
					</span>
					<span>
						<strong className="text-primary">Tools:</strong> Figma, Figjam
					</span>
					<span>
						<strong className="text-primary">Deliverables:</strong> Research,
						IA, Wireframes, Prototype
					</span>
					<span>
						<strong className="text-primary">Tags:</strong> UX / User Research /
						Usability Testing / Wireframing / Prototyping
					</span>
				</div>
			</div>
			{/* Project Overview */}
			<div id="section-0">
				<CaseSection title="Project Overview">
					<p className="mb-4 text-text">
						With rising grocery prices and busy schedules, many people struggle
						to keep up with healthy eating habits. Limited time, budget
						constraints, and lack of planning often lead to unhealthy choices,
						food waste, and stress in daily life.
					</p>
					<p className="mb-4 text-text">
						Bee the Chef was designed to make meal planning simpler and more
						accessible. The app helps users create personalized meal plans,
						generate grocery lists, and discover recipes based on their
						preferences, budget, and dietary needs. It also highlights local
						markets to encourage healthier and more sustainable choices.
					</p>
					<p className="mb-4 text-text">
						This project was developed as part of my coursework at CCTB, where I
						practiced core UX methods such as personas, journey mapping,
						ideation workshops, and usability testing to move from research
						insights to a working prototype.
					</p>
				</CaseSection>
			</div>
			<h2 className="mb-6 text-2xl font-bold">Design Thinking Process:</h2>
			{/* 1 - Empathize & Discover */}
			<div id="section-1">
				<CaseSection title="1 - Empathize & Discover">
					{/* 1.1 - Interview Insights */}
					<div className="mb-8" id="section-1.1">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							1.1 - Interview Insights
						</h4>

						<p className="mb-4 ml-20 text-text">
							I ran a short, informal interview with a classmate to surface real
							behaviours and frustrations around meal planning. Key findings:
						</p>

						<ul className="mb-4 ml-32 list-disc text-text">
							<li>
								No regular meal-planning routine, often ends up choosing fast
								food when short on time.
							</li>
							<li>
								Typically buys the cheapest ingredient option because
								researching alternatives is time-consuming.
							</li>
							<li>
								Passionate about cooking but struggles to plan ahead and balance
								cost, nutrition and convenience.
							</li>
							<li>
								Would value a simple way to generate grocery lists and recipes
								tailored to budget and dietary preferences.
							</li>
						</ul>
					</div>

					{/* 1.2 - Statistics */}
					<div className="mb-8" id="section-1.2">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							1.2 - Statistics
						</h4>

						<ul className="mb-4 ml-20 list-disc text-text">
							<li>
								The BCCDC Food Costing in BC (2022) report shows that the
								monthly cost of a healthy food basket for a family of four in
								parts of BC is roughly CA$1,200-1,300, and low-income households
								often cannot afford a nutritious diet after paying housing
								costs. (
								<a
									href="https://bc.healthyagingcore.ca/resources/report-food-costing-in-bc-2022"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									Food Costing in BC (BCCDC), 2022
								</a>
								)
							</li>

							<li>
								Consumer research summaries report that a very large share of
								Canadians identify cooking from scratch as a way to save money
								and manage grocery costs (Mintel / summarized via PR Newswire /
								trade press). (
								<a
									href="https://www.prnewswire.com/news-releases/nearly-all-canadians-91-identify-cooking-from-scratch-as-a-way-to-save-on-groceries-301868244.html"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									Mintel/PR Newswire, 2023
								</a>
								)
							</li>

							<li>
								Food price tracking shows food-price increases remain a concern
								for households. Recent summaries indicate food inflation
								moderating compared to earlier spikes but still notable. (
								<a
									href="https://catalogue.data.gov.bc.ca/dataset/2c75c627-3eb6-41ee-bb54-7b089eade484/resource/a831b23c-eabf-410b-bbc2-9326ea6cae3c/download/cpi_highlights.pdf"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									BC Stats - Consumer Price Index
								</a>
								)
							</li>
						</ul>
					</div>

					{/* 1.3 - Market Data */}
					<div className="mb-8" id="section-1.3">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							1.3 - Market Data
						</h4>

						<p className="mb-4 ml-20 text-text">
							The meal-kit and meal-planning market continues to grow as
							consumers seek convenience and value. Industry reports estimate
							multi-billion USD market sizes and notable year-over-year growth
							for meal-kit and related services, indicating opportunity for apps
							that simplify planning and lower friction for home cooking. (
							<a
								href="https://www.thebusinessresearchcompany.com/report/meal-kit-global-market-report"
								target="_blank"
								rel="noreferrer"
								className="underline text-lightAccent"
							>
								The Business Research Company: Meal Kit Market overview
							</a>
							)
						</p>

						<p className="mb-4 ml-20 text-text">
							These trends suggest demand for lightweight tools that combine
							recipe discovery, budget-aware shopping lists, and local market
							information for people who want to cook more but lack time to
							plan.
						</p>
					</div>

					{/* 1.4 - Competitive Analysis */}
					<div className="mb-8" id="section-1.4">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							1.4 - Competitive Analysis
						</h4>

						<p className="mb-4 ml-20 text-text">
							I reviewed apps and services that address parts of the
							meal-planning problem:
						</p>

						<ul className="mb-4 ml-32 list-disc text-text">
							<li>
								<b>Mealime</b> - Strong at quick, personalized meal plans and
								auto-generated grocery lists. Good for week-based planning and
								dietary customization. (
								<a
									href="https://www.mealime.com/"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									Mealime
								</a>
								)
							</li>

							<li>
								<b>Yummly</b> - Recipe discovery and personalized
								recommendations; historically strong search and recipe curation
								features. (link to official site). (
								<a
									href="https://www.yummlyrecipes.com/"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									Yummly
								</a>
								)
							</li>

							<li>
								<b>HelloFresh</b> - Example of the meal-kit market: large-scale
								meal-kit provider showing demand for recipe+ingredient bundles,
								though cost/logistics may be barriers for budget-conscious
								users. (
								<a
									href="https://ir.hellofreshgroup.com/"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									HelloFresh
								</a>
								)
							</li>

							<li>
								<b>Paprika & recipe managers</b> - Great for advanced recipe
								management and offline use, but less focused on discovery or
								budget-aware planning for casual users. (
								<a
									href="https://www.paprikaapp.com/"
									target="_blank"
									rel="noreferrer"
									className="underline text-lightAccent"
								>
									Paprika App
								</a>
								)
							</li>
						</ul>

						<p className="mb-4 ml-20 text-text">
							<strong>Opportunity:</strong> While tools exist for planning,
							discovery, and meal-kit convenience, few combine budget-aware meal
							plans, simple grocery lists, and local market suggestions in a
							lightweight flow - this gap is where Bee the Chef positions
							itself.
						</p>
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
							<strong>Emily Huang</strong>, is a vegetarian veterinarian from
							Vancouver who enjoys cooking but has limited time to plan meals.
							She wants quick, affordable ways to eat healthier without spending
							hours researching recipes or shopping.
						</p>

						<ul className="mb-4 ml-32 list-disc text-text">
							<li>
								<strong>Goals:</strong> quick meal planning, stay on budget,
								build healthier habits.
							</li>
							<li>
								<strong>Pain points:</strong> limited time, difficulty planning
								ahead, overwhelmed by ingredient choices.
							</li>
						</ul>

						<CaseImage
							src={img1}
							alt="Emily persona illustration"
							width={700}
							withLightbox
							fit="contain"
							caption="Emily represents busy home cooks who want healthy, budget-friendly meal solutions."
						/>
					</div>

					{/* 2.2 - Problem Statement & HMW */}
					<div className="mb-8" id="section-2.2">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							2.2 - Problem Statement &amp; &quot;How Might We&quot;
						</h4>

						<p className="mb-4 ml-20 text-text">
							<strong>Problem:</strong> Rising grocery prices and busy schedules
							make consistent, healthy meal planning difficult. People who want
							to cook often lack the time, budget visibility, and simple tools
							to plan recipes and shopping efficiently.
						</p>

						<p className="mb-4 ml-20 text-text">
							<strong>How might we</strong> simplify and speed up meal planning
							so users can cook healthier, stay on budget, and waste less time
							and food?
						</p>
					</div>

					{/* 2.3 - Proposed Solution & MVP */}
					<div className="mb-8" id="section-2.3">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							2.3 - Proposed Solution &amp; MVP
						</h4>

						<p className="mb-4 ml-20 text-text">
							<strong>Proposed solution:</strong> Bee the Chef is a lightweight
							meal-planning app that generates personalized meal plans and
							cost-aware grocery lists, surfacing local markets and simple
							recipes that fit users&apos; schedules and budgets.
						</p>

						<ol className="mb-4 ml-32 list-decimal text-text">
							<li>
								<b>Personalized meal plans</b> generated from user preferences:
								<ul className="ml-6 list-disc">
									<li>Availability/how much time they have to cook</li>
									<li>Budget targets</li>
									<li>Dietary restrictions and taste preferences</li>
								</ul>
							</li>

							<li>
								<b>Recipes & grocery lists</b> - recipes linked to an
								auto-generated shopping list; users can view ingredients, prep
								time, steps, save recipes, or create standalone lists.
							</li>

							<li>
								<b>Local market suggestions</b> - map view and details of nearby
								stores and markets to help users find affordable or
								local-sourced ingredients.
							</li>
						</ol>

						<p className="mb-4 ml-20 text-text">
							This MVP focuses on making meal planning fast and budget-aware so
							users like Emily can spend less time prepping and more time
							enjoying home-cooked meals.
						</p>
					</div>
				</CaseSection>
			</div>

			{/* 3 - Ideate & Conceptualize */}
			<div id="section-3">
				<CaseSection title="3 - Ideate & Conceptualize">
					{/* 3.1 - Ideation Workshops */}
					<div className="mb-8" id="section-3.1">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							3.1 - Ideation Workshops
						</h4>

						<p className="mb-4 ml-20 text-text">
							We used focused ideation activities to turn problem framing into
							actionable concepts. We generated multiple <em>How Might We</em>{" "}
							questions and used a Bullseye Diagram to prioritize those with the
							highest impact and feasibility; the Abstraction Ladder helped
							reframe specific pain points into broader opportunity spaces.
							Rapid sketching with <strong>Crazy 8&apos;s</strong> produced many
							diverse concepts, while a <strong>Rose, Thorn, Bud</strong>{" "}
							session highlighted each idea&apos;s strengths, risks, and growth
							opportunities. Finally, a Round Robin critique cycle surfaced
							concrete improvements and helped us converge on a solution set
							(personalized meal plans, grocery lists, and local market
							suggestions) that balanced user value with implementation effort.
						</p>

						<div className="max-w-[600px] mx-auto">
							<CaseCarousel
								images={[
									{
										src: img2,
										alt: "Ideation activity - Crazy 8s",
										caption: "Crazy 8's sketches and ideation notes.",
									},
									{
										src: img3,
										alt: "Round Robin feedback session",
										caption: "Round Robin feedback session.",
									},
								]}
								options={{ loop: false }}
							/>
						</div>
					</div>

					{/* 3.2 - Information Architecture */}
					<div className="mb-8" id="section-3.2">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							3.2 - Information Architecture
						</h4>

						<p className="mb-4 ml-20 text-text">
							The selected ideas translated into a simple, focused IA that
							supports the MVP flows: Home, My Plans, Recipes, Grocery List,
							Explore Local Markets, and Cooking Tips. Keeping the IA compact
							helped prioritize the features that matter most for quick meal
							planning.
						</p>

						<div className="max-w-[500px] mx-auto">
							<CaseImage
								src={img4}
								alt="Final information architecture"
								width={700}
								withLightbox
								fit="contain"
								caption="Final Information Architecture for Bee the Chef."
							/>
						</div>
					</div>

					{/* 3.3 - User Flows & Wireframes */}
					<div className="mb-8" id="section-3.3">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							3.3 - User Flows &amp; Wireframes
						</h4>

						<p className="mb-4 ml-20 text-text">
							We defined three core tasks to validate the MVP flows and guide
							the UI:
						</p>

						<ul className="mb-4 ml-32 list-disc text-text">
							<li>
								<strong>Task 1: Create a one-day meal plan:</strong> create a
								full-day plan (Nov 11) for 3 meals.
							</li>
							<li>
								<strong>Task 2: Review recipes & grocery list:</strong> open a
								suggested recipe and check the generated grocery list.
							</li>
							<li>
								<strong>Task 3: Explore local markets:</strong> view local
								market suggestions for items on the grocery list.
							</li>
						</ul>

						<p className="mb-4 ml-20 text-text">
							Due to time constraints we moved directly into mid-fidelity
							wireframes and prototypes (no low-fidelity stage). This approach
							allowed us to quickly produce testable screens for the main flows,
							and taught us the value of earlier low-fi validation, a learning
							we applied in later projects.
						</p>

						<div className="max-w-[600px] mx-auto">
							<CaseCarousel
								images={[
									{
										src: img5,
										alt: "Mid-fidelity wireframe - meal plan.",
										caption:
											"Mid-fidelity wireframe: Meal plan creation screen.",
									},
									{
										src: img6,
										alt: "Mid-fidelity wireframe - meal plan recipes list.",
										caption:
											"Mid-fidelity wireframe: Meal Plan Recipes list screen.",
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
							We built a mid-fidelity interactive prototype in Figma to simulate
							the core MVP flows: creating a meal plan, reviewing suggested
							recipes, and checking the generated grocery list. The goal was to
							produce testable screens quickly and validate the main
							interactions with real users.
						</p>

						<div className="max-w-[600px] mx-auto">
							<CaseCarousel
								images={[
									{
										src: img7,
										alt: "Mid-fidelity prototype - meal plan creation",
										caption: "Mid-fi prototype: Meal plan creation flow.",
									},
									{
										src: img8,
										alt: "Mid-fidelity prototype - grocery list and recipes",
										caption: "Mid-fi prototype: Recipes & grocery list.",
									},
								]}
								options={{ loop: false }}
							/>
						</div>
					</div>

					{/* 4.2 - Usability Testing */}
					<div className="mb-8" id="section-4.2">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							4.2 - Usability Testing
						</h4>

						<p className="mb-4 ml-20 text-text">
							We ran moderated usability tests with 3 participants. The test
							plan included an intro, scenario-based tasks, and follow-up
							questions to capture subjective feedback and observed issues.
						</p>

						<h5 className="mb-2 ml-20 text-base font-semibold text-lightAccent">
							Test plan & methodology
						</h5>
						<ul className="mb-4 ml-32 list-disc text-text">
							<li>Moderated sessions with 3 users (remote/in-person).</li>
							<li>
								Tasks based on realistic scenarios (create a plan, review
								recipes & list, check local markets).
							</li>
							<li>
								Collect qualitative feedback, record task success, and note
								prototype issues.
							</li>
						</ul>

						<div className="max-w-[500px] mx-auto">
							<CaseImage
								src={img9}
								alt="Usability test plan overview."
								width={700}
								withLightbox
								fit="contain"
								caption="Usability test plan overview."
							/>
						</div>

						<h5 className="mb-2 ml-20 text-base font-semibold text-lightAccent">
							Key findings
						</h5>
						<ul className="mb-4 ml-32 list-disc text-text">
							<li>
								Task 1 (create a one-day meal plan) completed with minimal
								friction.
							</li>
							<li>
								Some prototype bugs were present (clickable disabled buttons,
								placeholder content), but participants continued the tasks.
							</li>
							<li>
								Tasks 2 & 3 showed navigation/order sensitivity - users got
								confused depending on whether they opened Recipes first or
								Grocery List first.
							</li>
						</ul>
					</div>
				</CaseSection>
			</div>

			{/* 5 - Deliver & Next Steps */}
			<div id="section-5">
				<CaseSection title="5 - Deliver & Next Steps">
					{/* 5.1 - Refinements */}
					<div className="mb-8" id="section-5.1">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							5.1 - Refinements
						</h4>

						<p className="mb-4 ml-20 text-text">
							Based on usability feedback we implemented targeted fixes to
							reduce friction and improve clarity before finalizing the
							prototype.
						</p>

						<ul className="mb-4 ml-32 list-disc text-text">
							<li>
								<strong>Grocery List:</strong> replaced bulky &quot;Explore
								Local Stores&quot; accordion with a tertiary button and swapped
								placeholder items for realistic sample items.
							</li>
							<li>
								<strong>Disabled buttons:</strong> fixed prototype links so
								disabled controls are not clickable.
							</li>
							<li>
								<strong>Recipes & Grocery List flow:</strong> decluttered
								screens, removed the redundant &quot;Create New Plan&quot;
								block, and added a &quot;My Plan 1&quot; section in Recipes to
								make navigation between recipes and list more consistent.
							</li>
						</ul>

						<div className="max-w-[700px] mx-auto">
							<CaseCarousel
								images={[
									{
										src: img10,
										alt: "Grocery list accordion decluttering.",
										caption: "Grocery list accordion decluttering.",
									},
									{
										src: img11,
										alt: "Flow/Prototype issues in the Recipes/Grocery list screens.",
										caption:
											"Flow/Prototype issues in the Recipes/Grocery list screens.",
									},
								]}
								options={{ loop: false }}
							/>
						</div>
					</div>

					{/* 5.2 - Final Design */}
					<div className="mb-8" id="section-5.2">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							5.2 - Final Design
						</h4>
						{/* Styles & UI */}
						<h5 className="mb-2 ml-20 text-base font-semibold text-lightAccent">
							Styles & UI
						</h5>

						<p className="mb-4 ml-20 text-text">
							The visual system was designed to feel warm, simple, and
							practical, encouraging users to cook while keeping attention on
							key actions (plan, shop, cook).
						</p>

						<p className="mb-2 ml-20 text-text">
							<strong>Color palette</strong>: warm & appetizing tones to support
							food content and affordances.
						</p>

						<p className="mb-4 ml-20 text-text">
							<strong>Typography:</strong>{" "}
							<strong className="text-lightAccent">Mochiy Pop One</strong> for
							headings (friendly, rounded) and{" "}
							<strong className="text-lightAccent">Poppins</strong> for body
							text (clean and readable). This pairing keeps the UI approachable
							while remaining compact for dense lists and steps.
						</p>

						<p className="mb-4 ml-20 text-text">
							<strong>UI components & patterns:</strong> card-based recipe
							previews, compact list items for groceries, a tertiary action for
							secondary flows, and persistent action bar for main tasks.
						</p>

						<div className="max-w-[600px] mx-auto mb-6">
							<CaseImage
								src={img12}
								alt="UI board with colors, typography and components"
								width={700}
								fit="contain"
								withLightbox
								caption="UI board: palette, typography and components."
							/>
						</div>

						<p className="mb-4 ml-20 text-text">
							The updated prototype reflects the refinements above and
							consolidates the core MVP flows: meal planning, recipe
							exploration, and grocery list management. Below is the interactive
							Figma prototype used for testing and review.
						</p>

						<iframe
							className="w-full h-[600px] border-0"
							src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/uJpm4I0ZlRwtUNmCRJgIat/Bee-The-Chef?node-id=511-1405&t=WaVtEgh7VOpmqnfT-1&scaling=scale-down&content-scaling=fixed&page-id=511%3A1404&starting-point-node-id=511%3A1405"
							allowFullScreen
						></iframe>
					</div>

					{/* 5.3 - Next Steps */}
					<div className="mb-8" id="section-5.3">
						<h4 className="mb-4 ml-12 text-lg font-semibold text-lightAccent">
							5.3 - Next Steps
						</h4>

						<p className="mb-4 ml-20 text-text">
							Moving forward, priorities include expanding and polishing the
							product for broader validation:
						</p>

						<ul className="mb-4 list-disc ml-28 text-text">
							<li>
								Expand the recipe library and add advanced filters (budget, prep
								time, dietary preferences).
							</li>
							<li>
								Run usability tests with a more diverse participant group to
								validate flows across different contexts.
							</li>
							<li>
								Develop a polished high-fidelity version of the prototype.
							</li>
						</ul>
					</div>
				</CaseSection>
			</div>
		</>
	);
}
