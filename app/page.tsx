import type { JSX } from "react";
import { NavBar } from "@/app/sections/NavBar";
import { About } from "@/app/sections/About";
import { Shows } from "@/app/sections/Shows";
import { Music } from "@/app/sections/Music";

export default function BandPage(): JSX.Element {
	return (
		<div className="min-h-screen bg-primary selection:bg-accent selection:text-white">
			<main>
				<NavBar />
				<About />
				<Shows />
				<Music />
			</main>
		</div>
	);
}
