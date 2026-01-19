import { PastShows, parseDate, type Show } from "@/app/past-shows";
import { CTALink, Section } from "@/components";

const shows: readonly Show[] = [
	{ date: "21.02.2026", venue: "Freiraum", location: "Itzehoe", link: "" },
	{
		date: "28.02.2026",
		venue: "Hafenklang",
		location: "Loud Women Fest",
		link: "",
	},
	{
		date: "29.01.2026",
		venue: "Markthalle",
		location: "Hamburg",
		link: "https://markthalle-hamburg.de/konzerte/light-the-cannons-the-croax-kultfaktor/",
	},
	{
		date: "23.04.2023",
		venue: "MarX (mit Frau Paul und Belitzki)",
		location: "Hamburg",
	},
	{
		date: "15.10.2023",
		venue: "MS Altenwerder (privat)",
		location: "Hamburg-Finkenwerder",
	},
	{
		date: "25.01.2024",
		venue: "Häkken (Solirock)",
		location: "Hamburg",
	},
	{
		date: "16.02.2024",
		venue: "Klangbar (mit FUXX und Riot Teddy)",
		location: "Hamburg-Bergedorf",
	},
	{
		date: "16.03.2024",
		venue:
			"Seker Huus (mit Inner Conflict, Fornhorst, Kommando Rostkehlen und Die Fliesenleger)",
		location: "Uplengen",
	},
	{
		date: "05.03.2024",
		venue: "Soundpresse im Gängeviertel",
		location: "Hamburg",
	},
	{
		date: "12.04.2024",
		venue:
			"Pro Asyl Soli-Konzert, Klub.K (mit Der feine Herr Soundso und Sempf)",
		location: "Hamburg",
	},
	{
		date: "07.09.2024",
		venue: "Stadt.Land.Punk 2.0",
		location: "Hamburg-Ochsenwerder",
	},
	{
		date: "16.11.2024",
		venue: "Freiraum (mit Tischlerei Lischitzki und Der feine Herr Soundso)",
		location: "Itzehoe",
	},
	{
		date: "06.06.2025",
		venue: "Logo (mit Blomenkamp und Swamidemy)",
		location: "Hamburg",
	},
	{
		date: "19.06.2025",
		venue: "Kreiselkonzert an der Sternbrücke (mit Bullshit Boy)",
		location: "Hamburg",
	},
	{
		date: "23.08.2025",
		venue: "Wurmloch-Festival",
		location: "Krumstedt/SH",
	},
	{
		date: "30.08.2025",
		venue: "Sommerfest SZ Norderstedt",
		location: "Norderstedt",
	},
	{
		date: "06.09.2025",
		venue: "Rock gegen Rechts",
		location: "Kellinghusen",
	},
	{
		date: "31.10.2025",
		venue:
			"Druckerei im Gängeviertel (mit Light the Cannons und Tender Loving Medication)",
		location: "Hamburg",
	},
];

const splitShows = (shows: readonly Show[]) => {
	const now = new Date();
	now.setHours(0, 0, 0, 0);

	const futureShows: Show[] = [];
	const pastShows: Show[] = [];

	shows.forEach((show) => {
		const showDate = parseDate(show.date);
		console.log(showDate, now, showDate >= now);
		if (showDate >= now) {
			futureShows.push(show);
		} else {
			pastShows.push(show);
		}
	});

	return { futureShows, pastShows };
};

export const Shows = () => {
	const { futureShows, pastShows } = splitShows(shows);
	const sortedFutureShows = [...futureShows].sort(
		(a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime(),
	);
	return (
		<Section variant="dark" id="live" heading="Live">
			<div className="border-t border-lightGray/30">
				{sortedFutureShows.map((show) => (
					<div
						key={show.date}
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
						{show.link && (
							<CTALink href={show.link} className="mt-6 md:mt-0">
								mehr Infos
							</CTALink>
						)}
					</div>
				))}
			</div>
			<PastShows shows={pastShows} />
		</Section>
	);
};
