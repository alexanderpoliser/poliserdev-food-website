import { ChefHat, Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-white mt-auto">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and description */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <ChefHat className="w-8 h-8 text-primary" />
                            <span className="font-playfair text-2xl font-bold">Restaurante Poliser's</span>
                        </div>
                        <p className="text-gray-400">
                            No Restaurante Poliser's, acreditamos que jantar não é só comida, mas também uma experiência completa.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://facebook.com" className="hover:text-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com" className="hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com" className="hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Links rápidos</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link to="/" className="hover:text-primary transition-colors">Início</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-primary transition-colors">Sobre</Link>
                            </li>
                            <li>
                                <Link to="/menu" className="hover:text-primary transition-colors">Menu</Link>
                            </li>
                            <li>
                                <Link to="/booking" className="hover:text-primary transition-colors">Reserve uma mesa</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-primary transition-colors">Contato</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contato</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                <span>(123) 456-7890</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span>info@restaurantepolisers.com</span>
                            </li>
                            <li>
                                Av. Paulista, 1234 - Bela Vista

                                São Paulo - SP, 1234-5678
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Horário de funcionamento</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <span className="font-bold">Seg-Sex:</span> 11:00am - 20:00pm
                            </li>
                            <li>
                                <span className="font-bold">Sáb, Dom:</span> 9:00am - 22:00pm
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Restaurante Poliser's desenvolvido por Alexander Poliser. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;