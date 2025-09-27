import { Card } from "@/components/ui/card";
import { Anchor, Users, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-pirate text-3xl md:text-4xl text-pirate-green mb-4">
            NOSSA HISTÓRIA
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nascidos das estradas de Paraty, somos mais que um moto grupo - somos uma família unida pelo amor às duas rodas e pelo código de honra dos antigos navegadores.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="font-metal text-2xl text-pirate-gold mb-6">O Espírito Bucaneiro</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Assim como os antigos piratas navegavam pelos mares em busca de aventura e liberdade, 
              nós navegamos pelas estradas brasileiras, explorando novos horizontes e vivendo cada 
              quilômetro com intensidade.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Nossa base em Paraty, cidade histórica entre Rio de Janeiro e Minas Gerais, nos 
              conecta com as raízes do Brasil colonial e o espírito aventureiro dos antigos exploradores.
            </p>
            <p className="text-pirate-green font-medium">
              "Lealdade, Irmandade e Liberdade - nossos valores eternos."
            </p>
          </div>
          
          <div className="relative">
            <Card className="bg-card border-pirate-green/20 p-8 shadow-pirate">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Users className="w-12 h-12 text-pirate-green mx-auto mb-3" />
                  <h4 className="font-metal text-pirate-gold mb-2">IRMANDADE</h4>
                  <p className="text-sm text-muted-foreground">Unidos como família</p>
                </div>
                <div className="text-center">
                  <Anchor className="w-12 h-12 text-pirate-green mx-auto mb-3" />
                  <h4 className="font-metal text-pirate-gold mb-2">TRADIÇÃO</h4>
                  <p className="text-sm text-muted-foreground">Honrando o passado</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-pirate-green mx-auto mb-3" />
                  <h4 className="font-metal text-pirate-gold mb-2">AVENTURA</h4>
                  <p className="text-sm text-muted-foreground">Sempre em movimento</p>
                </div>
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-pirate-green mx-auto mb-3" />
                  <h4 className="font-metal text-pirate-gold mb-2">EVENTOS</h4>
                  <p className="text-sm text-muted-foreground">Encontros épicos</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 border border-pirate-green/20">
          <h3 className="font-pirate text-2xl md:text-3xl text-center text-pirate-green mb-8">
            CÓDIGO DOS BUCANEIROS
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h4 className="font-metal text-pirate-gold mb-3">RESPEITO MÚTUO</h4>
              <p className="text-sm text-muted-foreground">
                Cada membro é valorizado e respeitado, independente da moto ou experiência.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h4 className="font-metal text-pirate-gold mb-3">UNIÃO E LEALDADE</h4>
              <p className="text-sm text-muted-foreground">
                Apoiamos uns aos outros tanto nas estradas quanto na vida.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h4 className="font-metal text-pirate-gold mb-3">PAIXÃO PELAS MOTOS</h4>
              <p className="text-sm text-muted-foreground">
                Compartilhamos o amor genuíno pelas duas rodas e pela liberdade que elas proporcionam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;