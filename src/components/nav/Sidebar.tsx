import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button onClick={() => setIsOpen(true)}>
				<IconMenu2 size={32} />
			</button>
			<aside
				className={`fixed left-0 top-0 h-full w-80 p-4 bg-slate-100 text-slate-950 dark:bg-slate-900 dark:text-slate-50 ${
					isOpen ? "-translate-x-0" : "-translate-x-full"
				} duration-200 ease-in-out`}
			>
				<div className="h-full rounded ">
						<button className="flex justify-end w-full" onClick={() => setIsOpen(false)}>
							<IconX size={32} />
						</button>
					<h2>Games</h2>
					<ul>
						<li>Rainbow Six Siege</li>
						<li>Minecraft</li>
					</ul>
				</div>
			</aside>
		</>
	);
}
