export default function TestimonialCard() {
    return (
      <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl">
        <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
        <p className="text-gray-600 mt-2 italic">“The service was excellent! The team was professional, and I am extremely satisfied with the results.”</p>
        <a href="#" className="text-blue-500 mt-4 inline-block hover:text-blue-600 transition-colors duration-200">
          Read More
        </a>
      </div>
    );
  }
  