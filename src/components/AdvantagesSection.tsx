import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function AdvantagesSection() {
  const advantages = [
    {
      icon: "Shield",
      title: "Высокая стойкость",
      description: "Нанесенные изображения не истираются и не утрачиваются со временем"
    },
    {
      icon: "Eye",
      title: "Качество и контрастность",
      description: "Позволяет повышенную плотность информации для штрихкодирования"
    },
    {
      icon: "Layers",
      title: "Широкий спектр материалов",
      description: "Металл, пластик, стекло, дерево, кожа и многие другие"
    },
    {
      icon: "MousePointer",
      title: "Бесконтактная технология",
      description: "Отсутствие прямого контакта для работы в труднодоступных местах"
    },
    {
      icon: "Settings",
      title: "Компьютерное управление",
      description: "Оперативное изменение наносимой информации в процессе"
    },
    {
      icon: "TrendingUp",
      title: "Высокая производительность",
      description: "Отсутствие ручного труда позволяет снизить цену услуги"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-inter font-bold mb-4">
            Преимущества лазерной маркировки
          </h2>
          <p className="text-xl text-muted-foreground font-open-sans max-w-2xl mx-auto">
            Компактные устройства для создания маркировки на любых поверхностях. Идеальный выбор для промышленных работ и производственных линий.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={advantage.icon} size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-inter font-semibold mb-2">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground font-open-sans">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}