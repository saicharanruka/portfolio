"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let interval: any;
import BgImage from "@/assets/portfolio-example-1.jpg";

type Card = {
	id: number;
	name: string;
	designation: string;
	content: React.ReactNode;
};

export const CardStack = ({
	items,
	offset,
	scaleFactor,
}: {
	items: Card[];
	offset?: number;
	scaleFactor?: number;
}) => {
	const CARD_OFFSET = offset || 10;
	const SCALE_FACTOR = scaleFactor || 0.06;
	const [cards, setCards] = useState<Card[]>(items);

	useEffect(() => {
		startFlipping();

		return () => clearInterval(interval);
	}, []);
	const startFlipping = () => {
		interval = setInterval(() => {
			setCards((prevCards: Card[]) => {
				const newArray = [...prevCards]; // create a copy of the array
				newArray.unshift(newArray.pop()!); // move the last element to the front
				return newArray;
			});
		}, 2500);
	};

	return (
		<div className="relative  h-24 w-60 md:w-96">
			{cards.map((card, index) => {
				return (
					<motion.div
						key={card.id}
						className="absolute bg-lime-100 h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
						style={{
							transformOrigin: "top center",
							backgroundImage: `url(${BgImage.src})`,
							objectFit: "cover",
						}}
						animate={{
							top: index * -CARD_OFFSET,
							scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
							zIndex: cards.length - index, //  decrease z-index for the cards that are behind
						}}
					></motion.div>
				);
			})}
		</div>
	);
};
