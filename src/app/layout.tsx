import Navbar from "@/components/nav/Navbar";
import "./globals.css";
import localFont from "next/font/local";
import ThemeProvider from "@/contexts/theme";
import AuthProvider from "@/components/AuthProvider";

const rajdhani = localFont({
	src: "../assets/fonts/Rajdhani-Variable.ttf",
	display: "swap",
	variable: "--font-rajdhani",
});

export const metadata = {
	title: "Styria",
	description: "The Styria Discord Server",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`dark ${rajdhani.className}`}>
			<body className="bg-light-base text-dark dark:bg-dark-base dark:text-light">
				<AuthProvider>
					<ThemeProvider>
						<Navbar />
						{children}
					</ThemeProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
