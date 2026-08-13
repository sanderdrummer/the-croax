export const BandChips = ({ bands }: { bands?: readonly string[] }) => {
	if (!bands?.length) return null;
	return (
		<div className="mt-3 flex flex-wrap gap-2">
			{bands.map((band) => (
				<span
					key={band}
					className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs uppercase tracking-wide text-secondary/70"
				>
					{band}
				</span>
			))}
		</div>
	);
};
