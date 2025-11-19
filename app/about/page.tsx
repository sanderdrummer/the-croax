export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      {/* Large Band Pic */}
      <div className="w-full h-96 bg-lightGray mb-12 relative grayscale hover:grayscale-0 transition duration-700">
        {/* Replace with <Image /> component */}
        <div className="absolute inset-0 flex items-center justify-center text-darkGray font-display text-4xl">GROSSES BANDPIC</div>
      </div>

      {/* Bio Text */}
      <div className="space-y-6 text-lg leading-relaxed text-gray-300 mb-16">
        <h1 className="font-display text-5xl text-accent mb-8 uppercase">Über Uns</h1>

        <p>
          Im zweiten Pandemie-Sommer aus Langeweile gegründet, ging es uns vor allem darum, Krach zu machen und dabei möglichst viel Spaß zu haben. Also das zu tun, was man nach zwölf Monaten Kontaktbeschränkungen wirklich vermisst hat.
        </p>
        <p>
          Anfangs waren wir als all female-Band aufgestellt und sehen uns in der Tradition der Riot Grrrls. Unsere Einflüsse sind, je nachdem, wen ihr von uns fragt, Punkrock, mehr oder weniger trashiger Rock 'n' Roll, Garagerock, verschiedene Spielarten von Metal, oder oder oder. <strong className="text-white">Hauptsache laut und eben irgendwie roh.</strong>
        </p>
        <p>
          Genau das wollen wir mit unserer Musik umsetzen: Wir sind zu viert. Gesang, Gitarre, Bass und Drums. Laut, direkt und ohne Schnickschnack. Und das funktioniert überraschend gut. Seit Frühjahr 2023 sind wir relativ regelmäßig auf den Bühnen einschlägiger Läden in und um Hamburg anzutreffen. Wir haben es aber auch schon mal bis fast an die Nordsee und bis kurz vor die niederländische Grenze geschafft. Wir würden sogar Reisen bis weit in den Süden in Kauf nehmen, wenn ihr uns fragt *zwinkizwonki*.
        </p>
        <p>
          Im Sommer 2024 haben wir ein paar erste Singles aufgenommen, die ihr euch auf den üblichen Streaming-Plattformen, am besten aber über <a href="https://thecroax.bandcamp.com/" className="text-accent underline decoration-accent/50 hover:text-white">Bandcamp</a> anhören könnt.
        </p>
        <p>
          Anfang 2025 hat uns Quotenmann Tobi am Schlagzeug ergänzt und mit uns gleich die nächste Single <a href="https://thecroax.bandcamp.com/track/not-to-mars" className="text-accent underline decoration-accent/50 hover:text-white">Not to Mars</a> aufgenommen. Schon im Juni durfte Tobi seinen Einstand bei und mit uns im Logo feiern.
        </p>

        <div className="bg-darkGray p-6 border-l-4 border-accent mt-8">
          <h3 className="font-display text-2xl text-white mb-2 uppercase">Das Lineup</h3>
          <p>Die vordere Reihe bei The Croax ist weiterhin all female besetzt. Hier stehen:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-secondary">
            <li><span className="text-white font-bold">Kat</span> – die unvergleichlich gute Stimme am Mic</li>
            <li><span className="text-white font-bold">Gesa</span> – eine Frau wie eine Maschine am Bass</li>
            <li><span className="text-white font-bold">Anja</span> – an der Gitarre</li>
            <li><span className="text-white font-bold">Tobi</span> – Drums</li>
          </ul>
        </div>
      </div>

      {/* 3-4 Smaller Pics Bottom */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="aspect-square bg-lightGray hover:bg-accent/20 transition flex items-center justify-center border border-darkGray">
            <span className="text-xs text-gray-500">PIC {i}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
