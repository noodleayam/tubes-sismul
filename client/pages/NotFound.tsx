import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center pt-[137px]">
      <div className="text-center px-4 max-w-2xl">
        <div className="text-[150px] md:text-[200px] font-kokoro text-white/20 leading-none mb-4">
          404
        </div>
        <h1 className="font-kokoro text-5xl md:text-6xl text-black mb-6">
          Page Not Found
        </h1>
        <p className="font-urbanist text-2xl text-black/75 mb-12">
          Looks like this article hasn't been written yet!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/"
            className="px-12 py-5 bg-white rounded-[50px] font-kokoro text-[28px] text-brand-blue hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Go Home
          </Link>
          <Link
            to="/articles"
            className="px-12 py-5 gradient-button rounded-[50px] font-kokoro text-[28px] text-white hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Browse Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
