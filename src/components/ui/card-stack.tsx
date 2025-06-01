"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { ThumbnailImage } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";

//TODO: Images are still being imported locally

export const CardStack = ({
	data,
	offset = 10,
	scaleFactor = 0.06,
}: {
	data: ThumbnailImage[];
	offset?: number;
	scaleFactor?: number;
}) => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative h-60 w-full md:w-96 overflow-visible">
			{data.map((image, index) => {
				// Relative position based on activeIndex (0 is front, 1 is mid, 2 is back)
				const relativeIndex = (index - activeIndex + data.length) % data.length;

				// Only show top 3 cards
				if (relativeIndex > 2) return null;

				return (
					<motion.div
						key={index}
						className="absolute h-60 w-full md:w-96 md:h-60 rounded-3xl overflow-hidden shadow-xl border-2 border-neutral-200  flex justify-center items-center bg-transparent"
						style={{
							transformOrigin: "top center",
						}}
						animate={{
							top: relativeIndex * -offset,
							scale: 1 - relativeIndex * scaleFactor,
							zIndex: images.length - relativeIndex,
							opacity: 1 - relativeIndex * 0.1,
						}}
						transition={{
							duration: 0.6,
							ease: "easeInOut",
						}}
					>
						<Image
							src={urlFor(image.image).url()}
							alt={`Portfolio ${index + 1}`}
							className="bg-clip-border overflow-clip "
							fill
							loading="lazy"
						/>
					</motion.div>
				);
			})}
		</div>
	);
};
