import React, { useState } from 'react';
import { Send, Upload, User, Phone, MessageSquare, Car } from 'lucide-react';

const QuickForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    leasingObject: '',
    comment: '',
    clientType: 'individual'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Быстрая заявка на лизинг
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Заполните форму и получите предложения от лучших лизинговых компаний в течение часа.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            {/* Client type selector */}
            <div className="flex justify-center mb-8">
              <div className="flex bg-white rounded-lg p-1 shadow-sm">
                <button
                  onClick={() => setFormData({ ...formData, clientType: 'individual' })}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    formData.clientType === 'individual'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Физическое лицо
                </button>
                <button
                  onClick={() => setFormData({ ...formData, clientType: 'business' })}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    formData.clientType === 'business'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Юридическое лицо / ИП
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {formData.clientType === 'individual' ? 'ФИО' : 'Название организации'}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                      placeholder={formData.clientType === 'individual' ? 'Иванов Иван Иванович' : 'ООО "Пример"'}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Контактный телефон
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                      placeholder="+375 (29) 123-45-67"
                      required
                    />
                  </div>
                </div>
              </div>

              {formData.clientType === 'business' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    УНП (необязательно)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    placeholder="123456789"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Объект лизинга
                </label>
                <div className="relative">
                  <Car className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <select
                    value={formData.leasingObject}
                    onChange={(e) => setFormData({ ...formData, leasingObject: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    required
                  >
                    <option value="">Выберите тип имущества</option>
                    <option value="car">Легковой автомобиль</option>
                    <option value="commercial">Коммерческий транспорт</option>
                    <option value="truck">Грузовой автомобиль</option>
                    <option value="equipment">Оборудование</option>
                    <option value="special">Спецтехника</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Комментарий
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    rows={4}
                    placeholder="Опишите ваши требования и пожелания..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Документы (необязательно)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    Загрузите техпаспорт, фото или другие документы
                  </p>
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Выбрать файлы
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  <Send className="w-5 h-5" />
                  <span>Отправить заявку</span>
                </button>
                <button
                  type="button"
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  Сохранить как черновик
                </button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Отправляя заявку, вы соглашаетесь с{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                    политикой конфиденциальности
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickForm;