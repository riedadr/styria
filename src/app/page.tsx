import Image from "next/image";

export default function Home() {
	return (
		<main className="h-[100svh] overflow-auto bg-controller bg-cover bg-center">
			<section className="flex h-full w-full items-center justify-center backdrop-blur-lg dark:bg-black/50">
				<div className="flex flex-col items-center gap-4">
					<h1 className="text-[4rem] text-white font-bold">Styria</h1>
					<a
						className="rounded bg-discord px-6 py-4"
						href={process.env.NEXT_PUBLIC_INVITE_LINK}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="/images/discord-logo-white.svg"
							width={100}
							height={50}
							alt="join on Discord"
						/>
					</a>
				</div>
			</section>
		</main>
	);
}
