import Image from "next/image";

import { Card } from "@/components/card/Card";

import { HowItWorksCard } from "@/components/card/HowItWorkCard";
import { CardStack } from "@/components/ui/card-stack";

import BlogIcon from "@/assets/home/blog-icon.webp";
import bookIcon from "@/assets/home/bookIcon.webp";
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
				<div className="grid grid-cols-1 gap-7 md:grid-cols-6">
					<Card
						className="h-[220px] col-span-1 md:col-span-4 "
						heading="Portfolio"
						href="/portfolio"
					>
						<div className="flex flex-col md:flex-row justify-between">
							<div>
								<h4 className="text-xl font-semibold pt-1">Explore my work</h4>
								<p className="text-black/50 text-xs font-medium">
									See how I design, develop, and optimize websites — from idea
									to execution.
								</p>
							</div>
							<div className=" pt-5 md:pt-0 md:p-2 flex justify-between ">
								<CardStack data={data} />
							</div>
						</div>
					</Card>
					<Card
						className="h-[220px] col-span-1 md:col-span-2 "
						heading="Blog"
						href="/blog"
					>
						<h4 className="text-xl font-semibold pt-1">Check out my blog</h4>
						<p className="text-xs font-medium text-black/50 z-0">
							Learn tips and tricks on SEO, Web Design and everything in
							between.
						</p>
						<div className="w-40 mx-auto -z-10">
							<Image src={BlogIcon} alt="Blog Icon" loading="lazy" />
						</div>
					</Card>
				</div>
				<div className="grid grid-cols-1 gap-4 col-span-1 md:grid-cols-6">
					<Card
						className="h-[220px] col-span-1 md:col-span-2 "
						heading="About Me"
						href="/about"
					>
						<h4 className="text-xl font-semibold pt-1"> Learn More About Me</h4>
						<p className="text-xs text-black/50 z-0 capitalize font-medium pt-1">
							Explore my skills, services, and certifications in one place.
						</p>
						<div className="mx-auto w-36">
							<Image src={bookIcon} alt="Book Icon" loading="lazy" />
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
