import Image from "next/image";
import Button from "./Button";
import { ReactNode } from "react";

type CardProps = {
	imageSrc: string;
	title: string;
	description: string;
	tags?: string[];
	buttonText?: ReactNode;
	buttonHref?: string;
	featured?: boolean;
};

export default function Card({
	imageSrc,
	title,
	description,
	tags = [],
	buttonText = "View Project",
	buttonHref = "#",
	featured = false,
}: CardProps) {
	return (
		<div
			className={`relative flex flex-col md:flex-row gap-6 md:gap-8 px-4 md:px-6 py-5 rounded-[20px] backdrop-blur-md border transition-transform duration-300 hover:scale-[1.015]
      ${
				featured
					? "bg-[rgba(248,76,161,0.04)] border-pink-300/30 shadow-[0_0_16px_1px_rgba(248,76,161,0.15)]"
					: "bg-[rgba(111,78,140,0.12)] border-[rgba(230,219,244,0.3)] shadow-[0_0_10px_1px_rgba(248,76,161,0.08)]"
			}`}
		>
			{/* main image */}
			<div
				className={`relative overflow-hidden rounded-xl mx-auto md:mx-0 flex-shrink-0
        ${
					featured
						? "w-full md:w-[25rem] max-w-[25rem] aspect-[16/9]"
						: "w-full md:w-[16rem] max-w-[16rem] aspect-[4/3]"
				}`}
				aria-hidden="true"
			>
				<Image
					src={imageSrc}
					alt={title}
					fill
					className="object-cover"
					priority
				/>
			</div>

			{/* content */}
			<div className="flex flex-col justify-between flex-grow">
				<h2
					className={`font-semibold text-text ${
						featured ? "text-2xl md:text-3xl mt-2" : "text-xl md:text-2xl mt-2"
					}`}
				>
					{title}
				</h2>

				<div className="flex items-center flex-grow mt-2">
					<p className="text-base text-text">{description}</p>
				</div>

				<div className="flex items-center justify-between gap-4 mt-6">
					{/* tags */}
					<div className="flex flex-wrap flex-grow gap-2">
						{tags.map((tag) => (
							<span
								key={tag}
								className="px-2 py-1 text-xs border rounded-full bg-accent/30 text-lightAccent border-accent/40"
							>
								{tag}
							</span>
						))}
					</div>

					{/* button */}
					<div className="flex-shrink-0">
						<Button href={buttonHref}>{buttonText}</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
