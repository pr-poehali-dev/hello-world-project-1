import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-5xl font-inter font-bold">
            Готовы начать? Отправьте макет — и мы запустим маркировку сегодня!
          </h2>
          <p className="text-xl text-muted-foreground font-open-sans">
            Получите расчет стоимости за 15 минут. Срочные заказы — от 1 часа.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" className="flex-1">
              Отправить макет
              <Icon name="Upload" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              Связаться с нами
              <Icon name="Phone" size={20} />
            </Button>
          </div>

          <div className="flex justify-center items-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} />
              <span>Работаем 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="ShieldCheck" size={16} />
              <span>Гарантия качества</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Truck" size={16} />
              <span>Доставка по России</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}