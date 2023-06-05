"use client";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useState } from "react";

export default function ServerLink({ url }: { url: string }) {
	const [copyBtnIcon, setCopyBtnIcon] = useState(<IconCopy />);

	const copy2clipboard = () => {
		navigator.clipboard
			.writeText(url)
			.then(() => {
				setCopyBtnIcon(<IconCheck className="text-success" />);
				setTimeout(() => {
					setCopyBtnIcon(<IconCopy />);
				}, 3000);
			})
			.catch((err) => {
				window.alert("server address could not be copied to clipboard");
				console.error(err);
			});
	};
	return (
		<div className="h-24 w-full p-4">
			<div className="flex h-full w-full items-center justify-center rounded bg-light drop-shadow dark:bg-dark">
				<code className="text-lg">{url}</code>
				<button
					className="absolute right-4 p-4"
					onClick={copy2clipboard}
				>
					{copyBtnIcon}
				</button>
			</div>
		</div>
	);
}
