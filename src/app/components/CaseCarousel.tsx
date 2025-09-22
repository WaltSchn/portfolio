"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { CaseImage } from "./CaseSection";
import type { StaticImageData } from "next/image";
import Image from "next/image";

type Slide = {
	src: string | StaticImageData;
	alt: string;
	caption?: string;
	title?: string;
	width?: number;
	height?: number;
	fit?: "cover" | "contain";
	className?: string;
	containerClassName?: string;
};

interface CaseCarouselProps {
	images: Slide[];
	options?: EmblaOptionsType;
	className?: string;
}

export default function CaseCarousel({
	images,
	options,
	className,
}: CaseCarouselProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options });
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);
	const [lightboxIndex, setLightboxIndex] = useState(0);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	const scrollTo = useCallback(
		(index: number) => emblaApi && emblaApi.scrollTo(index),
		[emblaApi]
	);

	const prev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
	const next = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		setScrollSnaps(emblaApi.scrollSnapList());
		emblaApi.on("select", onSelect);
		emblaApi.on("reInit", () => {
			setScrollSnaps(emblaApi.scrollSnapList());
			onSelect();
		});
		onSelect();
	}, [emblaApi, onSelect]);

	const openLightbox = (index: number) => {
		setLightboxIndex(index);
		setIsLightboxOpen(true);
	};

	const closeLightbox = () => setIsLightboxOpen(false);

	const prevLightbox = () =>
		setLightboxIndex((i) => (i === 0 ? images.length - 1 : i - 1));
	const nextLightbox = () =>
		setLightboxIndex((i) => (i === images.length - 1 ? 0 : i + 1));
	return (
		<div className={`relative max-w-2xl mx-auto ${className ?? ""}`}>
			{/* Viewport */}
			<div className="overflow-hidden rounded-3xl" ref={emblaRef}>
				<div className="flex">
					{images.map((img, i) => (
						<div className="flex-[0_0_100%]" key={i}>
							<div onClick={() => openLightbox(i)}>
								<CaseImage
									src={img.src}
									alt={img.alt}
									caption={img.caption}
									title={img.title}
									width={img.width}
									height={img.height}
									fit={img.fit ?? "contain"}
									responsive
									containerClassName={`${
										img.containerClassName ?? ""
									} cursor-zoom-in`}
									withLightbox={false}
									disableHoverScale
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* Arrows */}
			<button
				type="button"
				aria-label="Previous Image"
				onClick={prev}
				className="absolute left-[-80px] inset-y-0 z-50 flex items-center justify-center px-2 text-text hover:text-primary transition-colors"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={2}
					stroke="currentColor"
					className="w-8 h-8"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</button>

			<button
				type="button"
				aria-label="Next Image"
				onClick={next}
				className="absolute right-[-80px] inset-y-0 z-50 flex items-center justify-center px-2 text-text hover:text-primary transition-colors"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={2}
					stroke="currentColor"
					className="w-8 h-8"
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
				</svg>
			</button>

			{/* Dots */}
			<div className="flex items-center justify-center gap-2 mt-3">
				{scrollSnaps.map((_, i) => (
					<button
						key={i}
						onClick={() => scrollTo(i)}
						aria-label={`Go to image ${i + 1}`}
						className={`h-2.5 rounded-full transition-all ${
							selectedIndex === i ? "w-6 bg-lightAccent" : "w-2.5 bg-text/30"
						}`}
					/>
				))}
			</div>
			{/* Lightbox overlay */}
			{isLightboxOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
					onClick={closeLightbox}
				>
					<Image
						src={
							typeof images[lightboxIndex].src === "string"
								? images[lightboxIndex].src
								: (images[lightboxIndex].src as StaticImageData).src
						}
						alt={images[lightboxIndex].alt}
						width={
							typeof images[lightboxIndex].src === "string"
								? undefined
								: (images[lightboxIndex].width ?? 800) * 2
						}
						height={
							typeof images[lightboxIndex].src === "string"
								? undefined
								: (images[lightboxIndex].height ?? 600) * 2
						}
						style={{ objectFit: images[lightboxIndex].fit ?? "contain" }}
						className="max-w-[96vw] max-h-[86vh] rounded-3xl cursor-zoom-out"
						unoptimized={typeof images[lightboxIndex].src === "string"}
					/>

					{/* Left arrow */}
					<button
						onClick={(e) => {
							e.stopPropagation();
							prevLightbox();
						}}
						className="absolute inset-y-0 z-50 flex items-center justify-center px-2 text-white transition-colors left-4 hover:text-primary"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-10 h-10"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>

					{/* Right arrow */}
					<button
						onClick={(e) => {
							e.stopPropagation();
							nextLightbox();
						}}
						className="absolute inset-y-0 z-50 flex items-center justify-center px-2 text-white transition-colors right-4 hover:text-primary"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-10 h-10"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>
			)}
		</div>
	);
}
