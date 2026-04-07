import type { ReactNode } from "react";
import { SectionHeading } from "./SectionHeading";

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
