import React, { useState } from 'react';
import { Calculator as CalcIcon, DollarSign, Calendar, Percent } from 'lucide-react';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    propertyValue: 100000,
    downPayment: 20,
    leaseTerm: 36,
    interestRate: 8.5,
    isVAT: false,
    clientType: 'individual'
  });

  const calculateMonthlyPayment = () => {
    const { propertyValue, downPayment, leaseTerm, interestRate, isVAT } = calculatorData;
    const downPaymentAmount = (propertyValue * downPayment) / 100;
    const leasingAmount = propertyValue - downPaymentAmount;
    const monthlyRate = interestRate / 100 / 12;
    
    let monthlyPayment = (leasingAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -leaseTerm));
    
    if (isVAT) {
      monthlyPayment *= 1.2; // НДС 20%
    }
    
    return monthlyPayment;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalPayment = monthlyPayment * calculatorData.leaseTerm + (calculatorData.propertyValue * calculatorData.downPayment) / 100;

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Калькулятор лизинга
            </h2>
            <p className="text-gray-600">
              Рассчитайте ваш лизинговый платёж и узнайте предварительные условия
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Client type switcher */}
            <div className="flex justify-center mb-8">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setCalculatorData({ ...calculatorData, clientType: 'individual' })}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    calculatorData.clientType === 'individual'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Физ. лицо
                </button>
                <button
                  onClick={() => setCalculatorData({ ...calculatorData, clientType: 'business' })}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    calculatorData.clientType === 'business'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Юр. лицо / ИП
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calculator inputs */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Стоимость имущества (BYN)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={calculatorData.propertyValue}
                      onChange={(e) => setCalculatorData({ ...calculatorData, propertyValue: Number(e.target.value) })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="100000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Первоначальный взнос (%)
                  </label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={calculatorData.downPayment}
                      onChange={(e) => setCalculatorData({ ...calculatorData, downPayment: Number(e.target.value) })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="20"
                      min="0"
                      max="100"
                    />
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    Сумма: {((calculatorData.propertyValue * calculatorData.downPayment) / 100).toLocaleString()} BYN
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Срок лизинга (месяцы)
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      value={calculatorData.leaseTerm}
                      onChange={(e) => setCalculatorData({ ...calculatorData, leaseTerm: Number(e.target.value) })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value={12}>12 месяцев</option>
                      <option value={24}>24 месяца</option>
                      <option value={36}>36 месяцев</option>
                      <option value={48}>48 месяцев</option>
                      <option value={60}>60 месяцев</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Процентная ставка (%)
                  </label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      step="0.1"
                      value={calculatorData.interestRate}
                      onChange={(e) => setCalculatorData({ ...calculatorData, interestRate: Number(e.target.value) })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="8.5"
                    />
                  </div>
                </div>

                {calculatorData.clientType === 'business' && (
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="vat"
                      checked={calculatorData.isVAT}
                      onChange={(e) => setCalculatorData({ ...calculatorData, isVAT: e.target.checked })}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="vat" className="text-sm font-medium text-gray-700">
                      Включить НДС (20%)
                    </label>
                  </div>
                )}
              </div>

              {/* Results */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <CalcIcon className="w-6 h-6 mr-2 text-blue-600" />
                  Результаты расчёта
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-600">Ежемесячный платёж:</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {monthlyPayment.toLocaleString()} BYN
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-600">Переплата:</span>
                    <span className="text-lg font-semibold text-gray-800">
                      {(totalPayment - calculatorData.propertyValue).toLocaleString()} BYN
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-600">Общая сумма:</span>
                    <span className="text-lg font-semibold text-gray-800">
                      {totalPayment.toLocaleString()} BYN
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Оставить заявку на лизинг
                  </button>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Расчёт носит предварительный характер. Итоговые условия могут отличаться.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;