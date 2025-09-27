import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-pirate text-3xl md:text-4xl text-pirate-green mb-4">
            CONTATO
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quer fazer parte da nossa tripulação ou tem alguma dúvida? Entre em
            contato conosco e venha navegar junto com os Bucaneiros!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-metal text-2xl text-pirate-gold mb-8">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <Card className="bg-card border-pirate-green/20 p-6 hover:shadow-pirate transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-metal text-pirate-gold mb-1">
                      Localização
                    </h4>
                    <p className="text-muted-foreground">Paraty - RJ</p>
                    <p className="text-sm text-muted-foreground">
                      Costa Verde e região
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border-pirate-green/20 p-6 hover:shadow-pirate transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-metal text-pirate-gold mb-1">
                      WhatsApp
                    </h4>
                    <p className="text-muted-foreground">(24) 99999-9999</p>
                    <p className="text-sm text-muted-foreground">
                      Fale diretamente conosco
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border-pirate-green/20 p-6 hover:shadow-pirate transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-metal text-pirate-gold mb-1">E-mail</h4>
                    <p className="text-muted-foreground">
                      contato@bucaneiros.com.br
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Resposta em até 24h
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-metal text-pirate-gold mb-4">
                Nos Siga nas Redes
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/bucaneirosparatymg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 p-2 rounded-full inline-flex items-center justify-center">
                  <Instagram className="text-black w-5 h-5" />
                </a>
                {/* <Button
                  size="icon"
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </Button> */}
              </div>
            </div>
          </div>

          {/* Join Us Form */}
          <div>
            <Card className="bg-card border-pirate-green/20 p-8 shadow-pirate">
              <h3 className="font-metal text-2xl text-pirate-gold mb-6 text-center">
                SEDE ABERTA TODAS ÀS QUARTAS FEIRAS
              </h3>

              <div className="space-y-6">
                <div className="bg-gradient-hero p-6 rounded-lg border border-pirate-green/30">
                  <h4 className="font-metal text-pirate-green mb-4">
                    Venha nos visitar!
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pirate-green rounded-full"></div>
                      Cerveja gelada e boa companhia garantida.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pirate-green rounded-full"></div>
                      Churrasco 0500
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pirate-green rounded-full"></div>
                      Espírito de irmandade
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pirate-green rounded-full"></div>
                      Respeitar o código dos Bucaneiros
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Entre em contato conosco pelo WhatsApp para iniciar seu
                    processo de admissão. Teremos prazer em conhecê-lo e
                    apresentar nossa irmandade!
                  </p>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-primary text-primary-foreground hover:shadow-pirate transform hover:scale-105 transition-all duration-300 font-metal">
                    FALAR NO WHATSAPP
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Location Map Placeholder */}
        <div className="mt-16">
          <Card className="bg-card border-pirate-green/20 p-8 text-center">
            <h3 className="font-metal text-pirate-gold mb-4">Nossa Região</h3>
            <p className="text-muted-foreground mb-6">
              Baseados em Paraty, exploramos as belíssimas estradas da Costa
              Verde, Serra da Mantiqueira e todo o litoral entre Rio de Janeiro
              e São Paulo.
            </p>
            <div className="bg-gradient-hero p-12 rounded-lg border border-pirate-green/30">
              <MapPin className="w-16 h-16 text-pirate-green mx-auto mb-4" />
              <p className="text-pirate-gold font-metal">PARATY - RJ</p>
              <p className="text-sm text-muted-foreground mt-2">
                Portal de entrada para as melhores trilhas e estradas do Brasil
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
