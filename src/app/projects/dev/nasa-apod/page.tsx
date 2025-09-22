"use client";
import { useEffect } from "react";
import CaseSection from "@/app/components/CaseSection";
import CaseCarousel from "@/app/components/CaseCarousel";
import { useSections } from "@/app/components/SectionsContext";

import img1 from "@/../public/assets/projects/NASAAPOD/nasaapod-img1.png";
import img2 from "@/../public/assets/projects/NASAAPOD/nasaapod-img2.png";

export default function NasaApodProject() {
	const { setSections } = useSections();

	useEffect(() => {
		setSections([
			{ id: "section-0", label: "Project Overview" },
			{ id: "section-1", label: "1 - Implementation Highlights" },
			{ id: "section-2", label: "2 - Next Steps" },
			{ id: "section-3", label: "3 - Links" },
		]);
	}, [setSections]);

	return (
		<>
			{/* Project Header */}
			<div className="mb-12">
				<div className="flex items-center justify-center gap-12 mb-12">
					<h1 className="text-4xl font-bold text-text">NASA APOD</h1>
				</div>
				<div className="flex flex-col items-start max-w-4xl mx-auto space-y-1 text-sm text-text/80">
					<span>
						<strong className="text-primary">Role:</strong> Front-End Dev
					</span>
					<span>
						<strong className="text-primary">Stack:</strong> ReactJS, CSS
					</span>
					<span>
						<strong className="text-primary">Deliverables:</strong> Homepage
						with daily APOD display; Sidebar drawer with image metadata;
						Responsive design and smooth transitions; Loader and error handling
					</span>
				</div>
			</div>

			{/* Project Overview */}
			<div id="section-0">
				<CaseSection title="Project Overview">
					<p className="mb-4 text-text">
						This was one of my first experiments with external APIs with React.
						The goal was to fetch the NASA Astronomy Picture of the Day (APOD)
						and display it in a clean and simple design.
					</p>
					<p className="mb-4 text-text">
						The app’s code structure and interface were revamped with subtle
						animations, enhanced loader and error handling, and support for both
						images and videos. Users can now also select different dates to view
						past Astronomy Pictures of the Day directly in the sidebar.
					</p>
				</CaseSection>
			</div>

			{/* Implementation Highlights */}
			<div id="section-1">
				<CaseSection title="1 - Implementation Highlights">
					<div className="max-w-[600px] mx-auto mb-8">
						<CaseCarousel
							images={[
								{
									src: img1,
									alt: "APOD homepage",
									caption: "Homepage displaying Astronomy Picture of the Day",
								},
								{
									src: img2,
									alt: "APOD image detail",
									caption: "APOD image with date and description",
								},
							]}
							options={{ loop: false }}
						/>
					</div>
					<p className="mb-4 ml-20 text-text">
						The site retrieves data directly from NASA’s open API and presents
						it in a simple interface. Small touches improve the experience, like
						a spinning loader while data is being fetched, and a modal drawer
						that can be closed either by clicking outside it or on the x button.
					</p>
					<p className="mb-4 ml-20 text-text">
						If the media is a video or something unsupported, it provides a
						fallback message, linking to the original page from NASA for that
						specific day.
					</p>
				</CaseSection>
			</div>

			{/* Next Steps */}
			<div id="section-2">
				<CaseSection title="2 - Next Steps">
					<ul className="mb-4 ml-20 list-disc text-text">
						<li>Let users save their favorite images locally</li>
						<li>Add light/dark mode toggle for better accessibility</li>
					</ul>
				</CaseSection>
			</div>

			{/* Links */}
			<div id="section-3">
				<CaseSection title="3 - Links">
					<div className="flex flex-col max-w-xs gap-4 ml-20">
						{/* GitHub Links */}
						<div>
							<p className="mb-2 text-text">Code repository:</p>
							<ul className="ml-6 list-disc text-text">
								<li>
									<a
										href="https://github.com/WaltSchn/nasa-react-app"
										target="_blank"
										className="underline transition text-primary hover:text-primary/80"
									>
										GitHub Repository
									</a>
								</li>
							</ul>
						</div>

						{/* Live Site */}
						<a
							href="https://nasa-react-app-wjs.netlify.app/"
							target="_blank"
							className="px-4 py-2 text-center text-white transition rounded bg-primary hover:bg-primary/90"
						>
							Visit Live Site
						</a>
					</div>
				</CaseSection>
			</div>
		</>
	);
}
