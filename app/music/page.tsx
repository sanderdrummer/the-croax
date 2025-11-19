export default function Music() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="font-display text-5xl text-white mb-12 uppercase tracking-wide text-center">
        Musik <span className="text-accent">&</span> Videos
      </h1>

      {/* Top Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="aspect-video bg-lightGray grayscale hover:grayscale-0 transition"></div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Column 1: Releases & Bandcamp */}
        <div>
          <h2 className="font-display text-3xl text-accent mb-6 uppercase border-b border-lightGray pb-2">Releases</h2>

          {/* Bandcamp Embed Placeholder */}
          <div className="w-full mb-8">
            <iframe
              style={{ border: 0, width: '100%', height: '400px' }}
              src="https://bandcamp.com/EmbeddedPlayer/album=YOUR_ALBUM_ID/size=large/bgcol=333333/linkcol=b22222/artwork=small/transparent=true/"
              seamless
            >
              <a href="https://thecroax.bandcamp.com/">The Croax on Bandcamp</a>
            </iframe>
            <p className="text-sm text-gray-500 mt-2 italic text-center">*Replace URL with your actual Bandcamp Embed Code*</p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 items-center bg-darkGray p-4 border border-lightGray">
              <div className="w-16 h-16 bg-black shrink-0"></div>
              <div>
                <h3 className="font-bold text-white">Not to Mars</h3>
                <p className="text-sm text-gray-400">Single (2025)</p>
              </div>
            </div>
            {/* Add more releases here */}
          </div>
        </div>

        {/* Column 2: Videos & Streaming */}
        <div>
          <h2 className="font-display text-3xl text-accent mb-6 uppercase border-b border-lightGray pb-2">Videos</h2>

          {/* YouTube Embed */}
          <div className="aspect-video w-full bg-black mb-8">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <h3 className="font-display text-2xl text-white mb-4 uppercase">Streamen</h3>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="px-6 py-3 bg-[#1DB954] text-black font-bold hover:opacity-90 transition rounded-full">Spotify</a>
            <a href="#" className="px-6 py-3 bg-black border border-white text-white font-bold hover:bg-white hover:text-black transition rounded-full">Apple Music</a>
          </div>
        </div>
      </div>
    </div>
  );
}
