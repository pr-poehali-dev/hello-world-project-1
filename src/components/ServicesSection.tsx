import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function ServicesSection() {
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

  return (
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
  );
}