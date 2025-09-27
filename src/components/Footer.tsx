import { Anchor, Heart } from "lucide-react";
import logoBucaneiros from "@/assets/logo-bucaneiros.jpg";

const Footer = () => {
  return (
    <footer className="bg-pirate-black border-t border-pirate-green/20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img
                src={logoBucaneiros}
                alt="Bucaneiros Logo"
                className="w-12 h-12 object-contain filter drop-shadow-glow"
              />
              <div>
                <h3 className="font-pirate text-xl text-pirate-green">
                  BUCANEIROS
                </h3>
                <p className="font-metal text-xs text-pirate-gold tracking-wider">
                  MOTO GRUPO
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
              Navegando pelas estradas com o espírito pirata desde sempre.
              Irmandade, lealdade e paixão pelas duas rodas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-metal text-pirate-gold mb-4 tracking-wider">
              NAVEGAÇÃO
            </h4>
            <div className="space-y-2">
              <a
                href="#hero"
                className="block text-sm text-muted-foreground hover:text-pirate-green transition-colors duration-300">
                Início
              </a>
              <a
                href="#about"
                className="block text-sm text-muted-foreground hover:text-pirate-green transition-colors duration-300">
                Nossa História
              </a>
              <a
                href="#contact"
                className="block text-sm text-muted-foreground hover:text-pirate-green transition-colors duration-300">
                Contato
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-metal text-pirate-gold mb-4 tracking-wider">
              CONTATO
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Paraty - RJ</p>
              <p>contato@bucaneiros.com.br</p>
              <p>(24) 99999-9999</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pirate-green/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Anchor className="w-4 h-4 text-pirate-green" />
              <span>
                © 2025 Bucaneiros Moto Grupo. Todos os direitos reservados.
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-pirate-green fill-current" />
              <span>para a irmandade</span>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-4">
            <div className="h-px bg-gradient-to-r from-transparent via-pirate-green to-transparent w-16"></div>
            <span className="font-pirate text-sm text-pirate-green/60">⚓</span>
            <div className="h-px bg-gradient-to-r from-transparent via-pirate-green to-transparent w-16"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
