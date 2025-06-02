import Head from "next/head";
import Image from "next/image";

import myPic from "@/assets/me-full.webp";
import Link from "next/link";
import ServicesCard from "@/components/ServicesCard";

import WebsiteLogo from "@/assets/about/website.svg";
import CMSLogo from "@/assets/about/cms.svg";
import SEOLogo from "@/assets/about/seo.svg";
import FixLogo from "@/assets/about/fix.svg";
import { ReactElement } from "react";
import ContactLink from "./ContactLink";

type Service = {
	title: string;
	body: string;
	icon: ReactElement<SVGSVGElement>;
};

const services: Service[] = [
	{
		title: "Custom Website Development",
		body: "I design and develop fast, responsive websites and full-stack applications tailored to your business needs — from landing pages to complex web apps.",
		icon: <WebsiteLogo />,
	},
	{
		title: "CMS & E-commerce Solutions",
		body: "I integrate Sanity CMS for dynamic content management and build high-converting online stores using platforms like Shopify and custom frontend solutions.",
		icon: <CMSLogo />,
	},
	{
		title: "SEO & Performance Optimization",
		body: "I optimize your site for speed, accessibility, and search engines — helping you rank higher and attract more organic traffic that converts.",
		icon: <SEOLogo />,
	},
	{
		title: "Website Maintenance & Support",
		body: "I offer ongoing support, updates, and performance monitoring to keep your site secure, up-to-date, and running smoothly post-launch.",
		icon: <FixLogo />,
	},
];

const ContactLinks = [
	{
		title: "Github",
		href: "https://github.com/saicharanruka",
	},
	{
		title: "Discord",
		href: " https://discordapp.com/users/slayer0x10",
	},
	{
		title: "Upwork",
		href: "https://www.upwork.com/freelancers/~01267a5aa7d7d45681",
	},
];

const About = () => {
	return (
		<>
			<Head>
				<title>
					About Me | Ruka Sai Charan – Web Developer & SEO Specialist
				</title>
				<meta
					name="description"
					content="Learn about my services, certifications, and how I help businesses grow online with custom websites, CMS, SEO, and CRM integration."
				/>
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://saicharanruka.me/about" />
				<meta property="og:title" content="About Me | Ruka Sai Charan" />
				{/* <metaimport SvgIcon from "@/assets/about/icon.svg";
					property="og:description"
					content="Custom websites, SEO, CRM tools, and more to help your business thrive online."
				/> */}
				<meta property="og:url" content="https://saicharanruka.me/about" />
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="https://yourdomain.com/og-image.jpg"
				/>
			</Head>
			<section className="pt-2">
				<div className="flex flex-col-reverse items-center md:flex-row justify-around px-10">
					<div className="flex flex-col gap-5 max-w-lg pt-4 text-center md:text-start md:pt-0">
						<h1 className="text-4xl font-medium">
							Web Developer & UI/UX Designer
						</h1>
						<p className="text-base text-black/70 leading-tight">
							I&apos;m Ruka Sai Charan, a full-stack developer and designer who
							builds fast, responsive, SEO-optimized websites using Next.js and
							Tailwind CSS and other custom frontend solutions.
						</p>
						<div className="flex gap-6 items-center">
							<Link
								href="/projects"
								className="relative inline-block group w-28 h-28"
							>
								{/* SVG Dashed Circle */}
								<svg
									className="absolute top-0 left-0 w-full h-full animate-spin-fast transition"
									viewBox="0 0 100 100"
								>
									<circle
										cx="50"
										cy="50"
										r="45"
										fill="none"
										stroke="white"
										strokeWidth="3"
										strokeDasharray="30 25" // dash length 30, gap 25 = ~5-6 dashes
										strokeLinecap="round"
									/>
								</svg>

								{/* Centered Button Text */}
								<p className="relative -z-10 flex items-center justify-center w-full h-full bg-black text-white uppercase text-center font-medium rounded-full">
									View Projects
								</p>
							</Link>
							<div className="flex gap-5">
								{ContactLinks.map((link) => (
									<ContactLink
										key={link.title}
										title={link.title}
										href={link.href}
									/>
								))}
							</div>
						</div>
					</div>
					<div>
						<Image
							src={myPic}
							alt="My picture"
							width={250}
							height={250}
							className="rounded-2xl"
							loading="lazy"
						/>
					</div>
				</div>
				<div className="pt-8 md:pt-0 grid grid-cols-1 md:grid-cols-6 px-5 gap-10">
					<div className="col-span-1 md:col-span-4">
						<h2 className="text-2xl font-medium">Services</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 pt-5 gap-5">
							{services.map((card, idx) => (
								<ServicesCard
									key={card.title}
									index={idx + 1}
									title={card.title}
									body={card.body}
									icon={card.icon}
								/>
							))}
						</div>
					</div>
					<div className="col-span-1 md:col-span-2 pt-5 ">
						<h2 className="text-2xl font-medium">Certifications</h2>
						<div className="pb-16 md:pb-0 pt-5">
							<ContactLink
								title="CS50: Harvard’s Introduction to Computer Science"
								href="https://certificates.cs50.io/1de193b3-65ac-4ab2-9c7c-dbbf3664a1fa.pdf?size=letter"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;

{
	/* <Link href="/portfolio">
<div className="w-28 h-28 border-4 border-dashed border-[#AFAFAF] rounded-full bg-black text-white flex justify-center items-center">
	<h4 className="uppercase text-center font-medium">
		View Projects
	</h4>
	<span className="absolute inset-0 rounded-full border-2 border-dashed border-white animate-slow-spin group-hover:animate-fast-spin pointer-events-none" />
</div>
</Link> */
}

{
	/* <Link href="/projects" className="relative inline-block group">
<span className="relative z-10 px-6 py-3 text-white font-bold bg-black rounded-full">
	View Projects
</span>
<span
	className="w-28 h-28 absolute inset-0 rounded-full border-2 border-dashed border-white
animate-spin-slow group-hover:animate-spin-fast pointer-events-none"
	aria-hidden="true"
/>
</Link> */
}
