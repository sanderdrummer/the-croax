import type { Show } from "@/app/shows";

const pastShows: Show[] = [
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
type PastShowsProps = {
	shows: readonly Show[];
};

const parseDate = (dateStr: string): Date => {
	const [day, month, year] = dateStr.split(".").map(Number);
	return new Date(year, month - 1, day);
};

export function PastShows() {
	const sortedPastShows = [...pastShows].sort(
		(a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime(),
	);

	return (
		<>
			<h3 className="mt-20 font-display text-3xl md:text-4xl uppercase mb-8 text-secondary/30 italic">
				Past <span className="text-lightGray">Appearances</span>
			</h3>

			<div className="grid grid-cols-1 gap-1">
				{sortedPastShows.map((show, index) => (
					<div
						key={`${show.date}-${index}`}
						className="grid grid-cols-1 md:grid-cols-[140px_1fr_200px] items-baseline py-4 border-b border-lightGray/5 "
					>
						<span className="text-s tracking-tighter text-accent/80 transition-colors">
							{show.date}
						</span>

						<span className="text-secondary/80 transition-colors font-sans text-sm md:text-base pr-4">
							{show.venue}
						</span>

						<span className="text-lightGray transition-colors font-display uppercase text-s tracking-widest md:text-right">
							{show.location}
						</span>
					</div>
				))}
			</div>

			<p className="mt-8 uppercase tracking-[0.5em] text-lightGray/60 text-center">
				History in the making
			</p>
		</>
	);
}
