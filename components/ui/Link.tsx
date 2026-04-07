import NextLink from "next/link";
import type { ReactNode } from "react";

export const Link = ({
	href,
	children,
	className,
}: {
	href: string;
	children: ReactNode;
	className?: string;
}) => (
	<NextLink
		href={href}
		className={`hover:text-accent transition-colors duration-300 uppercase ${className ?? ""}`}
	>
		{children}
	</NextLink>
);
