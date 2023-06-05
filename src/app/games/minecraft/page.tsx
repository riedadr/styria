import ServerLink from "./ServerLink";

export default function MinecraftPage() {
	return (
		<main className="absolute top-16 w-full">
			<div className="h-36 w-full bg-minecraft bg-cover bg-center">
				<div className="flex h-full w-full items-center justify-center backdrop-blur-sm">
					<h1 className="text-5xl font-bold text-light">Minecraft</h1>
				</div>
			</div>
			<section>
				<ServerLink url="mc.styria.app" />
			</section>
		</main>
	);
}
