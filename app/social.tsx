import type { JSX } from "react";

type IconProps = { className?: string };
type IconComponent = (props: IconProps) => JSX.Element;

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

const IconInstagram: IconComponent = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		className={className}
	>
		<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85C2.149 3.853 3.664 2.311 6.919 2.163 8.184 2.105 8.564 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.272 2.695.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.623 6.78 6.981 6.98 1.28.058 1.688.072 4.947.072 3.259 0 3.667-.014 4.947-.072 4.354-.2 6.782-2.623 6.982-6.98.058-1.28.072-1.688.072-4.947 0-3.259-.014-3.667-.072-4.947-.2-4.354-2.623-6.782-6.982-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
	</svg>
);

const IconYoutube: IconComponent = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		className={className}
	>
		<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
	</svg>
);

const IconBandcamp: IconComponent = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		className={className}
	>
		<path d="M0 18.75l7.437-13.5h16.563l-7.437 13.5h-16.563z" />
	</svg>
);

const IconFacebook: IconComponent = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		className={className}
	>
		<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
	</svg>
);

const IconEmail: IconComponent = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		className={className}
	>
		<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
	</svg>
);

// Neues Icon für das Pressekit (Download-Symbol)
const IconPressKit: IconComponent = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		className={className}
	>
		<path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
	</svg>
);

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
			download={link.isDownload} // Aktiviert den Download-Dialog
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
