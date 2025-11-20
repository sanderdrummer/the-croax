import { getMarkdownData } from '../markdown';

export default async function About() {
  // Fetch data from content/about.md
  const data = await getMarkdownData('about');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      {/* Dynamic Image from Frontmatter */}
      <div className="w-full h-96 bg-lightGray mb-12 relative grayscale hover:grayscale-0 transition duration-700 overflow-hidden">
        {/* Ensure you have an image at public/images/band-main.jpg */}
        {/* If no image in MD, show placeholder */}
        {data.image ? (
          <img
            src={data.image}
            alt="The Croax Band"
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full font-display text-4xl text-darkGray">NO IMAGE</div>
        )}
      </div>

      <h1 className="font-display text-5xl text-accent mb-2 uppercase">
        {data.title}
      </h1>
      <h2 className="text-xl text-gray-400 mb-8 font-bold">
        {data.subtitle}
      </h2>

      {/* RENDER MARKDOWN CONTENT 
        We use 'prose' to style standard HTML tags.
        'prose-invert' creates the dark mode text (white text).
      */}
      <div
        className="prose prose-invert prose-lg max-w-none 
                   prose-headings:font-display prose-headings:uppercase prose-headings:text-secondary
                   prose-a:text-accent prose-a:no-underline hover:prose-a:text-white
                   prose-strong:text-white prose-strong:font-bold"
        dangerouslySetInnerHTML={{ __html: data.contentHtml }}
      />

      {/* You can still mix hardcoded React components below the Markdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
        {/* Static Photo Grid */}
        <div className="aspect-square bg-lightGray/20 border border-lightGray"></div>
        <div className="aspect-square bg-lightGray/20 border border-lightGray"></div>
        <div className="aspect-square bg-lightGray/20 border border-lightGray"></div>
      </div>
    </div>
  );
}
