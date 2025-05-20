import Arrow from "@/assets/home/arrow.svg";

const CardHeader = ({ heading, href }: { heading: string; href: string }) => {
	return (
		<div className="flex justify-between pb-1">
			<p className="text-xs font-semibold rounded-full capitalize bg-white px-3 p-2">
				{heading}
			</p>
			<a href={href}>
				<div className="bg-white size-7 rounded-full flex items-center justify-center">
					<Arrow className="size-3" />
				</div>
			</a>
		</div>
	);
};

export default CardHeader;
