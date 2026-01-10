import { Section } from "@/components";

type Show = {
	date: string;
	venue: string;
	location: string;
	link?: string;
};

const SHOWS: readonly Show[] = [
	{
		date: "29.01.26",
		venue: "Markthalle",
		location: "Hamburg",
		link: "https://markthalle-hamburg.de/konzerte/light-the-cannons-the-croax-kultfaktor/",
	},
	{ date: "21.02.26", venue: "Freiraum", location: "Itzehoe", link: "" },
	{
		date: "28.02.26",
		venue: "Hafenklang",
		location: "Loud Women Fest",
		link: ''
	},
];

export const Shows = () => {
	return (
		<Section variant="dark" id="live" heading="Shows">
			<div className="border-t border-lightGray/30">
				{SHOWS.map((show, i) => (
					<div
						key={i}
						className="py-10 border-b border-lightGray/30 flex flex-col md:flex-row md:items-center justify-between"
					>
						<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12">
							<span className="font-display text-4xl text-accent">
								{show.date}
							</span>
							<div>
								<h3 className="text-2xl font-bold uppercase tracking-tight">
									{show.venue}
								</h3>
								<p className="text-secondary/60 uppercase text-sm tracking-widest">
									{show.location}
								</p>
							</div>
						</div>
						{show.link && <a
							href={show.link}
							className="mt-6 md:mt-0 px-10 py-3 bg-secondary text-primary hover:bg-accent hover:text-white transition-all text-sm font-bold uppercase text-center"
						>
							mehr Infos
						</a>}
					</div>
				))}
			</div>
		</Section>
	);
};
