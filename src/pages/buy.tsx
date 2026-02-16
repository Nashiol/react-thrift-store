import { MessageCircle } from 'lucide-react';

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
    price: 'K150',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    name: 'Cargo Utility Pants',
    category: 'Bottoms',
    price: 'K250',
    image: 'https://images.unsplash.com/photo-1517445312882-566b539c9ee0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    name: 'Denim Carpenter Shorts',
    category: 'Shorts',
    price: 'K180',
    image: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 4,
    name: 'Pleated Chino Trousers',
    category: 'Bottoms',
    price: 'K220',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 5,
    name: 'Athletic Sweat Shorts',
    category: 'Shorts',
    price: 'K120',
    image: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 6,
    name: 'Slim Fit Jeans',
    category: 'Bottoms',
    price: 'K200',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }
];

const Buy = () => {
  const handleWhatsAppClick = (productName: string) => {
    const phoneNumber = '260000000000'; // Placeholder
    const message = `Hi I am interested in ${productName}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F5EBDD] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2B2B2B] mb-2 text-center">Shop Collection</h1>
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
                <div className="absolute top-2 right-2 bg-[#F5EBDD] text-[#6B4226] text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-[#2B2B2B] line-clamp-1">{product.name}</h3>
                </div>
                <p className="text-[#A67B5B] font-semibold mb-4">{product.price}</p>

                <div className="mt-auto">
                  <button
                    onClick={() => handleWhatsAppClick(product.name)}
                    className="w-full bg-[#6B4226] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#5a3620] transition-colors duration-200 group-hover:shadow-md cursor-pointer"
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
