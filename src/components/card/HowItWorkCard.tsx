"use client";

import { useState } from "react";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
} from "@/components/ui/pagination";

import Card from "./Card";
import CardHeader from "./CardHeader";

// Define the content for each step
const steps = [
	{
		title: "01 Initial Call",
		content:
			"Welcome to the first step! This is where you begin your journey. We'll cover the basics and get you set up with everything you need.",
	},
	{
		title: "02 UI Design & Mockup",
		content:
			"In this step, we'll dive deeper into the core concepts. Building a strong foundation is essential for mastering any skill.",
	},
	{
		title: "03 Web Design & Development",
		content:
			"Now that you understand the basics, let's explore some advanced techniques. These will help you take your skills to the next level.",
	},
	{
		title: "04 Animations & Finishing Touches",
		content:
			"It's time to put your knowledge into practice. In this step, we'll work through real-world examples and scenarios.",
	},
	{
		title: "05 SEO & Hosting",
		content:
			"Congratulations on making it to the final step! Let's review what you've learned and discuss where to go from here.",
	},
];

export function HowItWorksCard() {
	const [currentStep, setCurrentStep] = useState(0);

	return (
		<Card className="h-[200px] col-span-1 md:col-span-4 ">
			<CardHeader heading="How I Work" href="/work" />
			<div className="flex flex-col gap-1 p-2">
				<h4 className="text-md font-semibold">{steps[currentStep].title}</h4>
				<p className="text-xs text-black/50"> {steps[currentStep].content} </p>

				<Pagination>
					<PaginationContent className="flex justify-center bg-white border rounded-full mt-3">
						{steps.map((step, index) => (
							<PaginationItem key={index}>
								<PaginationLink
									onClick={() => setCurrentStep(index)}
									className={`cursor-pointer rounded-full px-8 text-xs ${
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
