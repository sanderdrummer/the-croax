import type { JSX } from "react";
import {
	type IconComponent,
	IconBandcamp,
	IconEmail,
	IconFacebook,
	IconInstagram,
	IconPressKit,
	IconYoutube,
} from "@/components/icons";

type SocialLink = {
	label: string;
	href: string;
	platform: string;
	description: string;
	icon: IconComponent;
	isDownload?: boolean;
};

type SocialTileProps = {
	link: SocialLink;
};

const SOCIAL_LINKS: readonly SocialLink[] = [
	{
		platform: "Instagram",
		label: "@thecroax",
		href: "https://instagram.com/the.croax",
		description: "Photos & Stories",
		icon: IconInstagram,
	},
	{
		platform: "YouTube",
		label: "The Croax Official",
		href: "https://www.youtube.com/channel/UCYTwAPKQvGntp0BYz_uOoZg",
		description: "Music Videos & Live",
		icon: IconYoutube,
	},
	{
		platform: "Bandcamp",
		label: "thecroax.bc.com",
		href: "https://thecroax.bandcamp.com",
		description: "Support & Merch",
		icon: IconBandcamp,
	},
	{
		platform: "Facebook",
		label: "The Croax Hamburg",
		href: "https://www.facebook.com/p/The-Croax-61565584623148/",
		description: "Community & Events",
		icon: IconFacebook,
	},
	{
		platform: "Email",
		label: "booking@thecroax.de",
		href: "mailto:band@thecroax.com",
		description: "Get in Touch",
		icon: IconEmail,
	},
	{
		platform: "Pressekit",
		label: "Download EPK",
		href: "/thecroax_presskit.zip",
		description: "Photos, Bio & TechRider",
		icon: IconPressKit,
		isDownload: true,
	},
] as const;

const SocialTile = ({ link }: SocialTileProps): JSX.Element => {
	const Icon = link.icon;

	return (
		<a
			href={link.href}
			target={link.isDownload ? undefined : "_blank"}
			rel="noopener noreferrer"
			download={link.isDownload}
			className="group relative flex items-start gap-6 p-8 border border-lightGray/20 bg-darkGray/30 hover:bg-accent transition-all duration-500 overflow-hidden"
		>
			<span className="absolute -bottom-4 -right-4 font-display text-6xl opacity-5 uppercase italic group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 select-none">
				{link.platform}
			</span>

			<div className="relative z-10 shrink-0">
				<Icon className="w-10 h-10 text-accent group-hover:text-primary transition-colors duration-500" />
			</div>

			<div className="relative z-10">
				<p className="text-xs tracking-[0.3em] uppercase text-accent group-hover:text-primary font-bold mb-2 transition-colors">
					{link.platform}
				</p>
				<h3 className="font-display text-xl md:text-2xl break-all uppercase text-secondary group-hover:text-white transition-colors">
					{link.label}
				</h3>
				<p
					aria-hidden="true"
					className="mt-2 text-sm text-secondary/60 group-hover:text-primary/80 font-sans transition-colors"
				>
					{link.description}
				</p>
			</div>
		</a>
	);
};

export function SocialSection(): JSX.Element {
	return (
		<section id="connect" className="mt-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{SOCIAL_LINKS.map((link) => (
					<SocialTile key={link.platform} link={link} />
				))}
			</div>
		</section>
	);
}
