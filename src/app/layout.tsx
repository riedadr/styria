import Navbar from "@/components/nav/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import ThemeProvider from "./contexts/theme";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

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
		<html lang="en">
			<body>
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
