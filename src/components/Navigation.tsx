import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoBSS from "@/assets/logo-bucaneiros.jpg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-pirate-green/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logoBSS}
              alt="BSS Logo"
              className="w-10 h-10 object-contain filter drop-shadow-glow"
            />
            <span className="font-metal text-lg text-pirate-green tracking-wider">
              BUCANEIROS MG
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="font-metal text-sm text-muted-foreground hover:text-pirate-green transition-colors duration-300 tracking-wide">
              INÍCIO
            </button>
            <button
              onClick={() => scrollToSection("carousel")}
              className="font-metal text-sm text-muted-foreground hover:text-pirate-green transition-colors duration-300 tracking-wide">
              EVENTOS
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-metal text-sm text-muted-foreground hover:text-pirate-green transition-colors duration-300 tracking-wide">
              SOBRE
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-metal text-sm text-muted-foreground hover:text-pirate-green transition-colors duration-300 tracking-wide">
              CONTATO
            </button>
            {/* <Button
              size="sm"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-metal text-xs tracking-wider"
              onClick={() => scrollToSection("contact")}>
              ?
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-pirate-green"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-pirate-green/20">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="font-metal text-sm text-muted-foreground hover:text-pirate-green transition-colors duration-300 tracking-wide text-left">
                INÍCIO
              </button>
              <button
                onClick={() => scrollToSection("carousel")}
                className="font-metal text-sm text-muted-foreground hover:text-pirate-green transition-colors duration-300 tracking-wide text-left">
                EVENTOS
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="font-metal text-sm text-muted-foreground hover:text-pirate-green transition-colors duration-300 tracking-wide text-left">
                SOBRE
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="font-metal text-sm text-muted-foreground hover:text-pirate-green transition-colors duration-300 tracking-wide text-left">
                CONTATO
              </button>
              {/* <Button
                size="sm"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-metal text-xs tracking-wider w-fit"
                onClick={() => scrollToSection("contact")}>
                JUNTE-SE
              </Button> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
