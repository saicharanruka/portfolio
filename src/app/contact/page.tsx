"use client";

import OptionSelector from "@/components/OptionSelector";

const Contact = () => {
	return (
		<section className="py-16">
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-4xl font-semibold text-center">
					👋 <span className="opacity-60">Say Hi!</span> and tell me {<br />}{" "}
					about you idea
				</h1>
				<p className="text-black/50 font-medium text-base max-w-md text-center pt-3">
					Whether it&apos;s a fresh landing page or a full-blown website,
					I&apos;d love to hear your thoughts.
				</p>
			</div>
			<div className="flex justify-center items-center pt-8">
				<form
					action="https://formspree.io/f/xldbvwnl"
					method="POST"
					className="mx-auto max-w-5xl px-4"
				>
					<div className="flex flex-col">
						<label className="text-base font-semibold p-1">Name*</label>
						<input
							name="query"
							className="w-full max-w-md bg-transparent border-b p-1"
							placeholder="Hello..."
						/>
					</div>

					<div className="flex flex-col mt-4">
						<label className="text-base font-semibold p-1">Email*</label>
						<input
							name="email"
							className="w-full max-w-md bg-transparent border-b p-1"
							placeholder="What can I reply?"
						/>
					</div>

					<OptionSelector
						name="project_type"
						multiple={false}
						className="py-8"
					/>

					<div className="flex flex-col mt-4">
						<label className="text-base font-semibold p-1">Message*</label>
						<textarea
							name="message"
							className="w-full max-w-md bg-transparent border-b p-1"
							placeholder="I want to build..."
						></textarea>
					</div>

					<div className="flex justify-end mt-8">
						<button
							type="submit"
							className="bg-black text-white rounded-full p-2 px-4 font-semibold text-sm"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
