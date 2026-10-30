"use client";

import { useEffect, useState } from "react";

const photos = [
	{
		name: "_D754275",
		className:
			"col-span-2 row-span-4 -rotate-1 border-accent shadow-[8px_8px_0_#e0e0e0]",
		tape: "-top-3 left-1/3 -rotate-6",
	},
	{
		name: "_D754245",
		className: "col-span-2 row-span-2 rotate-1 shadow-[6px_6px_0_#f536ab]",
	},
	{
		name: "_D753931",
		className: "row-span-2 rotate-2 grayscale hover:grayscale-0",
	},
	{
		name: "_D754106",
		className: "row-span-2 -rotate-2 border-accent",
		tape: "-top-2 -right-4 rotate-12",
	},
	{
		name: "_D753856",
		className: "row-span-2 -rotate-1 shadow-[6px_6px_0_#f536ab]",
	},
	{
		name: "_D754393",
		className: "row-span-2 rotate-3 grayscale hover:grayscale-0",
	},
	{
		name: "_D754559",
		className: "row-span-2 -rotate-3 border-accent",
	},
	{
		name: "_D754583",
		className: "row-span-2 rotate-1 shadow-[6px_6px_0_#f536ab]",
		tape: "-bottom-2 -left-3 -rotate-12",
	},
];

const alt = "The Croax live on stage - Grrrl Punk Band Hamburg";

export const PhotoCollage = () => {
	const [open, setOpen] = useState<number | null>(null);

	useEffect(() => {
		if (open === null) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(null);
		};
		document.addEventListener("keydown", onKeyDown);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.body.style.overflow = "";
		};
	}, [open]);

	return (
		<>
			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 grid-flow-dense auto-rows-[120px] md:auto-rows-[160px] lg:auto-rows-[180px] gap-4 md:gap-5 p-2">
				{photos.map((photo, i) => (
					<button
						key={photo.name}
						type="button"
						onClick={() => setOpen(i)}
						className={`relative border-4 border-secondary bg-darkGray transition duration-300 hover:rotate-0 hover:scale-105 hover:z-10 focus-visible:outline focus-visible:outline-4 focus-visible:outline-accent ${photo.className}`}
					>
						<img
							className="w-full h-full object-cover"
							alt={alt}
							src={`${photo.name}-800.webp`}
							srcSet={`${photo.name}-480.webp 480w, ${photo.name}-800.webp 800w, ${photo.name}-1200.webp 1200w`}
							sizes="(max-width: 767px) 50vw, 33vw"
							loading="lazy"
							decoding="async"
						/>
						{photo.tape && (
							<span
								className={`absolute w-20 h-6 bg-accent/80 shadow ${photo.tape}`}
							/>
						)}
					</button>
				))}
			</div>

			{open !== null && (
				// biome-ignore lint/a11y/useKeyWithClickEvents: Esc handled on document
				<div
					role="dialog"
					aria-modal="true"
					aria-label={alt}
					onClick={() => setOpen(null)}
					className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
				>
					<img
						className="max-h-[90vh] max-w-[90vw] object-contain border-4 border-secondary shadow-[10px_10px_0_#f536ab]"
						alt={alt}
						src={`${photos[open].name}-1200.webp`}
					/>
				</div>
			)}
		</>
	);
};
