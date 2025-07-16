import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Como posso acessar minhas compras?",
    answer: "Existem duas formas de acessar suas compras: (1) Faça login no site, abra o menu e clique em 'Entrar', ou (2) Visite a campanha e clique em 'Compras' logo abaixo de 'Chances'. Você também pode baixar nosso app para acompanhar tudo pelo celular."
  },
  {
    question: "Como funciona o processo do sorteio?",
    answer: "Todos os sorteios são realizados com base na extração da Loteria Federal, garantindo total transparência e confiabilidade. Os números são extraídos de forma pública e podem ser verificados no site oficial da Caixa Econômica Federal."
  },
  {
    question: "Onde o prêmio será entregue?",
    answer: "Não se preocupe com a entrega! Cuidamos de todos os trâmites relacionados à entrega do prêmio. Para prêmios em dinheiro, o valor é depositado diretamente na sua conta. Para prêmios físicos, entregamos em qualquer lugar do Brasil."
  },
  {
    question: "Qual entidade é beneficiada pelo Patão Premiações?",
    answer: "O Patão Premiações destina parte da arrecadação para organizações sociais certificadas que trabalham com educação, saúde e assistência social. Apoiamos projetos que transformam vidas e fortalecem comunidades em todo o Brasil."
  },
  {
    question: "Como posso ter certeza de que é confiável?",
    answer: "Somos uma plataforma licenciada e regulamentada. Todos os sorteios seguem a legislação brasileira, utilizamos sistemas de pagamento seguros e temos histórico comprovado de pagamentos. Além disso, você pode verificar os ganhadores anteriores em nosso site."
  },
  {
    question: "Posso comprar títulos para outras pessoas?",
    answer: "Sim! Você pode adquirir títulos como presente para familiares e amigos. Basta informar os dados da pessoa durante a compra. É uma ótima forma de presentear alguém especial e ainda contribuir para uma boa causa."
  },
  {
    question: "Como recebo o dinheiro se eu ganhar?",
    answer: "Prêmios em dinheiro são depositados diretamente na conta bancária informada durante o cadastro. O depósito é feito em até 48 horas após a confirmação do sorteio. Para valores acima de R$ 10.000, seguimos todos os protocolos legais exigidos."
  },
  {
    question: "Existe alguma taxa ou desconto no prêmio?",
    answer: "Para prêmios em dinheiro acima de R$ 1.903,98, incide o Imposto de Renda conforme a legislação brasileira. Já para prêmios físicos (carros, eletrônicos, etc.), não há descontos - você recebe exatamente o que está descrito na campanha."
  }
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas <span className="gradient-primary bg-clip-text text-transparent">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre como funciona o Patão Premiações
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <Collapsible 
                open={openItems.has(index)} 
                onOpenChange={() => toggleItem(index)}
              >
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="hover:bg-secondary/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <CardTitle className="text-left text-lg font-semibold">
                          {faq.question}
                        </CardTitle>
                      </div>
                      <ChevronDown 
                        className={cn(
                          "h-5 w-5 text-muted-foreground transition-transform duration-200 flex-shrink-0",
                          openItems.has(index) ? "transform rotate-180" : ""
                        )}
                      />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed pl-8">
                      {faq.answer}
                    </p>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Ainda tem dúvidas?</h3>
              <p className="text-muted-foreground mb-4">
                Nossa equipe está sempre pronta para ajudar você!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center">
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-primary">(11) 99999-9999</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">E-mail</div>
                  <div className="text-primary">contato@pataoremiacoes.com.br</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">Horário</div>
                  <div className="text-muted-foreground">Segunda à Sexta, 8h às 18h</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}