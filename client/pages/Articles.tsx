import { Link } from 'react-router-dom';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  author: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "The Beginning of Interactive Reading",
    excerpt: "Discover how comic-book style articles are changing the way we consume content online.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=900",
    readTime: "5 min",
    author: "ReadX Team"
  },
  {
    id: 2,
    title: "Parallax Scrolling in Web Design",
    excerpt: "Learn about the magic behind parallax effects and how they create immersive experiences.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/538aa2455daf764118104b6d83e709170de28877?width=900",
    readTime: "8 min",
    author: "Design Expert"
  },
  {
    id: 3,
    title: "The Future of Digital Storytelling",
    excerpt: "Explore how technology is transforming the art of storytelling in the digital age.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/7b75139709853f85e9f2e2900525f50c91db062e?width=900",
    readTime: "6 min",
    author: "Content Creator"
  }
];

export default function Articles() {
  return (
    <div className="min-h-screen bg-white pt-[137px]">
      {/* Hero Section */}
      <section className="gradient-hero py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-kokoro text-5xl md:text-6xl text-black mb-6">
            Explore Articles
          </h1>
          <p className="font-urbanist text-2xl text-black/75 max-w-2xl mx-auto">
            Dive into a collection of interactive, beautifully designed articles
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {articles.map((article, index) => (
              <Link
                key={article.id}
                to={`/article/${article.id}`}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <article className="bg-white rounded-[25px] shadow-[0_5px_4px_0_rgba(0,0,0,0.25)] overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 px-4 py-2 gradient-button rounded-full">
                      <span className="font-urbanist text-sm text-white">
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="font-kokoro text-2xl text-black mb-3 group-hover:text-brand-purple transition-colors">
                      {article.title}
                    </h2>
                    <p className="font-urbanist text-lg text-black/70 mb-4 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="font-urbanist text-sm text-black/60">
                        By {article.author}
                      </span>
                      <span className="font-kokoro text-brand-purple group-hover:translate-x-2 transition-transform">
                        Read →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Create Your Own CTA */}
          <div className="text-center mt-20">
            <p className="font-kokoro text-3xl text-black mb-8">
              Want to share your story?
            </p>
            <Link
              to="/create"
              className="inline-block px-16 py-5 bg-[#FF00E1] rounded-[50px] shadow-[0_6px_4px_0_rgba(0,0,0,0.25)] font-kokoro text-[32px] text-brand-blue hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Create Article
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
