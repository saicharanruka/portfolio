import grainImage from "@/assets/grain.jpg";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
	className,
	children,
	...other
}: ComponentPropsWithoutRef<"div">) => {
	return (
		<div
			className={twMerge(
				"overflow-hidden bg-transparent rounded-3xl gap-5 relative z-0  p-3 border-white border-2  shadow-xl transition",
				className
			)}
			{...other}
		>
			<div
				className="absolute inset-0 -z-30 opacity-[0.025]"
				style={{
					backgroundImage: `url(${grainImage.src})`,
				}}
			></div>
			{children}
		</div>
	);
};

export default Card;
