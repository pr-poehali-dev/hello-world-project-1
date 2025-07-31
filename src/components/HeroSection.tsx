import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">
                Высокоточная технология
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-inter font-bold text-foreground leading-tight">
                Прочная и точная маркировка пластика{" "}
                <span className="text-primary">лазером</span>
              </h1>
              <p className="text-xl text-muted-foreground font-open-sans">
                Портативные лазерные маркираторы для нанесения штрих-кодов, логотипов и серийных номеров. Бесконтактная технология — идеально для хрупких деталей.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Рассчитать стоимость
                <Icon name="ArrowRight" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Примеры работ
                <Icon name="Eye" size={20} />
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">изделий в час</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">0.01мм</div>
                <div className="text-sm text-muted-foreground">точность</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10 лет</div>
                <div className="text-sm text-muted-foreground">гарантия</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/img/b7ad53a9-a737-4506-9e78-faf44932bde9.jpg" 
                alt="Лазерная маркировка пластика"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <Icon name="CheckCircle" size={32} />
                <div className="mt-2 font-semibold">Без повреждений</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}