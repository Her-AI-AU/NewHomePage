import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-2 sticky top-0 z-10 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 lg:justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image
            src={process.env.NODE_ENV === 'development' ? '/herai.png' : '/NewHomePage/herai.png'}
            alt="Logo"
            width={120}  // 放大 Logo 尺寸
            height={120}
            priority
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1 p-2 focus:outline-none z-20"  // 提升 z-index 确保可点击
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-black transition-transform ${
              menuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-black transition-opacity ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-black transition-transform ${
              menuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen
              ? 'fixed top-0 left-0 w-full h-full bg-white/90 flex flex-col justify-center items-center animate-slideDown z-10' // 确保 z-index 低于关闭按钮
              : 'hidden lg:flex lg:flex-row lg:gap-12 lg:items-center'
          }`}
          aria-label="Nav Menu"
        >
          <ul className="flex flex-col lg:flex-row gap-6 lg:gap-8 text-center">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/portfolio" onClick={() => setMenuOpen(false)}>Projects</Link></li>
            <li><Link href="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
            <li><Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }

        li {
          animation: fadeIn 0.3s ease forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
