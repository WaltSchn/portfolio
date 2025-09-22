import Card from "@/app/components/Card";
import { FaArrowRight } from "react-icons/fa";

export default function DevPage() {
	return (
		<div className="space-y-6">
			<h1 className="mb-12 text-4xl font-bold text-center">
				Welcome to My Portfolio
			</h1>

			<div className="flex flex-col gap-8 mt-10 ">
				<Card
					imageSrc="/assets/Pidgeotour.png"
					title="Pidgeotour"
					description="A simple fullstack tour booking prototype built with Next.js, Express, and MongoDB, created to practice Tailwind styling and front-back-database integration."
					tags={["Dev", "Next.js", "Express.js"]}
					buttonText={
						<span className="inline-flex items-center gap-2">
							View Project <FaArrowRight className="w-3 h-3" />
						</span>
					}
					buttonHref="/projects/dev/pidgeotour"
					featured={true}
				/>
				<Card
					imageSrc="/assets/Apod.png"
					title="NASA APOD"
					description="A React app that fetches NASA’s Astronomy Picture of the Day (APOD) and displays it in a minimalist interface. Includes a blurred background, a smooth loader, and a sidebar drawer for image details."
					tags={["Dev", "ReactJS"]}
					buttonText={
						<span className="inline-flex items-center gap-2">
							View Project <FaArrowRight className="w-3 h-3" />
						</span>
					}
					buttonHref="/projects/dev/nasa-apod"
				/>
			</div>
		</div>
	);
}
