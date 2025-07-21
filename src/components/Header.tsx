import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll(); // Run once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "sticky bg-white border-b border-gray-200 shadow"
          : "absolute bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="./logo.png"
            alt="Urban Pinnacle Logo"
            className={`h-16 w-auto transition duration-300`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                isActive(item.href)
                  ? scrolled
                    ? "text-primary"
                    : "text-white"
                  : scrolled
                  ? "text-muted-foreground"
                  : "text-white/80"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/contact">
            <Button
              variant="outline"
              size="sm"
              className={`flex items-center justify-center gap-2 transition-colors ${
                scrolled ? "text-black border-black" : "text-white border-white"
              }`}
            >
              <Phone size={16} />
              Call Us
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className={`md:hidden border-t transition-colors duration-300 ${
            scrolled
              ? "bg-white shadow border-gray-200"
              : "bg-white/10 backdrop-blur-md border-white/20"
          }`}
        >
          <nav className="px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? scrolled
                      ? "text-primary"
                      : "text-white"
                    : scrolled
                    ? "text-muted-foreground"
                    : "text-white/80"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button
                variant="outline"
                size="sm"
                className={`w-full flex items-center justify-center gap-2 mt-4 transition-colors ${
                  scrolled
                    ? "text-black border-black"
                    : "text-white border-white"
                }`}
              >
                <Phone size={16} />
                Call Us
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
