// app/layout.js

import { Anton, Open_Sans } from 'next/font/google';
import './globals.css'; // Your global styles
import { ReactNode } from 'react';
import Link from 'next/link';

// 1. Define Anton for Display/Highlights
const anton = Anton({
	subsets: ['latin'],
	weight: '400', // Anton only has one weight
	variable: '--font-display', // Custom CSS variable name
});

// 2. Define Open Sans for Body Text
const openSans = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-sans', // Custom CSS variable name
});

export const metadata = {
	title: 'The Croax | Hamburg Punkrock',
	description: 'Laut, direkt und ohne Schnickschack.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="de" className={`${openSans.variable} ${anton.variable}`}>
			<body className="bg-primary text-secondary font-sans min-h-screen flex flex-col">
				{/* Navigation */}
				<nav className="sticky top-0 z-50 bg-darkGray/90 backdrop-blur-sm border-b border-lightGray p-4">
					<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
						<Link href="/" className="text-2xl font-display text-accent uppercase tracking-widest hover:text-white transition">
							The Croax
						</Link>
						<div className="flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-wide">
							<Link href="/about" className="hover:text-accent transition">Über uns</Link>
							<Link href="/music" className="hover:text-accent transition">Musik</Link>
							<Link href="/live" className="hover:text-accent transition">Live</Link>
							<Link href="/press" className="hover:text-accent transition">Presse</Link>
							<a href="https://thecroax.bandcamp.com/merch" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">Shop</a>
							<Link href="/contact" className="hover:text-accent transition">Kontakt</Link>
						</div>
					</div>
				</nav>

				{/* Main Content */}
				<main className="flex-grow">
					{children}
				</main>

				{/* Simple Footer */}
				<footer className="bg-darkGray p-8 text-center text-sm text-gray-500 mt-12">
					<p>&copy; {new Date().getFullYear()} The Croax. Hamburg.</p>
				</footer>
			</body>
		</html>
	);
}
