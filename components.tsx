import NextLink from "next/link";
import type { ComponentProps, JSX, ReactNode } from "react";

export const P = ({ children }: { children: ReactNode }) => {
	return (
		<p className="space-y-6 font-sans text-secondary/80 leading-relaxed text-lg">
			{children}
		</p>
	);
};

export const SectionHeading = ({
	children,
}: {
	children: string;
}): JSX.Element => (
	<h2 className="font-display italic text-5xl md:text-7xl uppercase mb-12 text-accent">
		{children}
	</h2>
);

export const Section = ({
	children,
	heading,
	id,
	variant,
}: {
	children: ReactNode;
	heading: string;
	id: string;
	variant?: "dark";
}) => {
	return (
		<section
			id={id}
			className={`py-32 px-6 mx-auto scroll-mt-20 ${variant === "dark" ? "bg-darkGray/50" : ""}`}
		>
			<div className={"max-w-7xl mx-auto"}>
				<SectionHeading>{heading}</SectionHeading>
				{children}
			</div>
		</section>
	);
};

export const Link = ({
	href,
	children,
	className,
}: {
	href: string;
	children: string;
	className?: string;
}) => (
	<NextLink
		href={href}
		className={`hover:text-accent transition-colors duration-300 uppercase ${className ?? ""}`}
	>
		{children}
	</NextLink>
);

export const CTALink = ({ className = "", ...props }: ComponentProps<"a">) => {
	return (
		<a
			className={
				"px-10 py-3 bg-secondary text-primary hover:bg-accent hover:text-white transition-all text-sm font-bold uppercase text-center" +
				className
			}
			{...props}
		/>
	);
};
