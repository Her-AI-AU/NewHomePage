// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="text-gray-400">We are a creative agency dedicated to delivering top-notch solutions that help you succeed.</p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
            <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:info@example.com" className="hover:text-white transition-colors">info@example.com</a></li>
            <li>Phone: <a href="tel:+123456789" className="hover:text-white transition-colors">+1 (234) 567-89</a></li>
            <li>Address: 1234 Street, City, Country</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-facebook-f"></i> Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-twitter"></i> Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-instagram"></i> Instagram</a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Her.AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
