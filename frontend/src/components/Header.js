import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBavDropdownOpen, setIsBavDropdownOpen] = useState(false);

  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 w-full z-50 bg-acencia border-b border-acencia-blue/30 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Clean & Professional */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center transition-opacity duration-200 hover:opacity-80">
              <span className="text-2xl font-semibold text-white tracking-tight font-heading">
                ACENCIA
              </span>
            </Link>
          </div>

          {/* Navigation Links - Clean & Minimal */}
          <nav className="hidden md:flex items-center space-x-8">
            <div 
              className="relative group"
              onMouseEnter={() => setIsBavDropdownOpen(true)}
              onMouseLeave={() => setIsBavDropdownOpen(false)}
            >
              <Link 
                to="/die-bav" 
                className="text-acencia-blue hover:text-white font-medium text-sm transition-colors duration-200 py-2"
              >
                bAV
              </Link>
              
              {/* Clean Dropdown */}
              <div className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-sm py-2 transition-all duration-200 ${
                isBavDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <Link 
                  to="/die-bav/x" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                >
                  Für Unternehmen
                </Link>
                <Link 
                  to="/die-bav/y" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                >
                  Für Arbeitnehmer
                </Link>
                <Link 
                  to="/die-bav/aktuelles" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                >
                  Aktuelles
                </Link>
              </div>
            </div>
            
            <Link 
              to="/bkv" 
              className="text-acencia-blue hover:text-white font-medium text-sm transition-colors duration-200 py-2"
            >
              bKV
            </Link>
            
            <Link 
              to="/buv" 
              className="text-acencia-blue hover:text-white font-medium text-sm transition-colors duration-200 py-2"
            >
              bUV
            </Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <Link 
                to="/ueber-uns" 
                className="text-acencia-blue hover:text-white font-medium text-sm transition-colors duration-200 py-2"
              >
                Über uns
              </Link>
              
              <div className={`absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-sm py-2 transition-all duration-200 ${
                isAboutDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <Link 
                  to="/ueber-uns/service-team" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                >
                  Service-Team
                </Link>
              </div>
            </div>
            
            <Link 
              to="/kontakt" 
              className="text-acencia-blue hover:text-white font-medium text-sm transition-colors duration-200 py-2"
            >
              Kontakt
            </Link>
          </nav>

          {/* Primary CTA - Professional */}
          <div className="flex items-center space-x-3">
            <button 
              className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-acencia-orange focus:ring-offset-2 focus:ring-offset-acencia"
              onClick={() => window.open('https://www.smartcloudservices.de/acencia/vp-login/', '_blank')}
            >
              Login VP
            </button>
            <button 
              className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-acencia-orange focus:ring-offset-2 focus:ring-offset-acencia"
              onClick={() => window.open('https://www.smartcloudservices.de/acencia/login/login.do', '_blank')}
            >
              Login HR
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-acencia-blue hover:text-white p-2 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Clean Overlay */}
        <div className={`md:hidden transition-all duration-200 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 py-4 space-y-1 bg-acencia border-t border-acencia-blue/30">
            <Link
              to="/die-bav"
              className="block py-3 text-acencia-blue hover:text-white font-medium text-sm transition-colors duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              bAV
            </Link>
            <Link
              to="/bkv"
              className="block py-3 text-acencia-blue hover:text-white font-medium text-sm transition-colors duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              bKV
            </Link>
            <Link
              to="/buv"
              className="block py-3 text-acencia-blue hover:text-white font-medium text-sm transition-colors duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              bUV
            </Link>
            <Link
              to="/ueber-uns"
              className="block py-3 text-acencia-blue hover:text-white font-medium text-sm transition-colors duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              Über uns
            </Link>
            <Link
              to="/kontakt"
              className="block py-3 text-acencia-blue hover:text-white font-medium text-sm transition-colors duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
            
            <div className="pt-4 space-y-3">
              <button 
                className="w-full bg-acencia-orange hover:bg-acencia-orange/90 text-white py-3 rounded-lg text-sm font-medium transition-colors duration-200"
                onClick={() => {
                  window.open('https://www.smartcloudservices.de/acencia/vp-login/', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                Login VP
              </button>
              <button 
                className="w-full bg-acencia-orange hover:bg-acencia-orange/90 text-white py-3 rounded-lg text-sm font-medium transition-colors duration-200"
                onClick={() => {
                  window.open('https://www.smartcloudservices.de/acencia/login/login.do', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                Login HR
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;