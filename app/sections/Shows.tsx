import { shows } from "@/data/shows";
import { parseDate, type Show } from "@/types/show";
import { PastShows } from "@/app/sections/PastShows";
import { CTALink } from "@/components/ui/CTALink";
import { Section } from "@/components/ui/Section";

const getNow = () => {
	const fake = process.env.E2E_FAKE_DATE;
	const now = fake ? new Date(fake) : new Date();
	now.setHours(0, 0, 0, 0);
	return now;
};

const splitShows = (shows: typeof import("@/data/shows").shows) => {
	const now = getNow();

	const futureShows: Show[] = [];
	const pastShows: Show[] = [];

	shows.forEach((show) => {
		const showDate = parseDate(show.date);
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
