import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Article {
  id: number;
  title: string;
  image: string;
  readTime: string;
}

const favoriteArticles: Article[] = [
  {
    id: 1,
    title: "The Beginning of a New Era",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=900",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Interactive Storytelling",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/538aa2455daf764118104b6d83e709170de28877?width=900",
    readTime: "8 min"
  },
  {
    id: 3,
    title: "The Future of Reading",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/7b75139709853f85e9f2e2900525f50c91db062e?width=900",
    readTime: "6 min"
  }
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState<'favorites' | 'settings'>('favorites');

  return (
    <div className="min-h-screen bg-white pt-[137px]">
      <div className="container mx-auto px-4 py-12">
        {/* Profile Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="gradient-secondary rounded-[50px] p-12 text-center">
            <div className="w-32 h-32 rounded-full bg-white mx-auto mb-6 flex items-center justify-center text-6xl">
              👤
            </div>
            <h1 className="font-caveat text-6xl text-white mb-2">Welcome Back!</h1>
            <p className="font-urbanist text-2xl text-white/80">user@readx.com</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setActiveTab('favorites')}
              className={`
                px-12 py-4 rounded-[50px] font-kokoro text-2xl transition-all duration-300
                ${activeTab === 'favorites'
                  ? 'gradient-button text-white shadow-lg scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }
              `}
            >
              Favorite Articles
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`
                px-12 py-4 rounded-[50px] font-kokoro text-2xl transition-all duration-300
                ${activeTab === 'settings'
                  ? 'gradient-button text-white shadow-lg scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }
              `}
            >
              Settings
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'favorites' ? (
            <div className="space-y-8">
              <h2 className="font-kokoro text-4xl text-center text-black mb-8">
                Your Favorite Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {favoriteArticles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/article/${article.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-[25px] shadow-[0_5px_4px_0_rgba(0,0,0,0.25)] overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="p-6">
                        <h3 className="font-kokoro text-2xl text-black mb-2">
                          {article.title}
                        </h3>
                        <p className="font-urbanist text-lg text-gray-600">
                          {article.readTime} read
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <h2 className="font-kokoro text-4xl text-center text-black mb-8">
                Account Settings
              </h2>
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="bg-white rounded-[25px] shadow-[0_5px_4px_0_rgba(0,0,0,0.25)] p-8">
                  <label className="font-kokoro text-2xl text-black mb-4 block">
                    Username
                  </label>
                  <input
                    type="text"
                    defaultValue="ReadX User"
                    className="w-full px-6 py-4 rounded-[50px] bg-gray-100 font-urbanist text-xl border-2 border-transparent focus:border-brand-purple outline-none transition-colors"
                  />
                </div>

                <div className="bg-white rounded-[25px] shadow-[0_5px_4px_0_rgba(0,0,0,0.25)] p-8">
                  <label className="font-kokoro text-2xl text-black mb-4 block">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="user@readx.com"
                    className="w-full px-6 py-4 rounded-[50px] bg-gray-100 font-urbanist text-xl border-2 border-transparent focus:border-brand-purple outline-none transition-colors"
                  />
                </div>

                <div className="bg-white rounded-[25px] shadow-[0_5px_4px_0_rgba(0,0,0,0.25)] p-8">
                  <label className="font-kokoro text-2xl text-black mb-4 block">
                    Notifications
                  </label>
                  <div className="space-y-4">
                    <label className="flex items-center gap-4 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-6 h-6 rounded accent-brand-purple" />
                      <span className="font-urbanist text-lg text-black">Email notifications</span>
                    </label>
                    <label className="flex items-center gap-4 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-6 h-6 rounded accent-brand-purple" />
                      <span className="font-urbanist text-lg text-black">New article alerts</span>
                    </label>
                  </div>
                </div>

                <button className="w-full px-12 py-5 gradient-button rounded-[50px] shadow-[0_6px_4px_0_rgba(0,0,0,0.25)] font-kokoro text-[32px] text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
