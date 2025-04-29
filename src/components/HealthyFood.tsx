import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

const HealthyFood = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="rounded-lg overflow-hidden">
                        <AspectRatio ratio={4 / 3}>
                            <img
                                src="assets/food.png"
                                alt="Comidas saborosas"
                                className="w-full h-full object-cover"
                            />
                        </AspectRatio>
                    </div>

                    <div className="space-y-6">
                        <h2 className="font-playfair text-4xl font-bold">
                            Nós fornecemos experiências através da comida
                        </h2>
                        <p className="text-gray-600">
                            Nossa história começou com a visão de criar uma experiência gastronômica única, unindo alta gastronomia, serviço excepcional e um ambiente vibrante. Inspirados pela rica cultura culinária da cidade, buscamos honrar nossas raízes locais enquanto incorporamos sabores do mundo todo.
                        </p>
                        <p className="text-gray-600">
                            Aqui, acreditamos que uma refeição vai além dos pratos servidos — é sobre toda a experiência. Nossa equipe, reconhecida pela hospitalidade e dedicação, se empenha para tornar cada visita um momento verdadeiramente inesquecível.
                        </p>
                        <Link to={"/about"}>
                            <Button variant="outline" className="mt-4">
                                Mais sobre nós
                            </Button>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HealthyFood;