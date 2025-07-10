import React from 'react';
import { Search, FileText, CheckCircle, Handshake } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Выбираете имущество',
      description: 'Определяете тип и стоимость имущества, которое хотите взять в лизинг',
      color: 'bg-blue-500'
    },
    {
      icon: FileText,
      title: 'Заполняете заявку',
      description: 'Указываете свои данные и желаемые условия лизинга',
      color: 'bg-green-500'
    },
    {
      icon: CheckCircle,
      title: 'Получаете одобрение',
      description: 'Наши партнёры рассматривают заявку и принимают решение',
      color: 'bg-orange-500'
    },
    {
      icon: Handshake,
      title: 'Подписываете договор',
      description: 'Оформляете лизинговый договор и получаете имущество',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Как это работает
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Процесс получения лизинга максимально упрощён. Всего 4 шага до получения имущества.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Среднее время получения лизинга
            </h3>
            <div className="text-4xl font-bold text-blue-600 mb-2">24 часа</div>
            <p className="text-gray-600">
              От подачи заявки до получения одобрения
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;