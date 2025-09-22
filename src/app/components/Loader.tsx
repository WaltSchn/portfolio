"use client";
import React from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

export default function Loader() {
	const planetSize = 90;
	const moonSize = 15;
	const orbitRadiusX = 100;
	const orbitRadiusY = 25;
	const speed = 0.03;

	const angle = useMotionValue(0);
	const [moonPos, setMoonPos] = React.useState({ x: 0, y: 0 });
	const [front, setFront] = React.useState(true);

	useAnimationFrame(() => {
		const newAngle = (angle.get() + speed) % (2 * Math.PI);
		angle.set(newAngle);

		const x = orbitRadiusX * Math.cos(newAngle);
		const y = orbitRadiusY * Math.sin(newAngle);
		setMoonPos({ x, y });
		setFront(y < 0);
	});

	return (
		<div
			style={{
				position: "relative",
				width: orbitRadiusX * 2 + planetSize,
				height: orbitRadiusY * 2 + planetSize,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{!front && (
				<div
					style={{
						position: "absolute",
						width: moonSize,
						height: moonSize,
						borderRadius: "50%",
						background: "radial-gradient(circle at 30% 30%, #FFA8D3, #EFE7F8)",
						transform: `translate(${moonPos.x}px, ${moonPos.y}px)`,
						boxShadow: "0 0 6px rgba(255, 168, 211, 0.6)",
					}}
				/>
			)}

			<motion.div
				style={{
					width: planetSize,
					height: planetSize,
					borderRadius: "50%",
					background: "radial-gradient(circle at 30% 30%, #F84CA1, #6F4E8C)",
					boxShadow:
						"0 0 25px rgba(248, 76, 161, 0.6), 0 0 50px rgba(111, 78, 140, 0.4)",
					position: "absolute",
				}}
				animate={{
					rotate: 360,
					backgroundPosition: ["0% 0%", "100% 100%"],
				}}
				transition={{
					repeat: Infinity,
					duration: 25,
					ease: "linear",
				}}
			/>

			{front && (
				<div
					style={{
						position: "absolute",
						width: moonSize,
						height: moonSize,
						borderRadius: "50%",
						background: "radial-gradient(circle at 30% 30%, #FFA8D3, #EFE7F8)",
						transform: `translate(${moonPos.x}px, ${moonPos.y}px)`,
						boxShadow: "0 0 6px rgba(255, 168, 211, 0.6)",
					}}
				/>
			)}
		</div>
	);
}
