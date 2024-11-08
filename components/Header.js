import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-2 sticky top-0 z-10 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 lg:justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image
            src={process.env.NODE_ENV === 'development' ? '/herai.png' : '/NewHomePage/herai.png'}
            alt="Logo"
            width={120}
            height={120}
            priority
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1 p-2 focus:outline-none z-20"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-black transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`w-6 h-0.5 bg-black transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`w-6 h-0.5 bg-black transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen
              ? 'fixed top-0 left-0 w-full h-full bg-white/90 flex flex-col justify-center items-center animate-slideDown z-10'
              : 'hidden lg:flex lg:flex-row lg:gap-12 lg:items-center'
          }`}
          aria-label="Nav Menu"
        >
          <ul className="flex flex-col lg:flex-row gap-6 lg:gap-8 text-center">
            {['Projects', 'Testimonials', 'Blog', 'About'].map((item, index) => (
              <li key={index} className="fade-in">
                <Link href={`/${item.toLowerCase()}`} className="nav-link" onClick={() => setMenuOpen(false)}>
                  {item}
                </Link>
              </li>
            ))}
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

        /* fade-in animation for each nav item */
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

        .fade-in {
          animation: fadeIn 0.3s ease forwards;
        }

        .nav-link {
          position: relative;
          font-size: 1rem;
          font-weight: 500;
          color: black;
          text-decoration: none;
          padding-bottom: 4px;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: gray;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background-color: black;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease, opacity 0.3s ease;
          opacity: 0;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
          opacity: 1;
        }
      `}</style>
    </header>
  );
}
