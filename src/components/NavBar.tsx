import Logo from "@/assets/home/logo.svg";
import Link from "next/link";
// import NavbarLogo from "@/assets/home/Navbar.svg";

import { NavLinks } from "@/constants/data";

const NavBar = () => {
	return (
		<div className="lg:sticky ">
			<div className="flex justify-between border rounded-full p-3 items-center">
				<div className="flex items-center gap-3">
					<div className="flex items-center justify-start">
						<Logo />
						<div className="rounded-full size-2 mt-4 bg-orange-500"></div>
					</div>

					<Link href="/">
						<h4 className="font-normal text-lg">saicharanruka@gmail.com</h4>
					</Link>
				</div>
				<div className="flex justify-center items-center gap-8">
					{NavLinks.map((link) => (
						<a
							href={link.href}
							key={link.title}
							className="text-sm font-normal hover:font-medium hover:scale-105 hover:underline transition duration-300"
						>
							{link.title}
						</a>
					))}
				</div>
				<Link href="/contact">
					<button className="rounded-full bg-black text-white p-2 px-5 font-semibold text-sm">
						Contact
					</button>
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
