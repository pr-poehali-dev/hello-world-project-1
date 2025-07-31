import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function TechnologySection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-inter font-bold mb-4">
                Как работает лазерная маркировка
              </h2>
              <p className="text-xl text-muted-foreground font-open-sans">
                Бесконтактная технология для создания маркировки на любых поверхностях
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-inter font-semibold mb-1">Лазерный луч</h3>
                  <p className="text-muted-foreground font-open-sans text-sm">
                    Точно фокусированный луч воздействует на поверхность пластика
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-inter font-semibold mb-1">Изменение структуры</h3>
                  <p className="text-muted-foreground font-open-sans text-sm">
                    Молекулярная структура материала изменяется локально
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-inter font-semibold mb-1">Контрастное изображение</h3>
                  <p className="text-muted-foreground font-open-sans text-sm">
                    Получается четкая, долговечная маркировка
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg">
              Заказать маркировку
              <Icon name="ArrowRight" size={20} />
            </Button>
          </div>

          <div className="relative">
            <Card className="p-8">
              <h3 className="text-xl font-inter font-bold mb-6 text-center">
                Сравнение методов маркировки
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-4 font-semibold text-sm border-b pb-2">
                  <div>Параметр</div>
                  <div className="text-primary">Лазер</div>
                  <div>Шелкография</div>
                  <div>Термотрансфер</div>
                </div>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>Долговечность</div>
                  <div className="text-primary">✓ 10+ лет</div>
                  <div>2-3 года</div>
                  <div>1-2 года</div>
                </div>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>Точность</div>
                  <div className="text-primary">✓ 0.01 мм</div>
                  <div>0.5 мм</div>
                  <div>0.3 мм</div>
                </div>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>Экология</div>
                  <div className="text-primary">✓ Чистая</div>
                  <div>Химикаты</div>
                  <div>Пленки</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}