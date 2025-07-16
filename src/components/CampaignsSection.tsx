import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Users, Gift, Clock } from "lucide-react";

const campaigns = [
  {
    id: 1,
    title: "iPhone 15 Pro Max + R$ 10.000",
    description: "Concorra ao iPhone mais avançado da Apple + R$ 10.000 em dinheiro para você aproveitar!",
    prize: "iPhone 15 Pro Max + R$ 10.000",
    ticketPrice: "R$ 15,00",
    totalTickets: 5000,
    soldTickets: 3250,
    endDate: "2024-01-15",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Notebook Gamer + Setup Completo",
    description: "Um setup gamer completo para você dominar todos os jogos!",
    prize: "Notebook Gamer RTX 4060 + Periféricos",
    ticketPrice: "R$ 25,00",
    totalTickets: 3000,
    soldTickets: 1800,
    endDate: "2024-01-20",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    featured: false
  },
  {
    id: 3,
    title: "R$ 50.000 em Dinheiro",
    description: "Cinquenta mil reais para você realizar seus sonhos!",
    prize: "R$ 50.000 em dinheiro",
    ticketPrice: "R$ 20,00",
    totalTickets: 4000,
    soldTickets: 2100,
    endDate: "2024-01-25",
    image: "https://images.unsplash.com/photo-1554672723-d42a16e533db?w=400&h=300&fit=crop",
    featured: false
  }
];

export function CampaignsSection() {
  return (
    <section id="campanhas" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Campanhas <span className="gradient-primary bg-clip-text text-transparent">Ativas</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Escolha sua campanha favorita e concorra a prêmios incríveis!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => {
            const progress = (campaign.soldTickets / campaign.totalTickets) * 100;
            const daysLeft = Math.ceil((new Date(campaign.endDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24));
            
            return (
              <Card key={campaign.id} className={`overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 ${campaign.featured ? 'ring-2 ring-primary shadow-primary' : ''}`}>
                {campaign.featured && (
                  <Badge className="absolute top-4 right-4 z-10 gradient-primary">
                    Destaque
                  </Badge>
                )}
                
                <div className="relative">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 left-2">
                    <Badge variant="secondary" className="bg-card/90 backdrop-blur">
                      <Clock className="h-3 w-3 mr-1" />
                      {daysLeft} dias
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg">{campaign.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{campaign.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-accent">🏆 {campaign.prize}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso</span>
                      <span>{campaign.soldTickets} / {campaign.totalTickets}</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                      {campaign.soldTickets} participantes
                    </div>
                    <div className="font-bold text-primary text-lg">
                      {campaign.ticketPrice}
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button className="w-full gradient-primary">
                    <Gift className="h-4 w-4 mr-2" />
                    Participar Agora
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Todas as Campanhas
          </Button>
        </div>
      </div>
    </section>
  );
}