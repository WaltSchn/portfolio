"use client";
import { useEffect } from "react";
import CaseSection, { CaseImage } from "@/app/components/CaseSection";
import CaseCarousel from "@/app/components/CaseCarousel";
import { useSections } from "@/app/components/SectionsContext";

import logo from "@/../public/assets/projects/Pidgeotour/pidgeotour-logo.png";
import img1 from "@/../public/assets/projects/Pidgeotour/pidgeotour-img1.png";
import img2 from "@/../public/assets/projects/Pidgeotour/pidgeotour-img2.png";
import img3 from "@/../public/assets/projects/Pidgeotour/pidgeotour-img3.png";

export default function PidgeotourProject() {
	const { setSections } = useSections();

	useEffect(() => {
		setSections([
			{ id: "section-0", label: "Project Overview" },
			{ id: "section-1", label: "1 - Origins & Evolution" },
			{ id: "section-2", label: "2 - Stack & MVP" },
			{ id: "section-3", label: "3 - Implementation Highlights" },
			{ id: "section-4", label: "4 - Next Steps" },
			{ id: "section-5", label: "5 - Links" },
		]);
	}, [setSections]);

	return (
		<>
			{/* Project Header */}
			<div className="mb-12">
				<div className="flex items-center justify-center gap-12 mb-12">
					<CaseImage src={logo} alt="Pidgeotour logo" isLogo />
					<h1 className="text-4xl font-bold text-text">Pidgeotour</h1>
				</div>
				<div className="flex flex-col items-start max-w-4xl mx-auto space-y-1 text-sm text-text/80">
					<span>
						<strong className="text-primary">Role:</strong> Front-End &
						Full-Stack Dev
					</span>
					<span>
						<strong className="text-primary">Stack:</strong> NextJS, Express,
						MongoDB, Axios, React Query
					</span>
					<span>
						<strong className="text-primary">Libraries:</strong> Embla Carousel,
						Lucide React, React Datepicker
					</span>
					<span>
						<strong className="text-primary">Deliverables:</strong> Homepage,
						Tours Grid, Tour Details, Front-end/Back-end Connection,
						Back-end/Database Connection
					</span>
				</div>
			</div>

			{/* Project Overview */}
			<div id="section-0">
				<CaseSection title="Project Overview">
					<p className="mb-4 text-text">
						Pidgeotour started as a group project during my MBA in Fullstack. We
						built the first version using Angular and Java with a MySQL
						database. I focused on front-end and connecting data between front
						and back. The interface wasn’t perfect due to time constraints, but
						it worked and even got us a good grade. Later, I recreated it in
						WordPress as part of a UX course. The visuals improved a lot, with
						better spacing, color contrast, and layout but the functionality got
						even more limited as I was still learning the platform.
					</p>
					<p className="mb-4 text-text">
						Now, I decided to revive the project with a modern stack: NextJS,
						Express, and MongoDB. The goal was to build a practical, usable
						website, while keeping the code clean and the pages responsive. The
						site includes a homepage with a hero video and carousel of featured
						tours, a tours grid with filters, individual tour pages with booking
						button, and a datepicker connected to the database. The back-end is
						hosted on Render, while the front-end runs on Netlify.
					</p>
				</CaseSection>
			</div>

			{/* Origins & Evolution */}
			<div id="section-1">
				<CaseSection title="1 - Origins & Evolution">
					<p className="mb-4 ml-20 text-text">
						The project’s journey shows a clear evolution: from a functional but
						raw Angular/Java prototype, to a visually improved WordPress
						version, and finally to a fully custom modern web app. Each step
						brought new lessons in responsive design, usability and full-stack
						development.
					</p>
				</CaseSection>
			</div>

			{/* Stack & MVP */}
			<div id="section-2">
				<CaseSection title="2 - Stack & MVP">
					<p className="mb-4 ml-20 text-text">
						Tech stack: NextJS (front-end), Express (back-end), MongoDB
						(database). I defined a simple MVP to keep the project achievable:
					</p>
					<ul className="mb-4 ml-32 list-disc text-text">
						<li>Express backend and MongoDB collections for tours</li>
						<li>Homepage with hero video and featured tours carousel</li>
						<li>Tours grid with filtering</li>
						<li>Individual tour pages with booking and datepicker</li>
					</ul>
					<p className="mb-4 ml-20 text-text">
						Key libraries: Tailwind (styling), Axios (data fetching), React
						Query (caching & server state), Embla Carousel, Lucide React
						(icons), React Datepicker.
					</p>
				</CaseSection>
			</div>

			{/* Implementation Highlights */}
			<div id="section-3">
				<CaseSection title="3 - Implementation Highlights">
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
									alt: "Tours Grid List",
									caption: "Tours Grid List",
								},
								{
									src: img3,
									alt: "Tour page",
									caption: "Tour Page",
								},
							]}
							options={{ loop: false }}
						/>
					</div>
					<p className="mb-4 ml-20 text-text">
						The focus was on clean design, responsive layout, and smooth UX.
						Users can view tours, filter results, check details, and book dates,
						with data flowing efficiently from the backend.
					</p>
				</CaseSection>
			</div>

			{/* Next Steps */}
			<div id="section-4">
				<CaseSection title="4 - Next Steps">
					<ul className="mb-4 ml-20 list-disc text-text">
						<li>User authentication and profiles</li>
						<li>CRUD for real-time bookings</li>
						<li>Notifications & availability updates</li>
						<li>Further UX/UI refinements based on user feedback</li>
					</ul>
				</CaseSection>
			</div>

			{/* Links */}
			<div id="section-5">
				<CaseSection title="5 - Links">
					<div className="flex flex-col max-w-xs gap-4 ml-20">
						{/* GitHub Links */}
						<div>
							<p className="mb-2 text-text">Code repositories:</p>
							<ul className="ml-6 list-disc text-text">
								<li>
									<a
										href="https://github.com/WaltSchn/pidgeotour-frontend-next"
										target="_blank"
										className="underline transition text-primary hover:text-primary/80"
									>
										Front-End Repository
									</a>
								</li>
								<li>
									<a
										href="https://github.com/WaltSchn/pidgeotour-backend-express"
										target="_blank"
										className="underline transition text-primary hover:text-primary/80"
									>
										Back-End Repository
									</a>
								</li>
							</ul>
						</div>

						{/* Live Site */}
						<a
							href="https://pidgeotour.netlify.app"
							target="_blank"
							className="px-4 py-2 text-center text-white transition rounded bg-primary hover:bg-primary/90"
						>
							Visit Live Site
						</a>
					</div>
					<p className="text-sm text-text/70">
						<span className="text-primary font-bold text-lg">Note: </span>
						The backend is hosted on Render, so it might take a few seconds to
						load if it hasn’t been used recently.
					</p>
				</CaseSection>
			</div>
		</>
	);
}
