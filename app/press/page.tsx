import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'; // Make sure to install @heroicons/react

export default function Press() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-display text-5xl text-white mb-8 uppercase text-center">Presse</h1>

      <div className="bg-darkGray p-8 border border-lightGray text-center mb-16">
        <h2 className="text-2xl font-bold text-white mb-4">Pressemappe (EPK)</h2>
        <p className="mb-6 text-gray-400">
          Enthält Hi-Res Fotos, Band-Logo (Vektor/PNG), Pressetext und Factsheet.
        </p>
        <a href="/path-to-your-zip-file.zip" download className="inline-flex items-center gap-2 bg-accent hover:bg-red-700 text-white font-display uppercase tracking-widest py-3 px-8 text-lg transition">
          <ArrowDownTrayIcon className="h-6 w-6" />
          Download Kit (.zip)
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Press Photos Preview */}
        <div className="aspect-[3/4] bg-lightGray relative group">
          <span className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1">Kat (Vocals)</span>
        </div>
        <div className="aspect-[3/4] bg-lightGray relative group">
          <span className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1">Full Band</span>
        </div>
        <div className="aspect-[3/4] bg-lightGray relative group">
          <span className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1">Live Action</span>
        </div>
      </div>
    </div>
  );
}
