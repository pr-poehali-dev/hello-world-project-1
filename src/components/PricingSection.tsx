import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function PricingSection() {
  const pricingData = [
    { material: "Металл", qty2_10: 100, qty11_50: 50, qty51_100: 30, qty101_300: 26, qty301_500: 25, qty500_plus: "договорная" },
    { material: "Кожа, дерево, пластик", qty2_10: 150, qty11_50: 60, qty51_100: 35, qty101_300: 31, qty301_500: 30, qty500_plus: "договорная" },
    { material: "Лакированные, крашенные поверхности", qty2_10: 150, qty11_50: 60, qty51_100: 35, qty101_300: 31, qty301_500: 30, qty500_plus: "договорная" },
    { material: "Стекло", qty2_10: 200, qty11_50: 80, qty51_100: 45, qty101_300: 40, qty301_500: 35, qty500_plus: "договорная" }
  ];

  return (
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
  );
}