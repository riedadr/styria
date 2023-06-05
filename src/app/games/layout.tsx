import Navbar from "@/components/nav/Navbar";


export const metadata = {
	title: "Styria",
	description: "The Styria Discord Server",
};

export default function GamesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar className="bg-primary text-white"/>
			{children}
		</>
	);
}
