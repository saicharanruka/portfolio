import Card from "@/components/card/Card";
import CardHeader from "@/components/card/CardHeader";
import React from "react";

const CardsSection = () => {
	return (
		<section className="pt-6">
			<div className="flex flex-col gap-4">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-6">
					<Card className="h-[200px] col-span-4 ">
						<CardHeader heading="How I Work" href="/how-i-work" />
						<div className="flex flex-col gap-1 p-2">
							<h4 className="text-md font-semibold">01 Initial Call</h4>
							<p className="text-xs text-black/50">
								Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet
								consectetur adipiscing elit quisque faucibus ex sapien. Quisque
								faucibus ex sapien vitae pellentesque sem placerat. Vitae
								pellentesque sem placerat in id cursus mi.
							</p>
							<div className="flex justify-center items-center">
								<div>Step1</div>
							</div>
						</div>
					</Card>
					<Card className="h-[200px] col-span-2 ">
						<CardHeader heading="Blog" href="/blog" />
					</Card>
				</div>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-6">
					<Card className="h-[200px] col-span-2 ">
						<CardHeader heading="About Me" href="/about-me" />
					</Card>
					<Card className="h-[200px] col-span-4 ">
						<CardHeader heading="Portfolio" href="/portfolio" />
					</Card>
				</div>
			</div>
		</section>
	);
};

export default CardsSection;
