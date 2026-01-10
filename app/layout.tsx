import { Open_Sans, Protest_Riot } from "next/font/google";
import "./globals.css"; // Your global styles
import type { Metadata } from "next";
import { Link } from "@/components";

const anton = Protest_Riot({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-display",
});

const openSans = Open_Sans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "The Croax | Hamburg Punkrock",
	description: "Laut, direkt und ohne Schnickschack.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentYear = new Date().getFullYear();
	return (
		<html lang="de" className={`${openSans.variable} ${anton.variable}`}>
			<body className="bg-primary text-secondary font-sans min-h-screen flex flex-col">
				<main className="flex-grow">{children}</main>

				<footer className="py-24 px-6 border-t border-lightGray/10 bg-darkGray/50">
					<div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
						<div className="font-display text-5xl md:text-7xl mb-12 select-none tracking-tighter">
							THE CROAX
						</div>

						<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[10px] tracking-[0.3em] text-secondary/40 font-sans font-bold uppercase">
							<Link href="/">Home</Link>
							<span className="hidden md:block w-1 h-1 bg-accent rounded-full" />

								<Link href="/impressum">Impressum</Link>
						</div>
						<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[10px] tracking-[0.3em] text-secondary/40 font-sans font-bold uppercase">
							<span>&copy; {currentYear} Hamburg</span>
						</div>
					</div>
				</footer>
			</body>
		</html>
	);
}
