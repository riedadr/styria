"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Menu } from "@headlessui/react";
import { IconUserCircle, IconBrandDiscordFilled } from "@tabler/icons-react";
import { type Session } from "next-auth";
import Image from "next/image";

export default function UserMenu() {
	const { data: session, status } = useSession();
	console.log(session, status);

	return (
		<>
			{status === "loading" ? (
				<div className="h-8 w-8 animate-pulse rounded-full bg-white/50"></div>
			) : (
				<Menu as="div" className="relative inline-block text-left">
					<div className="flex items-center">
						<Menu.Button>
							{status === "unauthenticated" ? (
								<IconUserCircle size={32} />
							) : (
								<Image
									className="rounded-full"
									src={session?.user?.image!}
									height={32}
									width={32}
									alt={session?.user?.name!}
								/>
							)}
						</Menu.Button>
					</div>
					<Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded bg-slate-100 p-1 text-left text-slate-950 dark:bg-slate-800 dark:text-slate-50">
						{status === "unauthenticated" ? (
							<UserMenuUnauthed />
						) : (
							<UserMenuAuthed session={session!} />
						)}
					</Menu.Items>
				</Menu>
			)}
		</>
	);
}

function UserMenuUnauthed() {
	return (
		<Menu.Item>
			<button
				className="flex items-center w-full gap-4 rounded bg-discord p-2 text-white"
				onClick={() => signIn("discord")}
			>
				<Image
					src="/images/discord-mark-white.svg"
					height={24}
					width={24}
					alt="discord"
				/>
				Sign In
			</button>
		</Menu.Item>
	);
}
function UserMenuAuthed({ session }: { session: Session }) {
	const { user } = session;
	return (
		<Menu.Item>
			<button
				className="w-full rounded p-2 text-error hover:bg-slate-200 dark:hover:bg-slate-700"
				onClick={() => signOut()}
			>
				Sign Out
			</button>
		</Menu.Item>
	);
}
