import React, { useState } from "react";
import { SlideMeIn } from "../components/shared/slideMeIn";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";

export const MainViewContainer = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};
	return (
		<main className="w-full h-screen">
			<Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

			{/* main content */}
			<div
				className={`${isSidebarOpen ? "ml-48" : "ml-16"} pl-2 transition-all duration-300 flex flex-col h-screen`}
			>
				<NavBar />
				<div className="flex-1 py-2 pr-2">{children}</div>
			</div>
		</main>
	);
};
