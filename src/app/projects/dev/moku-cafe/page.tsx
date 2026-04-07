"use client";
import { useEffect } from "react";
import CaseSection, { CaseImage } from "@/app/components/CaseSection";
import CaseCarousel from "@/app/components/CaseCarousel";
import { useSections } from "@/app/components/SectionsContext";

import logo from "@/../public/assets/projects/MokuCafe/moku-cafe-logo.png";
import img1 from "@/../public/assets/projects/MokuCafe/moku-cafe-img1.png";
import img2 from "@/../public/assets/projects/MokuCafe/moku-cafe-img2.png";
import img3 from "@/../public/assets/projects/MokuCafe/moku-cafe-img3.png";
import img4 from "@/../public/assets/projects/MokuCafe/moku-cafe-img4.png";
import img5 from "@/../public/assets/projects/MokuCafe/moku-cafe-img5.png";
import img6 from "@/../public/assets/projects/MokuCafe/moku-cafe-img6.png";
import img7 from "@/../public/assets/projects/MokuCafe/moku-cafe-img7.png";
import img8 from "@/../public/assets/projects/MokuCafe/moku-cafe-img8.png";
import img9 from "@/../public/assets/projects/MokuCafe/moku-cafe-img9.png";

export default function PidgeotourProject() {
	const { setSections } = useSections();

	useEffect(() => {
		setSections([
			{ id: "section-0", label: "Project Overview" },
			{ id: "section-1", label: "1 - Concept & Brand Identity" },
			{ id: "section-2", label: "2 - Stack & Tools" },
			{ id: "section-3", label: "3 - Design Decisions" },
			{ id: "section-4", label: "4 - SEO & Schema" },
			{ id: "section-5", label: "5 - Challenges" },
		]);
	}, [setSections]);

	return (
		<>
			{/* Project Header */}
			<div className="mb-12">
				<div className="flex items-center justify-center gap-12 mb-12">
					<CaseImage src={logo} alt="Moku Cafe logo" isLogo />
					<h1 className="text-4xl font-bold text-text">Moku Cafe</h1>
				</div>
				<div className="flex flex-col items-start max-w-4xl mx-auto space-y-1 text-sm text-text/80">
					<span>
						<strong className="text-primary">Role:</strong> WordPress Developer
						& UX Designer
					</span>
					<span>
						<strong className="text-primary">Stack:</strong> WordPress, Astra,
						Elementor, RankMath SEO
					</span>
					<span>
						<strong className="text-primary">Deliverables:</strong> Brand
						Identity, Page Design, Responsive Layout, Local SEO, Schema Markup
					</span>
				</div>
			</div>

			{/* Project Overview */}
			<div id="section-0">
				<CaseSection title="Project Overview">
					<p className="mb-4 text-text">
						Moku Café is a fictional coffee shop concept set in Vancouver, BC.
						The word Moku (黙) means silence in Japanese, and the entire project
						was built around that idea: a calm, unhurried space where everything
						from the palette to the copy reflects intentional stillness. The
						goal was to build a complete WordPress site from scratch while
						making deliberate design decisions and implementing real SEO
						practices along the way.
					</p>
				</CaseSection>
			</div>

			{/* Concept & Brand Identity */}
			<div id="section-1">
				<CaseSection title="1 - Concept & Brand Identity">
					<p className="mb-4 ml-20 text-text">
						The brand identity was defined before building the pages. The colour
						palette (warm cream, deep forest green, and muted brown) was chosen
						to evoke organic warmth without feeling trendy. Outfit was selected
						for headings for its quiet personality, and Inter for body text for
						its readability. The logo was created using the Japanese Kanji and
						the selected colors in a simple way.
					</p>
					<p className="mb-4 ml-20 text-text">
						The fictional copy was written to match the concept: short,
						unhurried sentences that don&apos;t try too hard. Even the menu
						descriptions were kept direct and honest. Japanese patterns were
						used as background with strong overlays to mute them and keep the
						minimalist aesthetic while keeping some artistic interest.
					</p>

					<div className="max-w-[600px] mx-auto mb-8">
						<CaseCarousel
							images={[
								{
									src: img1,
									alt: "Homepage hero section",
									caption: "Homepage hero section",
								},
								{
									src: img2,
									alt: "About Us section",
									caption: "About Us section",
								},
								{
									src: img3,
									alt: "Menu section",
									caption: "Menu section",
								},
								{
									src: img4,
									alt: "Find Us section",
									caption: "Find Us section",
								},
							]}
							options={{ loop: true }}
						/>
					</div>
				</CaseSection>
			</div>

			{/* Stack & Tools */}
			<div id="section-2">
				<CaseSection title="2 - Stack & Tools">
					<ul className="mb-4 ml-32 list-disc text-text">
						<li>
							Astra Theme - lightweight theme with native header/footer builder
							and global style controls, chosen for simplicity, stability and
							compatibility
						</li>
						<li>
							Elementor Plugin - page builder used to construct all pages
							visually
						</li>
						<li>
							RankMath SEO Plugin - used for meta titles, meta descriptions,
							focus keywords, sitemap configuration, and local business schema
						</li>
					</ul>
				</CaseSection>
			</div>

			{/* Design Decisions */}
			<div id="section-3">
				<CaseSection title="3 - Design Decisions">
					<p className="mb-4 ml-20 text-text">
						The site follows a simple structure: Home, About, and Menu. Each
						page has a clear purpose and minimal content. The home page was
						designed to guide the visitor through the brand story without
						overwhelming them: a full-screen hero, a brief concept section, a
						teaser of the menu, and visit information section.
					</p>
					<p className="mb-4 ml-20 text-text">
						Sections alternate between a light cream background and a deep
						green, creating visual rhythm without relying on complex layouts.
						Typography sizing and spacing were kept consistent across pages to
						create a cohesive feel.
					</p>
					<div className="max-w-[600px] mx-auto mb-8">
						<CaseImage
							src={img5}
							alt="Menu Page."
							width={600}
							withLightbox
							caption="Menu Page."
						/>
					</div>
				</CaseSection>
			</div>

			{/* SEO & Schema */}
			<div id="section-4">
				<CaseSection title="4 - SEO & Schema">
					<p className="mb-4 ml-20 text-text">
						RankMath was configured with a LocalBusiness schema of type Café Or
						CoffeeShop, including business name, address, opening hours, and
						price range. This enables rich results in Google Search, where the
						café&apos;s details can appear directly in the search listing.
					</p>
					<p className="mb-4 ml-20 text-text">
						Each page was configured with a unique meta title, meta description,
						and focus keyword. The homepage targets &quot;coffee shop in
						Vancouver&quot;, with the keyword present in the title, description,
						and page content.
					</p>
					<p className="mb-4 ml-20 text-text">
						A sitemap was generated and configured to include only relevant
						pages, excluding theme template files like header and footer
						builders from indexation.
					</p>
					<div className="max-w-[600px] mx-auto mb-8">
						<CaseCarousel
							images={[
								{
									src: img6,
									alt: "Schema selections in RankMath SEO",
									caption: "Schema selections in RankMath SEO",
								},
								{
									src: img7,
									alt: "Focus Keyword and SEO tweaking (Home page)",
									caption: "Focus Keyword and SEO tweaking (Home page)",
								},
							]}
							options={{ loop: true }}
						/>
					</div>
				</CaseSection>
			</div>

			{/* Challenges */}
			<div id="section-5">
				<CaseSection title="5 - Challenges">
					<p className="mb-4 ml-20 text-text">
						<b>Theme, plugin compatibility & header/footer</b>: The initial
						stack used Hello Elementor as the theme. However, Elementor&apos;s
						newer Atomic editor introduced a CSS loading issue where styles
						defined in the visual editor were not being applied on the live
						site. After testing multiple approaches, the theme was switched to
						Astra.
					</p>
					<p className="mb-4 ml-20 text-text">
						<b>Responsive layout</b>: Responsiveness was handled manually
						through Elementor&apos;s device-specific controls for desktop,
						tablet, and mobile. The main challenge was dealing with multi-column
						sections, like the About section with text and image side by side,
						which required switching to a stacked column layout on smaller
						screens and adjusting padding and font sizes per breakpoint. The
						consistent structure across sections made it easier to apply the
						same responsive rules throughout the site without having to rethink
						each section individually. Also, the header and footer had to be
						reviewed in Astra to make sure they were consistent in any device.
					</p>
					<div className="max-w-[600px] mx-auto mb-8">
						<CaseCarousel
							images={[
								{
									src: img8,
									alt: "Editing About Us page in desktop setup in Elementor",
									caption:
										"Editing About Us page in desktop setup in Elementor",
								},
								{
									src: img9,
									alt: "Editing About Us page in mobile setup in Elementor",
									caption: "Editing About Us page in mobile setup in Elementor",
								},
							]}
							options={{ loop: true }}
						/>
					</div>
				</CaseSection>
			</div>
		</>
	);
}
