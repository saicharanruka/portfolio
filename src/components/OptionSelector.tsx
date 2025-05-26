"use client";

import { useState } from "react";

export default function OptionSelector({
	name,
	multiple = false,
	className = "",
}: {
	name: string;
	multiple?: boolean;
	className?: string;
}) {
	const options = [
		"Landing Page",
		"Portfolio Site",
		"Blog + CMS",
		"E-commerce",
		"Personal Site",
	];
	const [selected, setSelected] = useState<string[]>([]);

	const toggleOption = (option: string) => {
		if (multiple) {
			setSelected((prev) =>
				prev.includes(option)
					? prev.filter((o) => o !== option)
					: [...prev, option]
			);
		} else {
			setSelected([option]);
		}
	};

	return (
		<div className={`space-y-2 max-w-xl ${className}`}>
			<p className="font-medium">What’s in your mind?*</p>
			<div className="flex flex-wrap gap-2">
				{options.map((option) => (
					<button
						type="button"
						key={option}
						onClick={() => toggleOption(option)}
						className={`px-4 py-2 rounded-full border transition ${
							selected.includes(option)
								? "bg-black text-white border-black"
								: "bg-white text-black border-gray-300"
						}`}
					>
						{option}
					</button>
				))}
			</div>

			{/* Hidden input for Formspree */}
			<input
				type="hidden"
				name={name}
				value={multiple ? selected.join(", ") : selected[0] || ""}
			/>
		</div>
	);
}
