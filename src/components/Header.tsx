import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Trophy, User, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/fe96815c-a1f8-46ac-b24c-43cbe615b524.png" 
              alt="Patão Premiações" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#campanhas" className="text-foreground hover:text-primary transition-colors">
              Campanhas
            </a>
            <a href="#como-funciona" className="text-foreground hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Entrar
            </Button>
            <Button variant="default" size="sm" className="gradient-primary">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Meus Títulos
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden border-t transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}>
          <nav className="py-4 space-y-3">
            <a href="#campanhas" className="block text-foreground hover:text-primary transition-colors">
              Campanhas
            </a>
            <a href="#como-funciona" className="block text-foreground hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="#faq" className="block text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#contato" className="block text-foreground hover:text-primary transition-colors">
              Contato
            </a>
            <div className="pt-3 space-y-2">
              <Button variant="outline" size="sm" className="w-full">
                <User className="h-4 w-4 mr-2" />
                Entrar
              </Button>
              <Button variant="default" size="sm" className="w-full gradient-primary">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Meus Títulos
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}