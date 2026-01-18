export type Show = {
	date: string;
	venue: string;
	location: string;
	link?: string;
};
type PastShowsProps = {
	shows: readonly Show[];
};

export const parseDate = (dateStr: string): Date => {
	const [day, month, year] = dateStr.split(".").map(Number);
	return new Date(year, month - 1, day);
};

export function PastShows({ shows }: PastShowsProps) {
	const sortedPastShows = [...shows].sort(
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
