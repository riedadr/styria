"use client";
import { useTheme } from "@/app/contexts/theme";
import { IconMenu2, IconMoon, IconSun } from "@tabler/icons-react";
import UserMenu from "./UserMenu";
import Sidebar from "./Sidebar";

export default function Navbar() {
	return (
		<header className="absolute z-30 flex w-full justify-between gap-8 p-4 text-white">
			<Sidebar />
			<div className="flex gap-4 items-center">
				<ThemeButton />
				<UserMenu />
			</div>
		</header>
	);
}

function ThemeButton() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button onClick={toggleTheme}>
			{theme === "dark" ? <IconMoon size={32}/> : <IconSun size={32}/>}
		</button>
	);
}
