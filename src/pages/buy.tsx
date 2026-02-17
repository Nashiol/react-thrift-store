import { MessageCircle } from 'lucide-react';
import short1Image from '../assets/images/short1.jpeg';
import short2Image from '../assets/images/short2.jpeg';
import short3Image from '../assets/images/short3.jpeg';
import trouser1Image from '../assets/images/trouse1.jpeg';
import trouser2Image from '../assets/images/trouse2.jpeg';
import trouser3Image from '../assets/images/trouse3.jpeg';

interface Product {
  id: number;
  name: string;
  category: 'Shorts' | 'Bottoms';
  price: string; // Optional visually
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Vintage Corduroy Shorts',
    category: 'Shorts',
    price: 'K70',
    image: short1Image
  },
  {
    id: 2,
    name: 'Cargo Utility Pants',
    category: 'Bottoms',
    price: 'K120',
    image: trouser2Image
  },
  {
    id: 3,
    name: 'Denim Carpenter Shorts',
    category: 'Shorts',
    price: 'K70',
    image: short3Image
  },
  {
    id: 4,
    name: 'Pleated Chino Trousers',
    category: 'Bottoms',
    price: 'K120',
    image: trouser1Image
  },
  {
    id: 5,
    name: 'Athletic Sweat Shorts',
    category: 'Shorts',
    price: 'K70',
    image: short2Image
  },
  {
    id: 6,
    name: 'Slim Fit bottoms',
    category: 'Bottoms',
    price: 'K120',
    image: trouser3Image
  }
];

const Buy = () => {
  const handleWhatsAppClick = (productName: string) => {
    const phoneNumber = '260779727014';
    const message = `Hi I am interested in ${productName}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-bg-off-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-text-dark mb-2 text-center">Shop Collection</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our curated selection of premium secondhand pieces.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-bg-off-white text-primary-brown text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-text-dark line-clamp-1">{product.name}</h3>
                </div>
                <p className="text-light-brown font-semibold mb-4">{product.price}</p>

                <div className="mt-auto">
                  <button
                    onClick={() => handleWhatsAppClick(product.name)}
                    className="w-full bg-primary-brown text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#5a3620] transition-colors duration-200 group-hover:shadow-md cursor-pointer"
                  >
                    <MessageCircle size={18} />
                    Contact on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buy;
