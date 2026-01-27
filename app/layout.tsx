import { Open_Sans, Protest_Riot } from "next/font/google";
import "./globals.css";
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
	title: " The Croax | Punk-Rockband aus Hamburg | Live & Laut",
	description:
		"Authentischer Punk-Rock & Garagerock aus Hamburg. Erlebt den Riot Grrrl Spirit von The Croax live auf der Bühne. Jetzt reinhören und für Gigs buchen!",
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
				<main className="flex-grow">
					<section className="flex items-center justify-center bg-darkGray relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary opacity-50 z-0" />
						<div className="text-center p-4">
							<h1 className="font-display text-6xl leading-none uppercase tracking-tighter">
								{/** biome-ignore lint/performance/noImgElement: <explanation> */}
								<img
									width={482}
									height={195}
									className="max-w-full"
									alt="the croax"
									src="logo-800.webp"
									srcSet="
        logo-480.webp 480w,
        logo-800.webp 800w
    "
									sizes="(max-width: 482px) 100vw, 482px"
								/>
							</h1>
							<h2 className="font-sans tracking-[0.5em] text-xs md:text-sm  text-accent">
								Hamburg Grrrl Punk
							</h2>
							<h3 className="font-sans tracking-[0.5em] text-xs md:text-sm text-secondary/60">
								Laut, direkt und ohne Schnickschack
							</h3>
						</div>
					</section>
					{children}
				</main>

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
