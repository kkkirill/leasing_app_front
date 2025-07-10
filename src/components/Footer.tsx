import React from 'react';
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">LeasingPro</span>
            </div>
            <p className="text-gray-400 mb-6">
              Лидирующая платформа для подбора лизинговых предложений в Беларуси. 
              Помогаем найти лучшие условия для любых видов имущества.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Услуги</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Лизинг для физлиц</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Лизинг для бизнеса</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Калькулятор лизинга</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Консультации</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Партнёрская программа</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Категории</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Автомобили</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Спецтехника</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Оборудование</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Сельхозтехника</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Недвижимость</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">+375 (17) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">info@leasingpro.by</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">г. Минск, ул. Примерная, 123</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Рабочие часы:</h4>
              <p className="text-gray-400">Пн-Пт: 9:00 - 18:00</p>
              <p className="text-gray-400">Сб: 10:00 - 15:00</p>
              <p className="text-gray-400">Вс: выходной</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 LeasingPro. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Условия использования
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Публичная оферта
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;