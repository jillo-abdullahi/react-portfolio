import { act, useState } from "react";
import ProfileImage from "../static/images/me3Cropped.png";
import { HugeiconsSquareArrowLeftDouble } from "./icons/HugeiconsSquareArrowLeftDouble";
import { HugeiconsUserSquare } from "./icons/HugeiconsUserSquare";
import { HugeiconsStackStar } from "./icons/HugeiconsStackStar";
import { HugeiconsWebProgramming } from "./icons/HugeiconsWebProgramming";
import { HugeiconsContactBook } from "./icons/HugeiconsContactBook";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
	const linkIconClasses =
		"w-5 text-orange/80 hover:text-orange transition-all duration-300 m-0 flex-shrink-0 cursor-pointer";
	const navigation = [
		{
			name: "About",
			href: "#about",
			icon: <HugeiconsUserSquare className={linkIconClasses} />,
			active: false,
		},
		{
			name: "Stacks",
			href: "#stacks",
			icon: <HugeiconsStackStar className={linkIconClasses} />,
			active: false,
		},
		{
			name: "Projects",
			href: "#projects",
			icon: <HugeiconsWebProgramming className={linkIconClasses} />,
			active: false,
		},
		{
			name: "Contact",
			href: "#contact",
			icon: <HugeiconsContactBook className={linkIconClasses} />,
			active: false,
		},
	];

	const [navLinks, setNavLinks] = useState(navigation);

	const handleActiveLink = (index) => {
		const newLinks = navLinks.map((link, i) => {
			if (i === index) {
				link.active = true;
			} else {
				link.active = false;
			}
			return link;
		});
		setNavLinks(newLinks);
	};

	return (
		<div
			className={`fixed top-0 bottom-0 w-10 h-full max-h-screen px-0 py-2 pl-2 ${isSidebarOpen ? "w-48" : "w-16"} transition-all duration-300`}
		>
			<div className="z-100 rounded-2xl h-full w-full p-2 flex flex-col justify-between glassy">
				{/* profile image and toggle button */}
				<div
					className={`flex items-center ${isSidebarOpen ? "justify-between" : "justify-center"} p-2 glassy rounded-xl`}
				>
					<div
						className={`flex-shrink-0 rounded-full border-2 border-orange overflow-hidden transition-all duration-300 ${isSidebarOpen ? "w-10 h-10" : "w-0 h-0 border-none"}`}
					>
						<img src={ProfileImage} alt="profile" className="w-full h-full" />
					</div>

					<HugeiconsSquareArrowLeftDouble
						type="button"
						onClick={toggleSidebar}
						className={`w-10 text-orange/80 hover:text-orange transition-all duration-300 m-0 flex-shrink-0 ${isSidebarOpen ? "" : "rotate-180"} cursor-pointer`}
					/>
				</div>

				{/* Links  */}
				<div className="flex flex-col space-y-2 mt-4 overflow-hidden">
					{navigation.map(({ name, href, icon, active }, index) => (
						<a
							key={name}
							href={href}
							className="flex items-center justify-start space-x-1 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg px-3 py-2 text-base font-medium text-lg"
							onClick={() => handleActiveLink(index)}
						>
							{icon ?? null}
							<span>{name}</span>
						</a>
					))}
				</div>

				{/* contacts */}
				<div className="flex flex-col space-y-2 rounded-xl overflow-hidden">
					<div className="flex flex-col space-y-2">
						<span className="text-gray-300 text-lg font-medium">Email</span>
						<span className="text-gray-300 text-lg font-medium">
							jayloabdullahi@gmail.com
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
