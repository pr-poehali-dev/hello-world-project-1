import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

export default function Index() {
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

  const pricingData = [
    { material: "Металл", qty2_10: 100, qty11_50: 50, qty51_100: 30, qty101_300: 26, qty301_500: 25, qty500_plus: "договорная" },
    { material: "Кожа, дерево, пластик", qty2_10: 150, qty11_50: 60, qty51_100: 35, qty101_300: 31, qty301_500: 30, qty500_plus: "договорная" },
    { material: "Лакированные, крашенные поверхности", qty2_10: 150, qty11_50: 60, qty51_100: 35, qty101_300: 31, qty301_500: 30, qty500_plus: "договорная" },
    { material: "Стекло", qty2_10: 200, qty11_50: 80, qty51_100: 45, qty101_300: 40, qty301_500: 35, qty500_plus: "договорная" }
  ];

  const services = [
    "Лазерная маркировка на корпусах и панелях приборов",
    "Маркировка символов и букв на промышленных клавиатурах",
    "Лазерная маркировка деталей цилиндрической и конической формы",
    "Лазерная маркировка шкал и нониусов на измерительных приборах",
    "Лазерная маркировка промышленных табличек и шильд",
    "Лазерная маркировка информационных и гарантийных наклеек",
    "Маркировка медицинского инструмента",
    "Лазерная маркировка на изделиях из светлого и темного пластика"
  ];

  const faqItems = [
    {
      question: "Как подготовить макет для маркировки?",
      answer: "Файлы должны быть подготовлены в CorelDraw (12-15 версии) в формате CDR. В макете должно быть четко понятно расположение изображения на изделии, точный размер. Гравировка должна иметь отступ не менее 2 мм от края изделия. Все символы и текст должны быть переведены в кривые."
    },
    {
      question: "Можно ли маркировать гибкий пластик?",
      answer: "Да, наше оборудование работает с любыми типами пластика. Мы регулируем мощность лазера в зависимости от материала для достижения оптимального результата. Бесконтактная технология идеально подходит для хрупких деталей."
    },
    {
      question: "Какие сроки выполнения заказа?",
      answer: "Стандартный заказ — 1-3 рабочих дня. Срочные заказы выполняем от 1 часа. Сроки зависят от объема и сложности маркировки."
    },
    {
      question: "Есть ли минимальный заказ?",
      answer: "Минимального заказа нет. Работаем как с единичными изделиями, так и с крупными партиями. Скидки от 15% при заказе от 500 штук."
    },
    {
      question: "Какие материалы вы маркируете?",
      answer: "Широкий спектр материалов: металл, пластик (светлый, темный, цветной, окрашенный), стекло, дерево, кожа, лакированные и крашенные поверхности, информационные наклейки из пленки."
    },
    {
      question: "Чем отличается ручной маркиратор от переносного?",
      answer: "Ручной имеет простую конструкцию для прямого управления процессом гравировки оператором. Переносной обеспечивает большую гибкость и мобильность для использования в различных условиях."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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

      {/* Advantages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-inter font-bold mb-4">
              Преимущества лазерной маркировки
            </h2>
            <p className="text-xl text-muted-foreground font-open-sans max-w-2xl mx-auto">
              Современная технология, которая превосходит традиционные методы маркировки
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

      {/* Examples Section */}
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

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-inter font-bold mb-4">
              Цены на лазерную маркировку
            </h2>
            <p className="text-xl text-muted-foreground font-open-sans">
              Стоимость зависит от материала и количества изделий
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-4 font-inter font-semibold">Материал</th>
                      <th className="text-center p-4 font-inter font-semibold">2-10 шт.</th>
                      <th className="text-center p-4 font-inter font-semibold">11-50 шт.</th>
                      <th className="text-center p-4 font-inter font-semibold">51-100 шт.</th>
                      <th className="text-center p-4 font-inter font-semibold">101-300 шт.</th>
                      <th className="text-center p-4 font-inter font-semibold">301-500 шт.</th>
                      <th className="text-center p-4 font-inter font-semibold">Свыше 500</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.map((row, index) => (
                      <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-open-sans font-medium">{row.material}</td>
                        <td className="text-center p-4 font-open-sans">{row.qty2_10} ₽</td>
                        <td className="text-center p-4 font-open-sans">{row.qty11_50} ₽</td>
                        <td className="text-center p-4 font-open-sans">{row.qty51_100} ₽</td>
                        <td className="text-center p-4 font-open-sans">{row.qty101_300} ₽</td>
                        <td className="text-center p-4 font-open-sans">{row.qty301_500} ₽</td>
                        <td className="text-center p-4 font-open-sans text-primary">{row.qty500_plus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="text-center mt-8">
              <Badge variant="outline" className="mb-4">
                Скидка 15% при заказе от 500 штук
              </Badge>
              <div className="space-y-2">
                <Button size="lg">
                  Рассчитать точную стоимость
                  <Icon name="Calculator" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-inter font-bold mb-4">
              Виды лазерной маркировки
            </h2>
            <p className="text-xl text-muted-foreground font-open-sans">
              Полный спектр услуг промышленной маркировки
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0 mt-1">
                      <Icon name="CheckCircle" size={16} className="text-primary" />
                    </div>
                    <p className="font-open-sans text-sm leading-relaxed">
                      {service}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
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

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-inter font-bold mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-muted-foreground font-open-sans">
              Ответы на популярные вопросы о лазерной маркировке
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="font-inter font-semibold text-left hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-open-sans text-muted-foreground pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-inter font-bold text-lg">LaserMark Pro</h3>
              <p className="text-muted-foreground font-open-sans text-sm">
                Профессиональная лазерная маркировка пластиковых изделий
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-inter font-semibold">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground font-open-sans text-sm">
                <li>Маркировка штрих-кодов</li>
                <li>Нанесение логотипов</li>
                <li>Серийная нумерация</li>
                <li>Микротекст</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-inter font-semibold">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground font-open-sans text-sm">
                <li>+7 (000) 000-00-00</li>
                <li>info@lasermark.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-inter font-semibold">Документы</h4>
              <ul className="space-y-2 text-muted-foreground font-open-sans text-sm">
                <li>Политика конфиденциальности</li>
                <li>Пользовательское соглашение</li>
                <li>Техническое задание</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground font-open-sans text-sm">
            <p>&copy; 2024 LaserMark Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}