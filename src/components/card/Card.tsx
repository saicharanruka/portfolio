import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { ComponentPropsWithoutRef } from "react";
import Arrow from "@/assets/home/arrow.svg"; // Adjust import as needed

interface CardProps extends ComponentPropsWithoutRef<"div"> {
	heading?: string;
	href?: string;
}

export const Card: React.FC<CardProps> = ({
	className,
	children,
	heading,
	href,
	...other
}) => {
	const content = (
		<div
			className={twMerge(
				"hover:scale-105 overflow-hidden bg-transparent rounded-3xl gap-5 relative z-0 p-3 border-white border-2 shadow-xl md:shadow-2xl transition",
				className
			)}
			{...other}
		>
			<div className="flex justify-between pb-1">
				{heading && (
					<p className="text-xs font-semibold rounded-full capitalize bg-white px-3 p-2">
						{heading}
					</p>
				)}
				{href && (
					<div className="bg-white size-7 rounded-full flex items-center justify-center">
						<Arrow className="size-3" />
					</div>
				)}
			</div>

			<div className="absolute inset-0 -z-30 opacity-[0.025]" />
			{children}
		</div>
	);

	return href ? (
		<Link href={href} className={twMerge("block", className)}>
			{content}
		</Link>
	) : (
		content
	);
};
