import Card from "../../components/Card";
import { FaArrowRight } from "react-icons/fa";

export default function UXPage() {
	return (
		<div className="space-y-5">
			<h1 className="mb-12 text-4xl font-bold text-center">
				Welcome to My Portfolio
			</h1>
			<div className="flex flex-col gap-8 mt-10">
				<Card
					imageSrc="/assets/OpenWay.png"
					title="OpenWay"
					description="OpenWay is a mobile-first platform for sharing and discovering accessibility information across Vancouver. Through user research, IA iterations, and prototyping, I focused the MVP on quick reporting, temporary-issue alerts, and filters that adapt to different needs."
					tags={[
						"UX",
						"User Research",
						"Usability Testing",
						"Wireframing",
						"Prototyping",
						"Information Architecture",
					]}
					buttonText={
						<span className="inline-flex items-center gap-2">
							View Project <FaArrowRight className="w-3 h-3" />
						</span>
					}
					buttonHref="/projects/ux/open-way"
					featured={true}
				/>
				<Card
					imageSrc="/assets/FestivalHopper.png"
					title="Festival Hopper"
					description="Festival Hopper is designed to simplify the messy process of finding and planning festivals, combining discovery, ticketing, and fan communities in a single platform."
					tags={[
						"UX",
						"Usability Testing",
						"Wireframing",
						"Prototyping",
						"Information Architecture",
					]}
					buttonText={
						<span className="inline-flex items-center gap-2">
							View Project <FaArrowRight className="w-3 h-3" />
						</span>
					}
					buttonHref="/projects/ux/festival-hopper"
				/>
				<Card
					imageSrc="/assets/BeeTheChef.png"
					title="Bee the Chef"
					description="A meal planner that helps users design sustainable and healthy recipes. Designed with accessibility in mind."
					tags={[
						"UX",
						"User Research",
						"Usability Testing",
						"Wireframing",
						"Prototyping",
					]}
					buttonText={
						<span className="inline-flex items-center gap-2">
							View Project <FaArrowRight className="w-3 h-3" />
						</span>
					}
					buttonHref="/projects/ux/bee-the-chef"
				/>
			</div>
		</div>
	);
}
