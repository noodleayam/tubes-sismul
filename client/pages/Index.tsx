import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen gradient-hero flex items-center justify-center overflow-hidden pt-[137px]">
        {/* Parallax Background Elements */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-kokoro text-[36px] md:text-[48px] lg:text-[56px] text-black mb-6 animate-fade-in">
            Try the new way to read articles
          </h1>
          <p className="font-urbanist text-[20px] md:text-[25px] text-black/75 mb-12 max-w-2xl mx-auto">
            Experience something that you never tried before
          </p>
          
          <Link 
            to="/articles"
            className="inline-block px-16 py-5 bg-white rounded-[50px] font-kokoro text-[32px] text-brand-blue hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Explore Now
          </Link>

          {/* Down Arrow */}
          <div className="mt-24 animate-bounce">
            <div className="text-white text-[70px] font-kokoro transform rotate-90">
              →
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
          <div className="w-[7px] h-[46px] rounded-full bg-white/75" />
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-kokoro text-[40px] text-center text-black mb-16">
            Interactive Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Parallax Scroll Card */}
            <div className="bg-white rounded-[25px] shadow-[0_5px_4px_0_rgba(0,0,0,0.25)] p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-[82px] h-[82px] rounded-[25px] gradient-card-icon mb-6 flex items-center justify-center">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.46376 5.46371L18.3399 36.3701L22.9112 22.9112L36.3702 18.3399L5.46376 5.46371Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23.6762 23.6761L34.6036 34.6035" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-kokoro text-[36px] text-black mb-4">
                Parallax scroll
              </h3>
              <p className="font-urbanist text-[15px] text-black">
                Immersive depth with multi-layered animations that move at different speeds
              </p>
            </div>

            {/* Interactive Features Card */}
            <div className="bg-white rounded-[25px] shadow-[0_5px_4px_0_rgba(0,0,0,0.25)] p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-[75px] h-[75px] rounded-[25px] gradient-card-icon mb-6 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.7334 20.4C35.6098 18.5236 36.6639 15.9786 36.6639 13.325C36.6639 10.6713 35.6098 8.1264 33.7334 6.24999C31.857 4.37358 29.312 3.31943 26.6584 3.31943C24.0047 3.31943 21.4598 4.37358 19.5834 6.24999L8.33337 17.5V31.6667H22.5L33.7334 20.4Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M26.6667 13.3333L3.33337 36.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M29.1667 25H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-kokoro text-[36px] text-black mb-4">
                Interactive Features
              </h3>
              <p className="font-urbanist text-[15px] text-black">
                Immersive depth with multi-layered animations that move at different speeds
              </p>
            </div>

            {/* Smooth Animation Card */}
            <div className="bg-white rounded-[25px] shadow-[0_5px_4px_0_rgba(0,0,0,0.25)] p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-[82px] h-[82px] rounded-[25px] gradient-card-icon mb-6 flex items-center justify-center transform rotate-[10deg]">
                <svg width="40" height="40" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_126_104)">
                    <path d="M26.0632 6.75565L29.3233 17.9248L40.3727 21.5824L30.7565 28.1287L30.7021 39.7626L21.4992 32.6397L10.4151 36.1855L14.343 25.2345L7.54575 15.7941L19.1798 16.1362L26.0632 6.75565Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                </svg>
              </div>
              <h3 className="font-kokoro text-[36px] text-black mb-4">
                Smooth Animation
              </h3>
              <p className="font-urbanist text-[15px] text-black">
                Immersive depth with multi-layered animations that move at different speeds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Example Section */}
      <section className="gradient-secondary py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Article Preview Image */}
            <div className="relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=900"
                alt="Article Preview"
                className="w-full max-w-[450px] h-auto shadow-[5px_5px_4px_0_rgba(0,0,0,0.25)] rounded-lg mx-auto"
              />
            </div>

            {/* Article Info */}
            <div className="space-y-8">
              <h2 className="font-['Konkhmer_Sleokchher',_-apple-system,_Roboto,_Helvetica,_sans-serif] text-[40px] md:text-[48px] text-black leading-tight">
                Example of the new way to read an articles
              </h2>
              <p className="font-urbanist text-[32px] text-black">
                Example 1
              </p>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-8 flex-wrap">
                <button className="w-[90px] h-[90px] rounded-[25px] gradient-button shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transform rotate-[10deg] hover:rotate-0 transition-transform duration-300">
                  <span className="font-kokoro text-[36px] text-white">1</span>
                </button>
                <button className="w-[78px] h-[80px] rounded-[25px] gradient-button shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:scale-110 transition-transform duration-300">
                  <span className="font-kokoro text-[36px] text-white">2</span>
                </button>
                <button className="w-[78px] h-[80px] rounded-[25px] gradient-button shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:scale-110 transition-transform duration-300">
                  <span className="font-kokoro text-[36px] text-white">3</span>
                </button>
                <button className="w-[78px] h-[80px] rounded-[25px] gradient-button shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:scale-110 transition-transform duration-300">
                  <span className="font-kokoro text-[36px] text-white">4</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-kokoro text-[48px] md:text-[64px] text-black mb-8 max-w-5xl mx-auto leading-tight">
            Upload your own article and make it fun to read
          </h2>
          <p className="font-kokoro text-[36px] text-[#A4A4A4] mb-12">
            Try ReadX Now!!!
          </p>
          <Link 
            to="/create"
            className="inline-block px-16 py-5 bg-[#FF00E1] rounded-[50px] shadow-[0_6px_4px_0_rgba(0,0,0,0.25)] font-kokoro text-[32px] text-brand-blue hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Make your own
          </Link>
        </div>
      </section>
    </div>
  );
}
