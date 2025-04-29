import { Clock, DollarSign, Globe } from "lucide-react";

const DeliveryFeature = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 space-y-6">
                        <h2 className="font-playfair text-4xl font-bold">
                            Entrega de comida mais rápida da cidade
                        </h2>
                        <p className="text-gray-600">
                            Nossa missão é oferecer a entrega de comida mais rápida da cidade, sem abrir mão da qualidade e do cuidado em cada detalhe, para que você aproveite o melhor da gastronomia no conforto da sua casa
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-primary" />
                                </div>
                                <span>Entregas em até 45 minutos</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <DollarSign className="w-5 h-5 text-primary" />
                                </div>
                                <span>Melhores ofertas e preços</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Globe className="w-5 h-5 text-primary" />
                                </div>
                                <span>Disponível em diversos aplicativos</span>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <img
                            src="assets/chef 2.jpg"
                            alt="Chefe preparando a comida"
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeliveryFeature;