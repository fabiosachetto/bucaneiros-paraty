import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import traidoresZero from "@/assets/images/eventos/traidores-2025/0.jpeg";
import traidoresUm from "@/assets/images/eventos/traidores-2025/1.jpeg";
import traidoresDois from "@/assets/images/eventos/traidores-2025/2.jpeg";
import traidoresTres from "@/assets/images/eventos/traidores-2025/3.jpeg";

const Galery = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJoc2woMCAwJSAyMCUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div id="carousel">
          {/* Carousel Traidores */}
          <h1 className="font-pirate text-4xl md:text-6xl lg:text-7xl mb-16 text-pirate-green drop-shadow-glow animate-pulse">
            Eventos
          </h1>

          <h2 className="font-pirate text-2xl md:text-4xl lg:text-5xl mb-10 text-pirate-green drop-shadow-glow animate-pulse">
            Aniversário de 7 anos do Moto Grupo Traidores
          </h2>

          <div className="mb-8 max-w-md mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="flex justify-center">
                    <div className="relative group">
                      <img
                        src={traidoresZero}
                        alt="Aniversário Traidores 2025"
                        className="w-40 h-40 md:w-48 md:h-48 object-contain filter drop-shadow-skull transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex justify-center">
                    <div className="relative group">
                      <img
                        src={traidoresUm}
                        alt="Bucaneiros"
                        className="w-40 h-40 md:w-48 md:h-48 object-contain filter drop-shadow-skull transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-pirate-green/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex justify-center">
                    <div className="relative group">
                      <img
                        src={traidoresDois}
                        alt="Bucaneiros"
                        className="w-40 h-40 md:w-48 md:h-48 object-contain filter drop-shadow-skull transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-pirate-green/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex justify-center">
                    <div className="relative group">
                      <img
                        src={traidoresTres}
                        alt="Bucaneiros"
                        className="w-40 h-40 md:w-48 md:h-48 object-contain filter drop-shadow-skull transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-pirate-green/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="border-pirate-green text-pirate-green hover:bg-pirate-green hover:text-primary-foreground" />
              <CarouselNext className="border-pirate-green text-pirate-green hover:bg-pirate-green hover:text-primary-foreground" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galery;
