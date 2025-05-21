import Card from "@/components/card/Card";
import CardHeader from "@/components/card/CardHeader";
import React from "react";

import { HowItWorksCard } from "@/components/card/HowItWorkCard";

import BlogIcon from "@/assets/home/blog-icon.svg";
import Memeoji from "@/assets/home/memeoji.png";
import portfolio1 from "@/assets/portfolio-example-1.jpg";

import Image from "next/image";

const CardsSection = () => {
	return (
		<section className="pb-12 md:pb-0 pt-6">
			<div className="flex flex-col gap-y-4">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-6">
					<Card className="h-[200px] col-span-1 md:col-span-4 ">
						<CardHeader heading="Portfolio" href="/portfolio" />
						<div className="flex justify-between">
							<div>
								<h4 className="text-md font-semibold pt-1">Explore my work</h4>
								<p className="text-black/50 text-xs font-medium">
									See how I design, develop, and optimize websites — from idea
									to execution.
								</p>
							</div>
							<div className="p-3">
								<div className="">
									<Image
										src={portfolio1}
										width={300}
										alt="Portfolio 1"
										className="rounded-lg border-2 border-white relative z-0"
									/>
									<Image
										src={portfolio1}
										width={300}
										alt="Portfolio 1"
										className="rounded-lg border-2 border-white absolute -z-10 "
									/>
								</div>
							</div>
						</div>
					</Card>
					<Card className="h-[200px] col-span-1 md:col-span-2 ">
						<CardHeader heading="Blog" href="/blog" />
						<h4 className="text-md font-semibold pt-1">Check out my blog</h4>
						<p className="text-xs font-medium text-black/50 z-0">
							Learn tips and tricks on SEO, Web Design and everything in
							between.
						</p>
						<div className="w-40 mx-auto -mt-4 md:-mt-3 -z-10">
							<BlogIcon />
						</div>
					</Card>
				</div>
				<div className="grid grid-cols-1 gap-4 col-span-1 md:grid-cols-6">
					<Card className="h-[200px] col-span-1 md:col-span-2 ">
						<CardHeader heading="About Me" href="/about" />
						<p className="text-xs text-black/50 z-0 capitalize font-medium pt-1">
							Know more about me!
						</p>
						<div className="mx-auto -mt-1 w-36">
							<Image src={Memeoji} alt="Memeoji" />
						</div>
					</Card>
					<HowItWorksCard />
				</div>
			</div>
		</section>
	);
};

export default CardsSection;
