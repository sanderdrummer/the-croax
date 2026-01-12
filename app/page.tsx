import Image from "next/image";
import type { JSX } from "react";
import { About } from "@/app/about";
import { Shows } from "@/app/shows";
import { CTALink, Link, SectionHeading } from "@/components";

export default function BandPage(): JSX.Element {
	return (
		<div className="min-h-screen bg-primary selection:bg-accent selection:text-white">
			<main>
				{/* Hero Section */}
				<nav className="sticky top-0 w-full z-50 bg-darkGray/80 backdrop-blur-md border-b border-lightGray/30">
					<div className="flex gap-8 place-content-center">
						<Link href="#about-us" className="px-2 py-6 tracking-widest">
							Über uns
						</Link>
						<Link href="#live" className="px-2 py-6 tracking-widest">
							Live
						</Link>
						<Link href="#music" className="px-2 py-6 tracking-widest">
							Music
						</Link>
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
							<h3 className="font-display text-4xl mb-6">
								Drown in deep, Baby
							</h3>
							<p className="text-secondary/70 mb-10 text-lg">
								The sophomore album exploring the intersection of silence and
								distortion.
							</p>
							<div className="grid grid-cols-2 gap-4">
								<CTALink href="https://open.spotify.com/artist/36a3EwllvuaKLwOZfYE6Km">
									Spotify
								</CTALink>
								<CTALink href="https://music.apple.com/us/artist/the-croax/1778246435">
									Apple Music
								</CTALink>
								<CTALink href="https://music.youtube.com/channel/UCYTwAPKQvGntp0BYz_uOoZg?si=eIIC-OlhJpL5xtfC">
									Youtube Music
								</CTALink>
								<CTALink href="https://thecroax.bandcamp.com/">
									Bandcamp
								</CTALink>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
