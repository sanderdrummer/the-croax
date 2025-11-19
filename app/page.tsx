import Link from 'next/link';

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
			{/* Logo Placeholder - Replace src with your actual logo file */}
			<div className="w-64 h-64 bg-black border-4 border-accent mb-8 flex items-center justify-center">
				<span className="font-display text-4xl text-secondary">LOGO</span>
			</div>

			<h1 className="font-display text-5xl md:text-7xl text-white mb-6 uppercase tracking-tighter">
				Moin!
			</h1>

			<p className="text-xl md:text-2xl max-w-2xl mb-10 font-light">
				Wir sind <span className="text-accent font-bold">The Croax</span> aus Hamburg. <br />
				Laut, direkt und ohne Schnickschack.
			</p>

			<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
				<Link
					href="/music"
					className="bg-accent hover:bg-red-700 text-white font-display uppercase tracking-widest py-3 px-8 text-lg transition clip-path-slant"
				>
					Neuestes Release
				</Link>
				<Link
					href="/live"
					className="border-2 border-secondary hover:border-accent hover:text-accent text-secondary font-display uppercase tracking-widest py-3 px-8 text-lg transition"
				>
					Tourdaten
				</Link>
			</div>
		</div>
	);
}
