"use client";
import { useTheme } from "@/contexts/theme";
import { IconMoon, IconSun } from "@tabler/icons-react";
import UserMenu from "./UserMenu";
import Sidebar from "./Sidebar";
import { twMerge } from "tailwind-merge";

export default function Navbar({ className }: { className?: string }) {
	return (
		<header
			className={twMerge(
				"absolute z-30 flex h-16 w-full justify-between gap-8 p-4 text-white",
				className
			)}
		>
			<Sidebar />
			<div className="flex items-center gap-4">
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
			{theme === "dark" ? <IconMoon size={32} /> : <IconSun size={32} />}
		</button>
	);
}
