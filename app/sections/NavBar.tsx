import { Link } from "@/components/ui/Link";

export const NavBar = () => (
	<nav className="sticky top-0 w-full z-50 bg-darkGray/80 backdrop-blur-md border-b border-lightGray/30">
		<div className="flex gap-8 place-content-center">
			<Link href="#über-uns" className="px-2 py-6 tracking-widest">
				Über uns
			</Link>
			<Link href="#live" className="px-2 py-6 tracking-widest">
				Live
			</Link>
			<Link href="#musik" className="px-2 py-6 tracking-widest">
				Musik
			</Link>
		</div>
	</nav>
);
