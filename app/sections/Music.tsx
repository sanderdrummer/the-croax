import { CTALink } from "@/components/ui/CTALink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const Music = () => (
	<section
		id="musik"
		className="py-32 px-6 max-w-7xl mx-auto scroll-mt-20"
	>
		<SectionHeading>Musik</SectionHeading>
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
			<div className="lg:col-span-7 aspect-video bg-lightGray relative group flex items-center justify-center">
				<img
					alt="Album art for Drown in deep, Baby"
					src="cover-800.webp"
					srcSet="cover-480.webp 480w, cover-800.webp 800w, cover-1200.webp 1200w"
					sizes="(max-width: 1023px) 100vw, (max-width: 1280px) 58vw, 700px"
					loading="lazy"
					decoding="async"
				/>
			</div>
			<div className="lg:col-span-5 flex flex-col justify-center">
				<h3 className="font-display text-4xl mb-6">
					Drown in deep, Baby
				</h3>
				<p className="text-secondary/70 mb-10 text-lg">Jetzt verfügbar</p>
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
					<CTALink href="https://www.deezer.com/us/artist/288633311">
						Deezer
					</CTALink>
					<CTALink href="https://thecroax.bandcamp.com/">
						Bandcamp
					</CTALink>
				</div>
			</div>
		</div>
	</section>
);
