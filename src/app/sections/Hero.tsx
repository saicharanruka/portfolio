import Image from "next/image";
import React from "react";

import MyFacePic from "@/assets/home/me.jpg";

const Hero = () => {
	return (
		<section className="pt-12">
			<div className="max-w-xl">
				<div className="flex items-center gap-3 ">
					<h1 className="text-5xl font-medium tracking-wide">Hi, I&apos;m</h1>
					<div className="w-auto h-28">
						<Image
							src={MyFacePic}
							alt="My picture"
							width={140}
							height={140}
							className="h-full w-auto rounded-2xl border-[3px] border-white shadow-xl shadow-black/40 grayscale"
						/>
					</div>

					<h1 className="text-5xl font-medium tracking-wide">Sai</h1>
				</div>
				<h1 className="text-3xl pt-5 text-black/30 font-medium">
					I help{" "}
					{
						<span className="text-orange-500">
							professionals and businesses
						</span>
					}{" "}
					grow their presence with {<span className="text-black">fast,</span>}
					{<br />}
				</h1>
				<div className="sm:flex-row md:flex gap-10 items-center ">
					<h1 className="text-3xl font-medium">SEO-optimized websites.</h1>
					<div>
						<div className="mt-2 md:mt-0 flex items-center gap-3 border rounded-full p-3 px-6 md:absolute w-fit">
							<div className="relative flex size-2.5 ">
								<span className="absolute inline-flex h-full w-full animate-ping-large duration-500 rounded-full bg-green-400 opacity-75"></span>
								<span className="relative inline-flex size-2.5 rounded-full bg-green-500"></span>
							</div>
							<p>Open to work</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex-row md:flex gap-12 mt-12 items-center">
				<button className="rounded-full bg-black text-white p-3 px-8 font-semibold shadow-xl">
					Book a call
				</button>
				<h4 className="mt-3 md:mt-0 max-w-sm text-base font-medium">
					Tailored websites with modern design, SEO, and blazing speed — all in
					one package.
				</h4>
			</div>
		</section>
	);
};

export default Hero;
