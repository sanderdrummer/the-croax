import type { ReactNode } from "react";

export const P = ({ children }: { children: ReactNode }) => {
	return (
		<p className="font-sans text-secondary/80 leading-relaxed text-lg">
			{children}
		</p>
	);
};
