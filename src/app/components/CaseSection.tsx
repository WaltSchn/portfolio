import { ReactNode, useState } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

interface SectionProps {
	title: string;
	children: ReactNode;
}

interface CaseImageProps {
	src: string | StaticImageData;
	alt: string;
	width?: number;
	height?: number;
	fit?: "cover" | "contain";
	isLogo?: boolean;
	caption?: string;
	title?: string;
	responsive?: boolean;
	className?: string;
	containerClassName?: string;
	withLightbox?: boolean;
	disableHoverScale?: boolean;
}

export function CaseImage({
	src,
	alt,
	width = 1200,
	height = 800,
	fit = "contain",
	isLogo = false,
	caption,
	title,
	responsive = false,
	className,
	containerClassName,
	withLightbox = false,
	disableHoverScale = false,
}: CaseImageProps) {
	const [isOpen, setIsOpen] = useState(false);

	if (isLogo) {
		return (
			<div className="relative w-24 h-24 overflow-hidden rounded-lg">
				<Image
					src={src}
					alt={alt}
					style={{
						objectFit: "contain",
						objectPosition: "center",
						height: "auto",
					}}
					placeholder="blur"
				/>
			</div>
		);
	}

	return (
		<>
			<figure
				className={clsx(
					"my-6 mx-auto text-center cursor-pointer",
					containerClassName
				)}
				onClick={() => withLightbox && setIsOpen(true)}
			>
				{title && (
					<h4 className="mb-2 text-lg font-semibold text-lightAccent">
						{title}
					</h4>
				)}

				<Image
					src={src}
					alt={alt}
					width={width}
					style={{ objectFit: fit, height: "auto" }}
					placeholder="blur"
					className={clsx(
						"shadow-lg rounded-3xl mx-auto transition-transform",
						!disableHoverScale && "hover:scale-[1.02]",
						responsive ? "w-full h-auto" : "h-auto",
						withLightbox ? "cursor-zoom-in" : "",
						className
					)}
				/>

				{caption && (
					<figcaption className="mt-2 text-sm italic text-text/80">
						{caption}
					</figcaption>
				)}
			</figure>

			{/* Overlay */}
			{withLightbox && isOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
					onClick={() => setIsOpen(false)}
				>
					<Image
						src={src}
						alt={alt}
						width={width * 2}
						height={height * 2}
						style={{ objectFit: fit }}
						className="max-w-[96vw] max-h-[86vh] rounded-3xl cursor-zoom-out"
					/>
				</div>
			)}
		</>
	);
}

export default function CaseSection({ title, children }: SectionProps) {
	return (
		<section className="max-w-4xl mx-auto mb-8">
			<h2 className="mb-6 text-2xl font-bold">{title}</h2>
			<div className="space-y-4">{children}</div>
		</section>
	);
}
