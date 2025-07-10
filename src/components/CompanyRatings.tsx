import React from 'react';
import { Star, Award, Clock, TrendingUp } from 'lucide-react';

const CompanyRatings = () => {
  const companies = [
    {
      name: 'БелВЭБ-Лизинг',
      rating: 4.9,
      reviews: 1247,
      approvalTime: '2 часа',
      minAdvance: '0%',
      specialOffer: 'Лизинг без аванса до конца месяца',
      logo: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      badge: 'Топ партнёр'
    },
    {
      name: 'Альфа-Лизинг',
      rating: 4.8,
      reviews: 892,
      approvalTime: '4 часа',
      minAdvance: '10%',
      specialOffer: 'Спецставка для ИП 7.5%',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      badge: 'Лучшая ставка'
    },
    {
      name: 'ПроЛизинг',
      rating: 4.7,
      reviews: 654,
      approvalTime: '1 час',
      minAdvance: '15%',
      specialOffer: 'Экспресс-одобрение за 60 минут',
      logo: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      badge: 'Быстрое одобрение'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Рейтинг лизинговых компаний
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выбирайте лучших партнёров на основе реальных отзывов клиентов и условий лизинга.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {companies.map((company, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">{company.name}</h3>
                    <div className="flex items-center space-x-1">
                      {renderStars(company.rating)}
                      <span className="text-sm text-gray-600 ml-1">
                        {company.rating} ({company.reviews})
                      </span>
                    </div>
                  </div>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  {company.badge}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    Рассмотрение: {company.approvalTime}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    Мин. аванс: {company.minAdvance}
                  </span>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-medium text-orange-700">
                    Специальное предложение
                  </span>
                </div>
                <p className="text-sm text-orange-600 mt-1">
                  {company.specialOffer}
                </p>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Подать заявку
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
            Посмотреть всех партнёров
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyRatings;