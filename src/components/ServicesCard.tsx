import { ReactElement } from "react";

interface ServiceCardData {
	index: number;
	title: string;
	body: string;
	icon: ReactElement<SVGSVGElement>;
}

const ServicesCard = ({ index, title, body, icon }: ServiceCardData) => {
	return (
		<div className="flex flex-col gap-1 hover:scale-105 bg-transparent border-white border-2 rounded-3xl p-3 shadow-xl hover:shadow-2xl transition">
			<div>{icon}</div>
			<div>
				<h4 className="text-base -mb-1">0{index}</h4>
				<h4 className="text-sm font-medium ">{title}</h4>
				<p className="text-sm py-2 text-black/70">{body}</p>
			</div>
		</div>
	);
};

export default ServicesCard;
