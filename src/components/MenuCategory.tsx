
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface MenuCategoryProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  categoryId: string;
}

const MenuCategory = ({ title, icon, description, categoryId }: MenuCategoryProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
        <h3 className="font-playfair text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <Link to={`/menu?category=${categoryId}`}>
          <Button variant="outline" className="hover:bg-primary hover:text-white transition-colors">
            Explorar menu
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
