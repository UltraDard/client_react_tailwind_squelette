import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../Images/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary-lowest shadow-md">
      <div className="container py-4 flex items-center justify-between pl-16 md:pl-32">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/"><img src={Logo} alt="Logo" className="h-10 w-auto" /></Link>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-10 lg:pr-64">
          <div className="text-hightest hover:text-medium font-medium"><Link to="/">Accueil</Link></div>
          <div className="text-hightest hover:text-medium font-medium"><Link to="/connexion">Ma place</Link></div>
          <div className="text-hightest hover:text-medium font-medium"><Link to="/">Fréquentation</Link></div>
          <div className="text-hightest hover:text-medium font-medium"><Link to="/">Contact</Link></div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-200 focus:outline-none mr-16"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-hightest" />
          ) : (
            <Menu className="h-6 w-6 text-hightest" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 shadow-md">
          <div className="container mx-auto flex flex-col space-y-4 py-4 text-center">
            <div className="text-hightest hover:text-medium font-medium"><Link to="/">Accueil</Link></div>
            <div className="text-hightest hover:text-medium font-medium"><Link to="/connexion">Ma place</Link></div>
            <div className="text-hightest hover:text-medium font-medium"><Link to="/">Fréquentation</Link></div>
            <div className="text-hightest hover:text-medium font-medium"><Link to="/">Contact</Link></div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
