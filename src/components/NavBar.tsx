import Logo from "@/assets/home/logo.svg";
import NavbarLogo from "@/assets/home/Navbar.svg";

const NavBar = () => {
	return (
		<div className="lg:sticky ">
			<div className="flex justify-between">
				<div className="flex items-center gap-3">
					<div className="flex items-center justify-start">
						<Logo />
						<div className="rounded-full size-2 mt-4 bg-orange-500"></div>
					</div>

					<a href="">
						<h4 className="font-normal text-lg">saicharanruka@gmail.com</h4>
					</a>
				</div>
				<NavbarLogo />
			</div>
		</div>
	);
};

export default NavBar;
