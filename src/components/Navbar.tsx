import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Cars', path: '/cars' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled ? 'bg-background/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <Car className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl">GlobalAuto</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'font-medium transition-colors hover:text-primary',
                location.pathname === link.path ? 'text-primary' : 'text-foreground/80'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg animate-in slide-in-from-top-5 duration-300">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'py-2 font-medium transition-colors hover:text-primary',
                  location.pathname === link.path ? 'text-primary' : 'text-foreground/80'
                )}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link to="/contact" onClick={closeMenu}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;