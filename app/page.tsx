import type { JSX } from "react";
import { Shows } from "@/app/shows";
import {Link, SectionHeading} from "@/components";
import {About} from "@/app/about";
import Image from 'next/image'



export default function BandPage(): JSX.Element {
	return (
		<div className="min-h-screen bg-primary selection:bg-accent selection:text-white">
			<main>
				{/* Hero Section */}
				<section className="flex items-center justify-center bg-darkGray relative overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary opacity-50 z-0" />
					<div className="text-center p-4">
						<h1 className="font-display text-6xl leading-none uppercase tracking-tighter">
							<Image
								width={482}
								height={195}
								className="max-w-full"
								src="logo.png"
								alt="the croax"
							/>
						</h1>
						<h2 className="font-sans tracking-[0.5em] text-xs md:text-sm mt-6 text-secondary/60">
							Laut, direkt und ohne Schnickschack
						</h2>
					</div>
				</section>
				<nav className="sticky top-0 w-full z-50 bg-darkGray/80 backdrop-blur-md border-b border-lightGray/30">
					<div className="flex gap-8 place-content-center">
							<Link
								href="#about-us"
								className="px-2 py-6 tracking-widest"
							>
								Über uns
							</Link>
						<Link
							href="#live"
							className="px-2 py-6 tracking-widest"
						>Live</Link>
						<Link
							href="#music"
							className="px-2 py-6 tracking-widest"
						>Music</Link>
					</div>
				</nav>

				<About />
				<Shows />

				{/* Music Section */}
				<section
					id="music"
					className="py-32 px-6 max-w-7xl mx-auto scroll-mt-20"
				>
					<SectionHeading>Music</SectionHeading>
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
						<div className="lg:col-span-7 aspect-video bg-lightGray relative group flex items-center justify-center">
							<Image
								className="absolute inset-0 w-full h-full object-fit"
								alt=""
								src="ep.jpeg"
								width={0}
								height={0}
							/>
						</div>
						<div className="lg:col-span-5 flex flex-col justify-center">
							<h3 className="font-display text-4xl mb-6">Drown in deep, Baby</h3>
							<p className="text-secondary/70 mb-10 text-lg">
								The sophomore album exploring the intersection of silence and
								distortion.
							</p>
							<div className="grid grid-cols-2 gap-4">
								<a className="border border-secondary text-secondary px-6 py-4 font-bold uppercase hover:bg-secondary hover:text-primary transition-colors">
									Spotify
								</a>
								<a className="border border-secondary text-secondary px-6 py-4 font-bold uppercase hover:bg-secondary hover:text-primary transition-colors">
									Apple Music
								</a>
								<a className="border border-secondary text-secondary px-6 py-4 font-bold uppercase hover:bg-secondary hover:text-primary transition-colors">
									Youtube Music
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
