
import { useEffect, useState } from "react";
import { UtensilsCrossed, Coffee, Wine, ChefHat, CakeSlice } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "react-router-dom";

type Category = "all" | "breakfast" | "main" | "drinks" | "desserts";
type MenuItem = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: Exclude<Category, "all">;
};

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Ovos Fritos",
    price: "$9.99",
    description: "Ovos fritos preparados com sal, óleo e outros ingredientes frescos.",
    image: "assets/eggs.png",
    category: "breakfast"
  },
  {
    id: 2,
    name: "Pizza Italiana",
    price: "$15.99",
    description: "Pizza com molho de tomate, queijo, presunto e calabresa, com uma crosta crocante.",
    image: "assets/pizza.png",
    category: "main"
  },
  {
    id: 3,
    name: "Coquetel Martinez",
    price: "$7.25",
    description: "Um clássico coquetel feito com gin, vermute doce e um toque de maraschino.",
    image: "assets/cocktail.png",
    category: "drinks"
  },
  {
    id: 4,
    name: "Bolo",
    price: "$20.99",
    description: "Delicioso bolo de chocolate coberto com glacê, perfeito para sobremesa.",
    image: "assets/cake.png",
    category: "desserts"
  },
  {
    id: 5,
    name: "Limonada de Menta",
    price: "$5.89",
    description: "Refrescante limonada com um toque de menta, ideal para dias quentes.",
    image: "assets/lemonade.png",
    category: "drinks"
  },
  {
    id: 6,
    name: "Sorvete de Chocolate",
    price: "$18.05",
    description: "Sorvete cremoso de chocolate, feito com cacau de alta qualidade e servido com calda de chocolate.",
    image: "assets/icecream.png",
    category: "desserts"
  },
  {
    id: 7,
    name: "Hambúrguer de Queijo",
    price: "$12.55",
    description: "Hambúrguer suculento com queijo derretido, bacon e molho especial, servido no pão macio.",
    image: "assets/cheeseburguer.png",
    category: "main"
  },
  {
    id: 8,
    name: "Waffles Clássicos",
    price: "$12.99",
    description: "Waffles dourados e crocantes, servidos com mel, frutas e um toque de chantilly.",
    image: "assets/waffles.png",
    category: "breakfast"
  }
];


const Menu = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam as Category);
    }
  }, [location.search]);

  const filteredItems = selectedCategory === "all"
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const categories = [
    { id: "all", label: "Todos", icon: UtensilsCrossed },
    { id: "breakfast", label: "Café da manhã", icon: Coffee },
    { id: "main", label: "Pratos principais", icon: UtensilsCrossed },
    { id: "drinks", label: "Drinks", icon: Wine },
    { id: "desserts", label: "Sobremesas", icon: CakeSlice }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Nosso Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra novos sabores e experiências gastronômicas em nosso menu
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id as Category)}
              className="flex items-center gap-2"
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-playfair font-semibold text-lg">{item.name}</h3>
                  <span className="text-primary font-semibold">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold mb-4">Você pode fazer pedidos por meio de aplicativos</h2>
            <p className="text-gray-600">
              Experimente a praticidade de pedir pelo app de sua preferência e receba sua comida quentinha em casa.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {
              [
                { name: "Ifood", image: "/assets/ifood.png" },
                { name: "Uber Eats", image: "/assets/ubereats.png" },
                { name: "DoorDash", image: "/assets/doordash.png" },
                { name: "Instacart", image: "/assets/instacart.png" },
                { name: "Foodpanda", image: "/assets/foodpanda.png" },
                { name: "Deliveroo", image: "/assets/deliveroo.png" },
                { name: "Didi Food", image: "/assets/didifood.png" },
                { name: "GrubHub", image: "/assets/grubhub.png" },
                { name: "Postmates", image: "/assets/postmates.png" },
                
              ].map((app) => (
                <div
                  key={app.name}
                  className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-center hover:shadow-md transition-shadow"
                >
                  {app.image ? (
                    <img src={app.image} alt={app.name} className="max-h-12 max-w-full" />
                  ) : (
                    <span className="text-gray-800 font-medium">{app.name}</span>
                  )}
                </div>
              ))
            }
          </div>

        </div>
      </main>
    </div>
  );
};

export default Menu;
