import { useState } from 'react';
import { Link } from 'react-router-dom';

function Subscription() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing:', email);
  };

  return (
    <div className="min-h-screen bg-[#1F0025] flex items-center justify-center px-4">
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium mb-12 leading-tight">
          Get updates, insights, and reports on the latest industry trends.
        </h1>
        
        <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entre Your Email Address"
            className="w-full px-6 py-4 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Link to="/login">
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-8 py-3 rounded-full bg-[#8A2BE2] text-white font-medium hover:bg-[#7B27C7] transition-colors"
          >
            Subscribe
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Subscription;