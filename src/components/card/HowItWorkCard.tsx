"use client";

import { useState } from "react";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
} from "@/components/ui/pagination";

import { Card } from "./Card";

// Define the content for each step
const steps = [
	{
		title: "✅ Step 01: Design & Revisions in Figma",
		content:
			"We start with visual clarity. I’ll design your website in Figma so you can see exactly what you’ll get. You’ll also get a few revision rounds to make sure it feels just right.",
	},
	{
		title: "⚙️Step 02: Structure in React & Tailwind",
		content:
			"Once the design is locked, I build a fast, responsive frontend using React and Tailwind CSS — so it looks great on every device and loads in a flash.",
	},
	{
		title: "🌀Step 03: Animations & Functionality",
		content:
			"This is where your site comes alive. Smooth animations, CMS for easy updates, and any third-party tools (like booking forms, email integrations, etc.) get wired in here.",
	},
	{
		title: "🔍 Step 04: SEO Optimization & Content Structuring",
		content:
			"I optimize every page to rank well on search engines — clean metadata, structured content, blazing speed, and best practices to bring in organic traffic.",
	},
	{
		title: "🌐 Step 05: Hosting, Deployment & Analytics",
		content:
			"Your finished site gets deployed to a secure, fast server — with backups, analytics, and performance monitoring. Everything works, everywhere, all the time.",
	},
];

export function HowItWorksCard() {
	const [currentStep, setCurrentStep] = useState(0);

	return (
		<Card className="h-[220px] col-span-1 md:col-span-4 " heading="How I Work">
			<div className="flex flex-col gap-1 p-2 ">
				<h4 className="text-xl font-semibold">{steps[currentStep].title}</h4>
				<p className="text-xs font-medium text-black/50 h-16">
					{" "}
					{steps[currentStep].content}{" "}
				</p>

				<Pagination className="-mt-3 md:mt-0">
					<PaginationContent className="flex  justify-center bg-white border rounded-full">
						{steps.map((step, index) => (
							<PaginationItem key={index}>
								<PaginationLink
									onClick={() => setCurrentStep(index)}
									className={`cursor-pointer rounded-full px-7 md:px-8 text-xs ${
										currentStep === index
											? "bg-black text-white hover:bg-black hover:text-white"
											: "hover:bg-gray-200"
									}`}
								>
									Step 0{index + 1}
								</PaginationLink>
							</PaginationItem>
						))}
					</PaginationContent>
				</Pagination>
			</div>
		</Card>
	);
}

{
	/* <div className="border rounded-lg p-6 shadow-sm">
<div className="mb-6 h-[200px] flex flex-col">
    <h2 className="text-2xl font-bold mb-3 h-[40px] overflow-hidden">
        {steps[currentStep].title}
    </h2>
    <p className="text-gray-700 flex-1 overflow-y-auto">
        {steps[currentStep].content}
    </p>
</div>

<Pagination>
    <PaginationContent className="flex justify-center">
        {steps.map((step, index) => (
            <PaginationItem key={index}>
                <PaginationLink
                    onClick={() => setCurrentStep(index)}
                    className={`cursor-pointer rounded-full px-4 py-2 mx-1 ${
                        currentStep === index
                            ? "bg-black text-white hover:bg-black hover:text-white"
                            : "bg-gray-100 hover:bg-gray-200"
                    }`}
                >
                    Step {index + 1}
                </PaginationLink>
            </PaginationItem>
        ))}
    </PaginationContent>
</Pagination>
</div> */
}
