const Contact = () => {
	return (
		<section className="pt-16">
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-4xl font-semibold text-center">
					👋 <span className="text-orange-500">Say Hi!</span> and tell me{" "}
					{<br />} about you idea
				</h1>
				<p className="text-black/50 font-medium text-base max-w-md text-center pt-3">
					Whether it&apos;s a fresh landing page or a full-blown website,
					I&apos;d love to hear your thoughts.
				</p>
			</div>
			<div className="flex justify-center items-center pt-8"></div>
		</section>
	);
};

export default Contact;
