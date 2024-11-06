import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-10">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image
            src="/herai.png" // Update this path to the actual location of your logo file
            alt="Logo"
            width={100} // Adjust width as needed
            height={100} // Adjust height as needed
            className="mr-4"
          />
        </Link>
        
        {/* Navigation Links */}
        <nav className="justify-center flex-grow flex nav-primary" aria-label="Nav Menu">
          <ul id="menu-nav-menu" className="hidden lg:flex lg:items-center lg:gap-16">
            <li className="mega menu-item menu-item-type-custom menu-item-object-custom">
              <Link href="/">Home</Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page">
              <Link href="/portfolio">Projects</Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page">
              <Link href="/testimonials">Testmonials</Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="mega_about menu-item menu-item-type-post_type menu-item-object-page">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
