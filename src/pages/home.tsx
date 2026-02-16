import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder images for hero background
  const heroImages = [
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', // Clothing rack
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'  // Fashion shot
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Slider */}
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
             <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-[#F5EBDD] animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight drop-shadow-lg">
            Redefining Thrift. <br />
            <span className="text-[#A67B5B]">Elevating Style.</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light text-gray-200 drop-shadow-md">
            Premium shorts and bottoms curated for bold everyday wear.
          </p>
          <Link
            to="/buy"
            className="inline-flex items-center gap-2 bg-[#6B4226] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#5a3620] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Shop Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#F5EBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="About PRMSH"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B]">
                Curated for <span className="text-[#6B4226]">Confidence</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At PRMSH, we believe that style shouldn't come at the cost of the planet—or your wallet.
                Our collection is meticulously handpicked to ensure every piece tells a story.
                We focus on high-quality shorts and bottoms that blend comfort with a modern streetwear aesthetic.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're looking for a vintage gem or a contemporary staple, our selection is designed to
                elevate your everyday look with a touch of timeless flair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] text-center mb-12">
            Explore Our Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Shorts Card */}
            <div className="group relative h-[400px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Shorts"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold text-white mb-2">Premium Shorts</h3>
                <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Comfort meets style. Perfect for the season.
                </p>
                <Link
                  to="/buy"
                  className="inline-block bg-[#F5EBDD] text-[#6B4226] px-6 py-2 rounded-md font-medium hover:bg-white transition-colors duration-200"
                >
                  Explore Shorts
                </Link>
              </div>
            </div>

            {/* Bottoms Card */}
            <div className="group relative h-[400px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1542272454315-4c01d7465196?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Bottoms"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold text-white mb-2">Essential Bottoms</h3>
                <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Versatile trousers and pants for any occasion.
                </p>
                <Link
                  to="/buy"
                  className="inline-block bg-[#F5EBDD] text-[#6B4226] px-6 py-2 rounded-md font-medium hover:bg-white transition-colors duration-200"
                >
                  Explore Bottoms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
