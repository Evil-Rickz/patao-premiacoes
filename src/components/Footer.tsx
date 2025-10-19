import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Award, Smartphone, Instagram, Facebook, Youtube } from "lucide-react";
import pataoLogo from "@/assets/patao-logo.png";
export function Footer() {
  return <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        {/* App Download Section */}
        <div className="mb-12">
          <Card className="gradient-primary p-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  📱 Baixe nosso APP Grátis
                </h3>
                <p className="text-primary-foreground/90">
                  Receba promoções exclusivas e acompanhe seus títulos!
                </p>
              </div>
              <div className="flex space-x-4">
                <Button variant="secondary" size="lg">
                  <Smartphone className="h-5 w-5 mr-2" />
                  Google Play
                </Button>
                <Button variant="secondary" size="lg">
                  <Smartphone className="h-5 w-5 mr-2" />
                  App Store
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img src={pataoLogo} alt="Patão Premiações" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground mb-4 leading-relaxed">
              O Patão Premiações é a plataforma de sorteios solidários que une diversão, prêmios incríveis 
              e impacto social. Cada título adquirido contribui para transformar vidas em todo o Brasil.
            </p>
            <div className="flex space-x-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-accent" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Award className="h-4 w-4 text-accent" />
                <span>Licenciado</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#campanhas" className="hover:text-primary transition-colors">Campanhas</a></li>
              <li><a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#ganhadores" className="hover:text-primary transition-colors">Ganhadores</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Regulamento</a></li>
              <li>
                <div className="text-sm">
                  <div>WhatsApp: (98) 98135-0326</div>
                  <div>Email: contato@pataopremiacoes.com.br</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-muted-foreground">Siga-nos:</span>
              <Button variant="ghost" size="sm">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="text-center text-muted-foreground">
              <p className="mb-2">© 2025 Patão Premiações. Todos os direitos reservados.</p>
              <p className="text-xs flex items-center justify-center">
                Desenvolvido com <Heart className="h-3 w-3 mx-1 text-red-500" /> pela equipe Patão
              </p>
            </div>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-8 p-4 bg-muted rounded-lg text-xs text-muted-foreground">
          <p className="mb-2">
            <strong>Aviso Legal:</strong> O Patão Premiações é uma plataforma de títulos de capitalização com modalidade de sorteio, 
            devidamente licenciada e regulamentada pela SUSEP. Os sorteios são baseados na Loteria Federal.
          </p>
          <p>
            Jogue com responsabilidade. Proibida a venda de títulos para menores de 18 anos. 
            Se você tem problemas com jogos, procure ajuda especializada.
          </p>
        </div>
      </div>
    </footer>;
}