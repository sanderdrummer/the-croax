import type { JSX } from "react";
// Assuming these are your local component imports
import { SocialSection } from "@/app/social";
import { Link, P, Section } from "@/components";

export const About = (): JSX.Element => {
	return (
		<Section id="about-us" heading="Über uns">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
				<img
					className="inset-0 w-full h-full object-cover "
					alt="The Croax performing live on stage - Grrrl Punk Band Hamburg"
					src="image00001-800.webp"
					srcSet="
                image00001-480.webp 480w,
                image00001-800.webp 800w,
                image00001-1200.webp 1200w
              "
					sizes="(max-width: 767px) 100vw, 50vw"
				/>

				<div className="flex flex-col gap-8 relative">
					{/* Decorative Background Element */}
					<div className="absolute -top-10 -left-10 text-9xl font-display opacity-[0.03] select-none pointer-events-none">
						PUNK
					</div>

					<div className="space-y-6">
						<P>
							Wir sind{" "}
							<strong className="text-accent uppercase tracking-tighter text-xl">
								The Croax
							</strong>
							, eine Grrrl-Punk Band aus Hamburg. Gegründet im zweiten
							Pandemie-Sommer aus Langeweile, Frust und der puren Lust, endlich
							wieder Krach zu machen. Unser Konzept ist simpel: Viel Energie,
							roher Sound und keine Kompromisse.
						</P>

						{/* Subheading styled as a "Duct Tape" label */}
						<div className="py-2">
							<h3 className="inline-block bg-accent text-primary font-display text-2xl px-6 py-2 -rotate-1 shadow-lg uppercase tracking-tight">
								Laut, direkt und ohne Schnickschnack
							</h3>
						</div>

						<P>
							Ursprünglich als All-female Band gestartet, fühlen wir uns in der
							Tradition der{" "}
							<span className="italic font-bold text-secondary">
								Riot Grrrls
							</span>{" "}
							zuhause. Das bedeutet für uns: Musik mit Haltung. Dabei darf das
							nötige Augenzwinkern aber nie fehlen. Weil alles, was nervt, mit
							Humor – mal bissig, mal ironisch – erträglicher wird. Inzwischen
							ist Tobi unser „Quotenmann“ an den Drums – und das passt perfekt!
						</P>
					</div>

					<div className="space-y-6">
						{/* H2 styled with a thick, offset underline */}
						<div className="relative self-start">
							<h2 className="font-display text-3xl md:text-4xl uppercase relative z-10">
								Grrrl-Punk aus Hamburg
							</h2>
							<div className="absolute bottom-1 left-0 w-full h-4 bg-lightGray/30 -z-10 rotate-1" />
						</div>

						<P>
							Seit 2023 stehen wir regelmäßig auf den Bühnen in Hamburg und
							Norddeutschland. Wir lieben es, live zu spielen – direkt und mit
							vollem Einsatz. Und ja: Wir reisen auch deutlich weiter als bis
							zur letzten U-Bahn-Haltestelle! Wir sind für Gigs in ganz
							Deutschland buchbar.
						</P>
					</div>

					<div className="mt-4 p-6 bg-darkGray border-l-8 border-accent">
						<p className="font-display text-xl uppercase tracking-widest mb-4">
							Bereit?
						</p>
						<div className="flex flex-wrap gap-x-6 gap-y-4 items-center">
							<Link
								href="#"
								className="group flex items-center gap-2 text-accent font-bold hover:text-secondary transition-colors"
							>
								<span className="underline decoration-2 underline-offset-4 decoration-wavy">
									Jetzt Booking-Anfrage senden
								</span>
							</Link>
							<Link
								href="#"
								className="group flex items-center gap-2 text-accent font-bold hover:text-secondary transition-colors"
							>
								<span className="underline decoration-2 underline-offset-4 decoration-wavy">
									Hört hier in unsere Songs rein
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-20 opacity-80 border-t border-lightGray/10 pt-10">
				<SocialSection />
			</div>
		</Section>
	);
};
