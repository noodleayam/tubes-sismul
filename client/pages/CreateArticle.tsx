import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateArticle() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: null as File | null
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle article creation logic here
    navigate('/articles');
  };

  return (
    <div className="min-h-screen bg-white pt-[137px] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto gradient-secondary rounded-[50px] p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Article Name */}
            <input
              type="text"
              placeholder="Article Name"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-8 py-6 rounded-[50px] bg-[#D9D9D9] font-kokoro text-[40px] text-black placeholder:text-black/50 outline-none focus:ring-4 focus:ring-white/50 transition-all"
              required
            />

            <div className="grid grid-cols-1 lg:grid-cols-[388px_1fr] gap-8">
              {/* Image Upload */}
              <div className="relative">
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center w-full h-[485px] rounded-[50px] bg-[#D9D9D9] cursor-pointer hover:bg-[#C9C9C9] transition-colors"
                >
                  {formData.image ? (
                    <img
                      src={URL.createObjectURL(formData.image)}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-[50px]"
                    />
                  ) : (
                    <div className="text-center">
                      <svg width="224" height="224" viewBox="0 0 224 224" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 opacity-50">
                        <path d="M196 140V177.333C196 182.284 194.033 187.032 190.533 190.533C187.032 194.033 182.284 196 177.333 196H46.6667C41.716 196 36.968 194.033 33.4673 190.533C29.9667 187.032 28 182.284 28 177.333V140" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M158.667 74.6667L112 28L65.3335 74.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M112 28V140" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="font-kokoro text-[36px] text-black/50">
                        Upload Image...
                      </span>
                    </div>
                  )}
                </label>
              </div>

              {/* Article Content */}
              <textarea
                placeholder="Your Article..."
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full h-[485px] px-8 py-6 rounded-[50px] bg-[#D9D9D9] font-kokoro text-[36px] text-black placeholder:text-black/50 outline-none focus:ring-4 focus:ring-white/50 transition-all resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className="px-24 py-6 rounded-[40px] gradient-button font-kokoro text-[36px] text-white hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
