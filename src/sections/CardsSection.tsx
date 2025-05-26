import Image from "next/image";

import Card from "@/components/card/Card";
import CardHeader from "@/components/card/CardHeader";

import { HowItWorksCard } from "@/components/card/HowItWorkCard";
import { CardStack } from "@/components/ui/card-stack";

import BlogIcon from "@/assets/home/blog-icon.svg";
import Memeoji from "@/assets/home/memeoji.png";
import { client } from "@/lib/sanity";
import { ThumbnailImage } from "@/lib/interface";

export const revalidate = 60;

async function getImageData() {
	const query = `*[_type == "portfolioProject"] {image}[0...4]`;
	const data = await client.fetch(query);
	return data;
}

export default async function CardsSection() {
	const data: ThumbnailImage[] = await getImageData();
	return (
		<section className="pb-12 md:pb-0 pt-6">
			<div className="flex flex-col gap-y-4">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-6">
					<Card className="h-[220px] col-span-1 md:col-span-4 ">
						<CardHeader heading="Portfolio" href />
						<div className="flex flex-col md:flex-row justify-between">
							<div>
								<h4 className="text-md font-semibold pt-1">Explore my work</h4>
								<p className="text-black/50 text-xs font-medium">
									See how I design, develop, and optimize websites — from idea
									to execution.
								</p>
							</div>
							<div className=" pt-5 md:pt-0 md:p-2">
								<CardStack data={data} />
							</div>
						</div>
					</Card>
					<Card className="h-[220px] col-span-1 md:col-span-2 ">
						<CardHeader heading="Blog" href />
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
					<Card className="h-[220px] col-span-1 md:col-span-2 ">
						<CardHeader heading="About Me" href />
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
}

{
	/* <Image
src={portfolio2}
alt="portfolio2"
width={500}
className="rounded-t-2xl border-2 border-black/10 hover:border-black/20 hover:border-3 transition z-0 "
/> */
}
