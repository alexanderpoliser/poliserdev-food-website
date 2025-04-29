
import { Book, ChefHat, Coffee, UtensilsCrossed, Wine, CakeSlice } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import MenuCategory from "@/components/MenuCategory";
import { Link } from "react-router-dom";
import DeliveryFeature from "@/components/DeliveryFeature";
import HealthyFood from "@/components/HealthyFood";

const HomePage = () => {
  const categories = [
    {
      title: "Café da manhã",
      icon: <Coffee className="w-8 h-8" />,
      description: "Para começar bem seu dia",
      categoryId: "breakfast"
    },
    {
      title: "Pratos principais",
      icon: <UtensilsCrossed className="w-8 h-8" />,
      description: "Saboreie as criações exclusivas",
      categoryId: "main"
    },
    {
      title: "Drinks",
      icon: <Wine className="w-8 h-8" />,
      description: "Bebidas perfeitamente combinadas",
      categoryId: "drinks"
    },
    {
      title: "Sobremesas",
      icon: <CakeSlice className="w-8 h-8" />,
      description: "Finais doces para sua refeição",
      categoryId: "desserts"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
        <div
          className="absolute inset-0 bg-black/50 z-10"
          style={{
            backgroundImage: `url(/assets/home-bg.png)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="container mx-auto text-center relative z-20">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            A melhor comida para seu paladar
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Descubra uma culinária deliciosa e momentos inesquecíveis em nosso acolhedor refúgio culinário.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                Reserve uma mesa
              </Button>
            </Link>
            <Link to="/menu">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                Explorar menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Browse Menu Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-4">Conheça Nosso Menu</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">

              Experimente a excelência culinária com nosso cardápio diversificado,
              elaborado com paixão e os melhores ingredientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <MenuCategory
                key={category.title}
                title={category.title}
                icon={category.icon}
                description={category.description}
                categoryId={category.categoryId}
              />
            ))}
          </div>
        </div>
      </section>

      <HealthyFood />

      <DeliveryFeature />
    </div>
  );
};

export default HomePage;
