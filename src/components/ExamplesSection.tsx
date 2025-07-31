import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function ExamplesSection() {
  const examples = [
    {
      title: "Маркировка на темном пластике",
      image: "/img/b7ad53a9-a737-4506-9e78-faf44932bde9.jpg",
      description: "Четкие штрих-коды и серийные номера"
    },
    {
      title: "Микротекст на прозрачном пластике", 
      image: "/img/b7ad53a9-a737-4506-9e78-faf44932bde9.jpg",
      description: "Высокоточная маркировка мелких деталей"
    },
    {
      title: "Логотип на корпусе устройства",
      image: "/img/b7ad53a9-a737-4506-9e78-faf44932bde9.jpg", 
      description: "Брендинг электронных устройств"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-inter font-bold mb-4">
            Примеры наших работ
          </h2>
          <p className="text-xl text-muted-foreground font-open-sans">
            Качественная маркировка различных пластиковых изделий
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={example.image} 
                  alt={example.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-inter font-semibold mb-2">
                  {example.title}
                </h3>
                <p className="text-muted-foreground font-open-sans text-sm">
                  {example.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Посмотреть все работы
            <Icon name="ArrowRight" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}