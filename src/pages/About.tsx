import { useRef, useState } from "react";
import { Clock, Play, ShoppingBag, Utensils } from "lucide-react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
        setFadeOut(true);
        setTimeout(() => {
            setIsPlaying(true);
        }, 500);
    };

    const handleVideoEnded = () => {
        setIsPlaying(false);
        setFadeOut(false);
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <div className="container mx-auto px-4 pt-32 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                    <div>
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                            Nós fornecemos pratos deliciosos para você e sua família.
                        </h1>
                        <p className="text-muted-foreground mb-8">
                            Nossa história começou com a visão de criar uma experiência gastronômica única que unisse alta gastronomia, serviço excepcional e um ambiente vibrante. Enraizados na rica cultura culinária da cidade, buscamos honrar nossas raízes locais e, ao mesmo tempo, infundir um paladar global.
                        </p>
                        <p className="text-muted-foreground">
                            No Restaurante Poliser's, acreditamos que jantar não é só comida, mas também uma experiência completa. Nossa equipe, reconhecida por sua cordialidade e dedicação, se esforça para tornar cada visita um evento inesquecível.
                        </p>

                        <div className="mt-8 bg-neutral-800 text-white p-6 rounded-lg space-y-4 max-w-sm">
                            <h3 className="font-semibold text-lg">Venha nos visitar</h3>
                            <div className="space-y-2 text-sm">
                                <p>(123) 456-7890</p>
                                <p>info@restaurantepolisers.com</p>
                                <p>Av. Paulista, 1234 - Bela Vista</p>
                                <p>São Paulo - SP, 1234-5678</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img
                            src="/assets/cheeseburguer.png"
                            alt="Signature dish"
                            className="rounded-lg w-full h-auto"
                        />
                    </div>
                </div>

                <div className="relative aspect-video w-full overflow-hidden">
                    <video
                        ref={videoRef}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src="/videos/hamburguer.mp4"
                        muted
                        onEnded={handleVideoEnded}
                    />
                    {!isPlaying && (
                        <div
                            className={`absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white z-10 transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"
                                }`}
                        >
                            <button
                                onClick={handlePlayClick}
                                className="bg-white/20 hover:bg-white/30 rounded-full p-4 mb-6 backdrop-blur-sm transition-colors"
                            >
                                <Play className="w-8 h-8 text-red-500" />
                            </button>
                            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center">
                                Em cada prato uma experiência
                            </h2>
                        </div>
                    )}
                </div>
            </div>

            <div className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <Utensils className="w-8 h-8" />
                        </div>
                        <h3 className="font-semibold mb-2">Multi-cozinha</h3>
                        <p className="text-muted-foreground text-sm">
                            Sabores de todo o mundo, preparados com excelência em um só lugar.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <ShoppingBag className="w-8 h-8" />
                        </div>
                        <h3 className="font-semibold mb-2">Fácil para pedir</h3>
                        <p className="text-muted-foreground text-sm">
                            Peça com facilidade e receba no conforto de sua casa.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <Clock className="w-8 h-8" />
                        </div>
                        <h3 className="font-semibold mb-2">Entrega rápida</h3>
                        <p className="text-muted-foreground text-sm">
                            Do nosso restaurante para sua porta, com rapidez e qualidade.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-32">
                    <div>
                        <h2 className="font-playfair text-4xl font-bold mb-6">
                            Algumas informações<br />
                            para o nosso valioso convidado
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            No Poliser's restaurante, nosso estilo de serviço é descontraído, mas focado na comida, mas também nas pequenas experiências. Nossa equipe é reconhecida por sua cordialidade e dedicação, e se esforça para tornar cada visita um evento inesquecível..
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="text-center">
                                        <p className="text-4xl font-playfair font-bold mb-2">3</p>
                                        <p className="text-sm text-muted-foreground">Localizações</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="text-center">
                                        <p className="text-4xl font-playfair font-bold mb-2">1995</p>
                                        <p className="text-sm text-muted-foreground">Fundado</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="text-center">
                                        <p className="text-4xl font-playfair font-bold mb-2">65+</p>
                                        <p className="text-sm text-muted-foreground">Funcionários</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="text-center">
                                        <p className="text-4xl font-playfair font-bold mb-2">100%</p>
                                        <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <div>
                        <img
                            src="assets/chef.png"
                            alt="Chef preparing food"
                            className="rounded-lg w-full h-auto"
                        />
                    </div>
                </div>

                <div className="mt-32">
                    <h2 className="font-playfair text-4xl font-bold text-center mb-16">
                        O que nossos clientes dizem
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-4 bg-[#F9F9F7] p-10 rounded">
                            <p className="text-red-600 font-semibold">"O melhor restaurante"</p>
                            <p className="text-muted-foreground">
                                Ontem à noite, jantamos em um lugar e ficamos simplesmente impressionados. Desde o momento em que entramos, fomos envoltos por uma atmosfera acolhedora e recebidos com sorrisos calorosos.
                            </p>
                            <div className="flex items-center gap-4 mt-6">
                                <img src="assets/model-1.jpg" alt="Foto de Sophia R." className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <p className="font-semibold">Sophia R.</p>
                                    <p className="text-sm text-muted-foreground">Curitiba, PR</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 bg-[#F9F9F7] p-10 rounded">
                            <p className="text-red-600 font-semibold">"Simplesmente fantástico"</p>
                            <p className="text-muted-foreground">
                                O local superou minhas expectativas em todos os aspectos. A ambientação era acolhedora e descontraída, tornando-o o lugar perfeito para o nosso jantar de aniversário. Cada prato foi preparado e apresentado de forma linda.
                            </p>
                            <div className="flex items-center gap-4 mt-6">
                                <img src="assets/model-3.png" alt="Foto de Matheus C." className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <p className="font-semibold">Matheus C.</p>
                                    <p className="text-sm text-muted-foreground">São Paulo, SP</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 bg-[#F9F9F7] p-10 rounded">
                            <p className="text-red-600 font-semibold">"Restaurante único"</p>
                            <p className="text-muted-foreground">
                                A experiência culinária no local é incomparável e possui uma infinidade de opções. A atmosfera é vibrante, a comida - simplesmente extraordinária. A comida foi o ponto alto da nossa noite. Altamente recomendado para todos.
                            </p>
                            <div className="flex items-center gap-4 mt-6">
                                <img src="assets/model-2.jpg" alt="Foto de Ana P." className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <p className="font-semibold">Ana P.</p>
                                    <p className="text-sm text-muted-foreground">Balneário Camboriú, SC</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
