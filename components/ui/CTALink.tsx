import type { ComponentProps } from "react";

export const CTALink = ({ className = "", ...props }: ComponentProps<"a">) => {
	return (
		<a
			className={
				"inline-flex items-center justify-center px-8 py-3 " +
				"border-2 border-accent text-accent bg-transparent " +
				"font-bold uppercase tracking-widest text-sm " +
				"skew-x-[-6deg] " +
				"transition-all duration-200 " +
				"hover:bg-accent hover:text-primary hover:shadow-[0_0_24px_rgba(245,54,171,0.55)] " +
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary " +
				"active:scale-95 " +
				className
			}
			{...props}
		/>
	);
};
