import React, { useState } from 'react';
import { Car, Truck, Bus, Wrench, Tractor, Bike, Cog, Search, Filter } from 'lucide-react';

const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'Все категории', icon: Search },
    { id: 'cars', label: 'Легковые автомобили', icon: Car, count: 1250 },
    { id: 'commercial', label: 'Коммерческий транспорт', icon: Truck, count: 890 },
    { id: 'trucks', label: 'Грузовые автомобили', icon: Truck, count: 650 },
    { id: 'trailers', label: 'Прицепы и полуприцепы', icon: Truck, count: 320 },
    { id: 'buses', label: 'Автобусы', icon: Bus, count: 180 },
    { id: 'special', label: 'Спецтехника', icon: Wrench, count: 540 },
    { id: 'agricultural', label: 'Сельхозтехника', icon: Tractor, count: 420 },
    { id: 'moto', label: 'Мототехника', icon: Bike, count: 280 },
    { id: 'equipment', label: 'Оборудование', icon: Cog, count: 750 },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Выберите категорию имущества
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем лизинг для любых видов имущества. Найдите подходящую категорию и получите лучшие условия от наших партнёров.
          </p>
        </div>

        {/* Mobile filter button */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 w-full p-4 bg-gray-50 rounded-lg border"
          >
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Выбрать категорию</span>
          </button>
        </div>

        {/* Category grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${isFilterOpen ? 'block' : 'hidden md:grid'}`}>
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-200 hover:shadow-lg ${
                  selectedCategory === category.id
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 text-sm mb-1">
                      {category.label}
                    </div>
                    {category.count && (
                      <div className="text-xs text-gray-500">
                        {category.count} предложений
                      </div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Advanced filters */}
        <div className="mt-8 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Дополнительные фильтры</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Стоимость имущества
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Любая</option>
                <option>До 50 000 BYN</option>
                <option>50 000 - 100 000 BYN</option>
                <option>100 000 - 500 000 BYN</option>
                <option>Свыше 500 000 BYN</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Срок лизинга
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Любой</option>
                <option>1 год</option>
                <option>2 года</option>
                <option>3 года</option>
                <option>5 лет</option>
                <option>Более 5 лет</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Аванс
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Любой</option>
                <option>0%</option>
                <option>10%</option>
                <option>20%</option>
                <option>30%</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Валюта
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>BYN</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Показать предложения
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;