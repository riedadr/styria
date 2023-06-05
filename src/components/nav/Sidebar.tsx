import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const games = [
	{
		name: "Minecraft",
		href: "/games/minecraft",
	},
	{
		name: "Overwatch 2",
		href: "/games/overwatch",
	},
	{
		name: "Rainbow Six Siege",
		href: "/games/rainbow6",
	},
];

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);
	const closeSidebar = () => setIsOpen(false);

	return (
		<>
			<button onClick={() => setIsOpen(true)} title="open menu">
				<IconMenu2 size={32} />
			</button>
			<div
				id="sidebar-overlay"
				className={`fixed bottom-0 left-0 right-0 top-0 z-20 h-full backdrop-blur-sm ${
					!isOpen && "hidden"
				}`}
				onClick={() => setIsOpen(false)}
			></div>
			<aside
				className={`fixed left-0 top-0 z-30 h-full w-full bg-light p-4 pl-0 text-dark dark:bg-dark dark:text-light sm:w-80 ${
					isOpen ? "-translate-x-0" : "-translate-x-full"
				} duration-200 ease-in-out`}
			>
				<button
					className="flex w-full justify-end hover:text-error"
					onClick={() => setIsOpen(false)}
				>
					<IconX size={32} />
				</button>

				<ul>
					<li>
						<NavItem href="/" closeSidebar={closeSidebar}>
							<h2 className="text-xl font-semibold">Start</h2>
						</NavItem>
					</li>

					<li>
						<h2 className="mt-4 mb-2 border-l-2 border-transparent pl-4 text-xl font-semibold">
							Games
						</h2>
						<ul>
							{games.map((game) => (
								<li key={game.name}>
									<NavItem
										className="pl-8"
										href={game.href}
										closeSidebar={closeSidebar}
									>
										{game.name}
									</NavItem>
								</li>
							))}
						</ul>
					</li>
				</ul>
			</aside>
		</>
	);
}

function NavItem({
	children,
	href,
	closeSidebar,
	className,
	...props
}: {
	children: React.ReactNode;
	href: string;
	closeSidebar: VoidFunction;
	className?: string;
}) {
	const pathname = usePathname();
	const active = pathname === href;
	return (
		<Link
			className={twMerge(
				`flex w-full gap-4 border-l-2 py-1 pl-4 duration-200 ease-in-out hover:border-secondary hover:text-secondary ${
					active
						? "border-primary text-primary"
						: "border-transparent"
				}`,
				className
			)}
			href={href}
			onClick={closeSidebar}
			{...props}
		>
			{children}
		</Link>
	);
}
