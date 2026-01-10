import {P, Section} from "@/components";
import {SocialSection} from "@/app/social";

export const About = () => {
return (
    <Section id="about-us" heading="About us">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Image Container: h-full ensures it matches the height of the text grid */}
            <div className="relative w-full h-64 md:h-auto min-h-[300px]">
                <img
                    className="absolute inset-0 w-full h-full object-cover ra"
                    alt=""
                    src="live/image00001.jpeg"
                />
            </div>

            <div className="flex flex-col gap-6 justify-center">
                <P>
                    Im zweiten Pandemie-Sommer aus Langeweile gegründet, ging es uns
                    vor allem darum, Krach zu machen und dabei möglichst viel Spaß
                    zu haben. Also das zu tun, was man nach zwölf Monaten
                    Kontaktbeschränkungen wirklich vermisst hat. Anfangs waren wir
                    als all female-Band aufgestellt und sehen uns in der Tradition
                    der Riot Grrrls.
                </P>
                <P>
                    Unsere Einflüsse sind, je nachdem, wen ihr von uns fragt,
                    Punkrock, mehr oder weniger trashiger Rock &#39;n&#39; Roll,
                    Garagerock, verschiedene Spielarten von Metal, oder oder oder.
                    Hauptsache laut und eben irgendwie roh.
                </P>
                <P>
                    Seit Frühjahr 2023 sind wir regelmäßig auf den Bühnen
                    einschlägiger Läden in und um Hamburg anzutreffen. Wir sind zu
                    viert. Gesang, Gitarre, Bass und Drums. Laut, direkt und ohne
                    Schnickschnack. Wir würden sogar Reisen bis weit in den Süden in
                    Kauf nehmen, wenn ihr uns fragt{" "}
                    <span className="text-accent italic">*zwinkizwonki*</span>.
                </P>
            </div>
        </div>
        <SocialSection />
    </Section>

)
}
