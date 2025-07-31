import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
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
  );
}