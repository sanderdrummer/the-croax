import type { JSX } from "react";

export const SectionHeading = ({
	children,
}: {
	children: string;
}): JSX.Element => (
	<h2 className="font-display italic text-5xl md:text-7xl uppercase mb-12 text-accent">
		{children}
	</h2>
);
