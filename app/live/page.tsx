export default function Live() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-display text-5xl text-accent mb-12 uppercase tracking-wide text-center">Live</h1>

      {/* Upcoming Shows */}
      <div className="mb-16">
        <h2 className="font-display text-3xl text-white mb-6 uppercase">Kommende Shows</h2>
        <div className="bg-darkGray border border-lightGray">
          {/* Single Event Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between p-6 border-b border-lightGray hover:bg-lightGray/20 transition">
            <div className="mb-2 md:mb-0">
              <div className="font-display text-2xl text-white">12. OKT 2025</div>
              <div className="text-accent font-bold uppercase">Hamburg</div>
            </div>
            <div className="text-lg mb-4 md:mb-0">
              Monkey's Music Club <span className="text-gray-500 text-sm block md:inline md:ml-2">w/ Some Other Band</span>
            </div>
            <button className="px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-white uppercase text-sm font-bold transition">
              Tickets / Infos
            </button>
          </div>
          {/* Add more rows here */}
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
