import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

interface ArticlePanel {
  id: number;
  title: string;
  content: string;
  image: string;
}

const sampleArticle: ArticlePanel[] = [
  {
    id: 1,
    title: "The Beginning",
    content: "Welcome to a new way of reading. This is where your story begins, with beautiful visuals and smooth transitions that make reading feel like an adventure.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=900"
  },
  {
    id: 2,
    title: "The Journey Continues",
    content: "As you scroll through each panel, notice how the content flows smoothly from one section to the next, creating an immersive reading experience.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/538aa2455daf764118104b6d83e709170de28877?width=900"
  },
  {
    id: 3,
    title: "Interactive Elements",
    content: "Each panel can contain rich multimedia content, interactive elements, and beautiful typography that brings your article to life.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/7b75139709853f85e9f2e2900525f50c91db062e?width=900"
  },
  {
    id: 4,
    title: "The Conclusion",
    content: "This comic-book style approach to reading articles makes content more engaging and memorable. Try creating your own!",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=900"
  }
];

export default function ArticleReader() {
  const { id } = useParams();
  const [activePanel, setActivePanel] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);

      // Determine active panel based on scroll position
      panelRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setActivePanel(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPanel = (index: number) => {
    panelRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen bg-white pt-[137px]">
      {/* Progress Bar */}
      <div className="fixed top-[137px] left-0 right-0 h-1 bg-gray-200 z-40">
        <div 
          className="h-full gradient-button transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Panel Navigation */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4">
        {sampleArticle.map((panel, index) => (
          <button
            key={panel.id}
            onClick={() => scrollToPanel(index)}
            className={`
              w-12 h-12 rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]
              transition-all duration-300 font-kokoro text-lg
              ${index === activePanel 
                ? 'gradient-button text-white scale-110 rotate-[10deg]' 
                : 'bg-white text-brand-purple hover:scale-105'
              }
            `}
          >
            {panel.id}
          </button>
        ))}
      </div>

      {/* Article Panels */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-32">
          {sampleArticle.map((panel, index) => (
            <div
              key={panel.id}
              ref={(el) => (panelRefs.current[index] = el)}
              className={`
                min-h-screen flex items-center
                transition-all duration-1000 ease-out
                ${index === activePanel ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-8'}
              `}
            >
              <div className={`
                grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full
                ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}
              `}>
                {/* Image */}
                <div 
                  className={`
                    parallax-layer
                    ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}
                  `}
                  style={{
                    transform: index === activePanel 
                      ? `translateY(${(scrollProgress - (index * 25)) * 0.5}px)` 
                      : 'translateY(0)'
                  }}
                >
                  <img
                    src={panel.image}
                    alt={panel.title}
                    className="w-full max-w-md rounded-2xl shadow-2xl mx-auto hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className={`
                  space-y-6
                  ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}
                `}>
                  <div className="inline-block px-6 py-2 gradient-button rounded-full">
                    <span className="font-kokoro text-2xl text-white">
                      Panel {panel.id}
                    </span>
                  </div>
                  <h2 className="font-kokoro text-5xl md:text-6xl text-black">
                    {panel.title}
                  </h2>
                  <p className="font-urbanist text-xl md:text-2xl text-black/80 leading-relaxed">
                    {panel.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* End Section */}
        <div className="text-center py-24 space-y-8">
          <h3 className="font-kokoro text-4xl text-black">
            Want to create your own?
          </h3>
          <Link
            to="/create"
            className="inline-block px-16 py-5 bg-[#FF00E1] rounded-[50px] shadow-[0_6px_4px_0_rgba(0,0,0,0.25)] font-kokoro text-[32px] text-brand-blue hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Make your own
          </Link>
        </div>
      </div>
    </div>
  );
}
