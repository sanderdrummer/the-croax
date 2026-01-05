import Script from 'next/script';

export type Gig = {
  date: string;
  time?: string;
  title: string;
  url: string;
  promo: string;
  city: string;
  location: string;
  image?: string;
};
const gigs: Gig[] = [
  {
    date: "29.01.2026",
    time: "20:00",
    promo: `Light The Cannons, The Croax, Kultfaktor‚
Drei der besten Independent-Rockbands Hamburgs kommen im Marx zusammen, um euch auf eine Reise von Post-Punk bis Hardrock und allem dazwischen mitzunehmen. Freut euch auf mitreißende Songs, mitreißende Melodien, gewaltige Riffs und genug Energie, um selbst die kältesten Januarnächte aufzuwärmen.

Powered by Planet 7 Music.`,
    url: "https://www.eventim.de/eventseries/light-the-cannons-the-croax-kultfaktor-4038272/",
    title: "Light The Cannons, The Croax, Kultfaktor",
    city: "HAMBURG",
    location: "Markthalle MarX"
  }
]

const formatISO = (dateStr: string, timeStr?: string) => {
  const [d, m, y] = dateStr.split('.');
  return `${y}-${m}-${d}${timeStr ? `T${timeStr}:00` : ''}`;
};

export default function Live() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": gigs.map((gig, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "MusicEvent",
        "name": gig.title,
        "startDate": formatISO(gig.date, gig.time),
        "url": gig.url,
        "location": {
          "@type": "Place",
          "name": gig.location,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": gig.city,
            "addressCountry": "DE"
          }
        },
        "offers": {
          "@type": "Offer",
          "url": gig.url,
          "availability": "https://schema.org/InStock"
        },
        "image": gig.image || "https://yourbandwebsite.com/og-image.jpg" // Fallback image recommended
      }
    }))
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Script
        id="gigs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="font-display text-5xl text-accent mb-12 uppercase tracking-wide text-center">Live</h1>
      <div className="mb-16">
        <h2 className="font-display text-3xl text-white mb-6 uppercase">Kommende Shows</h2>
        <div className="bg-darkGray border border-lightGray">
          <div className="space-y-8">
            {gigs.map((gig) => {
              const [day, month, year] = gig.date.split('.');

              return (
                <div key={gig.date} className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 p-8 border border-lightGray/30 bg-darkGray/50 hover:bg-darkGray transition-all duration-300">

                  <div className="md:col-span-3 flex flex-row md:flex-col items-baseline md:items-start gap-2 border-b md:border-b-0 md:border-r border-lightGray/20 pb-4 md:pb-0">
                    <span className="text-3xl font-black tracking-tighter text-white">{day}.{month}.{year}</span>
                    <div className="flex flex-col">
                      <span className="text-accent font-bold uppercase tracking-widest text-sm">{gig.time} UHR</span>
                    </div>
                  </div>

                  <div className="md:col-span-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-display uppercase leading-tight mb-2 group-hover:text-accent transition-colors">
                      {gig.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4 text-sm font-bold text-gray-300">
                      <span className="text-accent">@</span>
                      <span>{gig.location}, {gig.city}</span>
                    </div>
                    {/* Promo text: smaller and slightly muted for clarity */}
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
                      {gig.promo}
                    </p>
                  </div>

                  {/* ACTION COLUMN (3 cols) */}
                  <div className="md:col-span-3 flex items-center md:justify-end">
                    <a
                      href={gig.url}
                      target="_blank"
                      className="w-full md:w-auto text-center px-6 py-4 bg-transparent border-2 border-accent text-accent font-black uppercase tracking-tighter hover:bg-accent hover:text-black transition-all transform active:scale-95"
                    >
                      Tickets
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="p-6 text-center italic text-gray-500">Weitere Termine in Planung...</div>
        </div>
      </div>

      {/* Past Shows */}
      <div className="mb-16 opacity-60">
        <h2 className="font-display text-3xl text-secondary mb-6 uppercase">Vergangen</h2>
        <ul className="space-y-2 font-mono text-sm">
          <li>2024 - LOGO, Hamburg</li>
          <li>2024 - Irgendwo an der Nordsee</li>
          <li>2023 - Diverse Keller, Hamburg</li>
        </ul>
      </div>

      {/* Live Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="aspect-square bg-lightGray grayscale hover:grayscale-0 transition duration-500"></div>
        ))}
      </div>
    </div>
  );
}
