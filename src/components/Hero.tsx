import { Button } from "@/components/ui/button";
import logoBSS from "@/assets/logo-bss.jpg";
import logoBucaneiros from "@/assets/logo-bucaneiros.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJoc2woMCAwJSAyMCUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 mt-28 mb-8 ">
        {/* Logos */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          <div className="relative group">
            <img
              src={logoBSS}
              alt="BSS Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain filter drop-shadow-skull transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-pirate-green/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          </div>

          <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-pirate-green to-transparent"></div>

          <div className="relative group">
            <img
              src={logoBucaneiros}
              alt="Bucaneiros Logo"
              className="w-40 h-40 md:w-48 md:h-48 object-contain filter drop-shadow-skull transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-pirate-green/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-pirate text-4xl md:text-6xl lg:text-7xl mb-4 text-pirate-green drop-shadow-glow animate-pulse">
          BUCANEIROS
        </h1>

        <h2 className="font-metal text-xl md:text-2xl lg:text-3xl mb-6 text-foreground tracking-wider">
          MOTO GRUPO
        </h2>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-pirate-green to-transparent w-20"></div>
          <span className="font-metal text-pirate-gold text-lg tracking-widest">
            PARATY - RJ
          </span>
          <div className="h-px bg-gradient-to-r from-transparent via-pirate-green to-transparent w-20"></div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Irmandade sobre duas rodas. Unidos pelo asfalto, fortalecidos pelo
          espírito pirata.
          <br />
          <span className="text-pirate-green font-semibold">
            Navegando pelas estradas como verdadeiros bucaneiros.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <Button
            size="lg"
            className="bg-gradient-primary text-primary-foreground hover:shadow-pirate transform hover:scale-105 transition-all duration-300 font-metal tracking-wide">
            JUNTE-SE À TRIPULAÇÃO
          </Button> */}
          <Button
            variant="outline"
            size="lg"
            className="border-pirate-green text-pirate-green hover:bg-pirate-green hover:text-primary-foreground transition-all duration-300 font-metal tracking-wide">
            CONHEÇA NOSSA HISTÓRIA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
