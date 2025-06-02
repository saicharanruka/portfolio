import Link from "next/link";

import ArrowTR from "@/assets/home/arrow.svg";

const ContactLink = ({ title, href }: { title: string; href: string }) => {
	return (
		<Link target="_blank" href={href} className="flex items-center gap-1">
			<p className="font-medium hover:underline transition">{title}</p>
			<ArrowTR className="mb-2 size-3" />
		</Link>
	);
};

export default ContactLink;
