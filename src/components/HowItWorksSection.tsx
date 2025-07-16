import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Users, Trophy, Heart } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    title: "1. Escolha sua Campanha",
    description: "Navegue pelas campanhas ativas e escolha aquela que mais desperta seu interesse. Cada campanha tem prêmios únicos e contribui para causas sociais importantes."
  },
  {
    icon: Users,
    title: "2. Adquira seus Títulos",
    description: "Selecione quantos títulos deseja adquirir. Quanto mais títulos, maiores suas chances de ganhar! O pagamento é seguro e você recebe confirmação imediata."
  },
  {
    icon: Trophy,
    title: "3. Aguarde o Sorteio",
    description: "Os sorteios são realizados com base na Loteria Federal, garantindo total transparência. Acompanhe em tempo real pelo nosso site ou app."
  },
  {
    icon: Heart,
    title: "4. Faça a Diferença",
    description: "Independente do resultado, você já está fazendo a diferença! Parte da arrecadação vai para projetos sociais que transformam vidas."
  }
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como <span className="gradient-primary bg-clip-text text-transparent">Funciona?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            É muito simples participar! Siga estes passos e concorra a prêmios incríveis enquanto ajuda quem precisa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <h3 className="text-2xl font-bold mb-4">🎯 Sorteios Transparentes</h3>
            <p className="text-muted-foreground mb-6">
              Todos os nossos sorteios são baseados na <strong>Loteria Federal</strong>, garantindo total transparência e confiabilidade. 
              Os números sorteados são públicos e verificáveis.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-accent/10 rounded-lg p-4">
                <div className="font-semibold text-accent">✅ 100% Transparente</div>
                <div className="text-muted-foreground">Baseado na Loteria Federal</div>
              </div>
              <div className="bg-accent/10 rounded-lg p-4">
                <div className="font-semibold text-accent">🔒 Totalmente Seguro</div>
                <div className="text-muted-foreground">Plataforma criptografada</div>
              </div>
              <div className="bg-accent/10 rounded-lg p-4">
                <div className="font-semibold text-accent">⚡ Resultado Imediato</div>
                <div className="text-muted-foreground">Divulgação automática</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}