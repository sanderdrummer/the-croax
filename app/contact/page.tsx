export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h1 className="font-display text-5xl md:text-7xl text-accent mb-12 uppercase tracking-widest">
        Kontakt
      </h1>

      <div className="space-y-12">
        <div>
          <h2 className="font-display text-2xl text-white uppercase mb-2">Allgemein</h2>
          <a href="mailto:band@thecroax.com" className="text-2xl md:text-4xl font-bold hover:text-accent transition">
            band@thecroax.com
          </a>
        </div>

        <div>
          <h2 className="font-display text-2xl text-white uppercase mb-2">Booking</h2>
          <p className="text-gray-400 mb-1">Planet 7 Music Hamburg</p>
          <a href="mailto:planet7musichamburg@gmail.com" className="text-xl md:text-2xl font-bold hover:text-accent transition">
            planet7musichamburg@gmail.com
          </a>
        </div>

        <div className="pt-12 border-t border-lightGray">
          <h2 className="font-display text-xl text-white uppercase mb-6">Socials</h2>
          <div className="flex justify-center gap-8">
            {/* Replace # with actual links */}
            <a href="#" className="w-12 h-12 bg-white text-primary flex items-center justify-center rounded-full hover:bg-accent hover:text-white transition font-bold">IG</a>
            <a href="#" className="w-12 h-12 bg-white text-primary flex items-center justify-center rounded-full hover:bg-accent hover:text-white transition font-bold">FB</a>
            <a href="https://thecroax.bandcamp.com/" className="w-12 h-12 bg-white text-primary flex items-center justify-center rounded-full hover:bg-accent hover:text-white transition font-bold">BC</a>
          </div>
        </div>
      </div>
    </div>
  );
}
