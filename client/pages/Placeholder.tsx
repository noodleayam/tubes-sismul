import { Link } from 'react-router-dom';

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-white pt-[137px] flex items-center justify-center">
      <div className="text-center px-4 max-w-2xl">
        <div className="w-32 h-32 rounded-full gradient-secondary mx-auto mb-8 flex items-center justify-center text-6xl">
          🚧
        </div>
        <h1 className="font-kokoro text-5xl md:text-6xl text-black mb-6">
          {title}
        </h1>
        <p className="font-urbanist text-2xl text-black/70 mb-12">
          {description}
        </p>
        <div className="space-y-4">
          <p className="font-urbanist text-lg text-black/60">
            This page is coming soon! In the meantime, check out our other features.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/"
              className="px-8 py-4 bg-white border-2 border-brand-purple rounded-[50px] font-kokoro text-xl text-brand-purple hover:bg-brand-purple hover:text-white transition-all duration-300"
            >
              Go Home
            </Link>
            <Link
              to="/articles"
              className="px-8 py-4 gradient-button rounded-[50px] font-kokoro text-xl text-white hover:shadow-2xl transition-all duration-300"
            >
              Browse Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
