import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChefHat, Mail, Phone, Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { Button } from "@/components/ui/button"; // ajuste o caminho conforme seu projeto

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary" : "hover:text-primary";
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 border-b text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@restaurantepolisers.com</span>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <ChefHat className="w-8 h-8 text-primary" />
            <span className="font-playfair text-2xl font-bold">Restaurante Poliser's</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className={isActive("/") + " transition-colors"}>Início</Link>
            <Link to="/about" className={isActive("/about") + " transition-colors"}>Sobre</Link>
            <Link to="/menu" className={isActive("/menu") + " transition-colors"}>Menu</Link>
            <Link to="/contact" className={isActive("/contact") + " transition-colors"}>Contato</Link>
          </nav>

          {/* Botão reserva (só desktop) */}
          <Link to="/booking" className="hidden md:block">
            <Button size="lg" className="bg-primary hover:bg-primary/90 bg-transparent hover:bg-primary/90 font-semibold hover:text-white text-red-700 py-2 px-4 border border-red-500 hover:border-transparent rounded">
              Reserve uma mesa
            </Button>
          </Link>

          {/* Botão Hamburger (só mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="block md:hidden text-primary focus:outline-none"
          >
            {isMobileMenuOpen ? <CloseIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center gap-6 py-4 bg-white shadow-md">
            <Link to="/" className={isActive("/") + " transition-colors"} onClick={() => setIsMobileMenuOpen(false)}>Início</Link>
            <Link to="/about" className={isActive("/about") + " transition-colors"} onClick={() => setIsMobileMenuOpen(false)}>Sobre</Link>
            <Link to="/menu" className={isActive("/menu") + " transition-colors"} onClick={() => setIsMobileMenuOpen(false)}>Menu</Link>
            <Link to="/contact" className={isActive("/contact") + " transition-colors"} onClick={() => setIsMobileMenuOpen(false)}>Contato</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
