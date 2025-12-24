import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  // Don't show header on auth pages
  if (location.pathname === '/signup' || location.pathname === '/login') {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-[137px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-[77px] h-[75px] rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
              <span className="text-3xl">📚</span>
            </div>
            <span className="font-kokoro text-[36px] text-black">ReadX</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link 
              to="/articles" 
              className="font-urbanist text-[32px] text-black hover:text-brand-purple transition-colors"
            >
              Article
            </Link>
            <Link 
              to="/category" 
              className="font-urbanist text-[32px] text-black hover:text-brand-purple transition-colors"
            >
              Category
            </Link>
            <Link 
              to="/help" 
              className="font-urbanist text-[32px] text-black hover:text-brand-purple transition-colors"
            >
              Help
            </Link>
            <Link 
              to="/about" 
              className="font-urbanist text-[32px] text-black hover:text-brand-purple transition-colors"
            >
              About Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
