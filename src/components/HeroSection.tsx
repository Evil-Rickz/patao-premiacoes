import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, Heart, Trophy, DollarSign } from "lucide-react";
export function HeroSection() {
  return <section className="gradient-hero py-16 md:py-24 relative overflow-hidden">
      {/* Floating money bills decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <DollarSign className="absolute top-10 left-10 h-8 w-8 text-accent/30 floating-money" />
        <DollarSign className="absolute top-20 right-20 h-6 w-6 text-accent/40 floating-money" />
        <DollarSign className="absolute bottom-20 left-1/4 h-10 w-10 text-accent/20 floating-money" />
        <DollarSign className="absolute top-1/3 right-10 h-7 w-7 text-accent/35 floating-money" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Concorra a <span className="gradient-primary bg-clip-text text-transparent">Prêmios Incríveis</span> e Ajude uma Boa Causa!
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              No Patão Premiações, você concorre a prêmios fantásticos enquanto contribui para projetos sociais importantes. 
              Cada título adquirido faz a diferença!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" className="gradient-primary shadow-primary">
                <Trophy className="h-5 w-5 mr-2" />
                Ver Campanhas
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5 mr-2" />
                Saiba Mais
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">R$ 2.5M+</div>
                <div className="text-sm text-muted-foreground">Em Prêmios</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">15K+</div>
                <div className="text-sm text-muted-foreground">Ganhadores</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projetos Apoiados</div>
              </div>
            </div>
          </div>

          {/* Image/Mascot */}
          <div className="flex justify-center">
            <Card className="p-8 shadow-primary bg-gradient-to-br from-card to-secondary/20 rounded-full bg-orange-600">
              <img src="/lovable-uploads/fe96815c-a1f8-46ac-b24c-43cbe615b524.png" alt="Patão Premiações Mascot" className="w-full max-w-md mx-auto animate-bounce-gentle" />
            </Card>
          </div>
        </div>
      </div>
    </section>;
}