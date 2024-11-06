export default function PortfolioCard() {
    return (
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 group">
        <img
          src="https://via.placeholder.com/300"
          alt="Portfolio Item"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">Portfolio Item</h3>
          <p className="text-gray-600 mt-2">A short description of the portfolio item.</p>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-gray-800 py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
            View Project
          </button>
        </div>
      </div>
    );
  }
  