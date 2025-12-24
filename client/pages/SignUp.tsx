import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    navigate('/profile');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-[621px] gradient-secondary rounded-[50px] p-12 relative">
        {/* Back Button */}
        <Link 
          to="/"
          className="absolute top-8 left-8 font-kokoro text-white text-2xl hover:underline"
        >
          <span className="text-[32px]">←</span>Back
        </Link>

        {/* Form */}
        <div className="pt-12">
          <h1 className="font-caveat text-[64px] text-white text-center mb-12">
            Welcome writer!
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              type="text"
              placeholder="Username..."
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full px-8 py-6 rounded-[50px] bg-white font-kokoro text-[32px] text-black placeholder:text-black/50 outline-none focus:ring-4 focus:ring-white/50 transition-all"
              required
            />

            <input
              type="email"
              placeholder="E-mail..."
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-8 py-6 rounded-[50px] bg-white font-kokoro text-[32px] text-black placeholder:text-black/50 outline-none focus:ring-4 focus:ring-white/50 transition-all"
              required
            />

            <input
              type="password"
              placeholder="Password..."
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-8 py-6 rounded-[50px] bg-white font-kokoro text-[32px] text-black placeholder:text-black/50 outline-none focus:ring-4 focus:ring-white/50 transition-all"
              required
            />

            <button
              type="submit"
              className="w-full max-w-[219px] mx-auto block px-12 py-4 rounded-[40px] gradient-button font-kokoro text-[36px] text-white hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center font-kokoro text-[24px] text-white mt-12">
            Already Have an account?{' '}
            <Link to="/login" className="underline hover:text-brand-blue transition-colors">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
