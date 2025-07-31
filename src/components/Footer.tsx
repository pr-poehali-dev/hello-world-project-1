export default function Footer() {
  return (
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
  );
}