import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import CategoryFilter from './components/CategoryFilter';
import Calculator from './components/Calculator';
import CompanyRatings from './components/CompanyRatings';
import QuickForm from './components/QuickForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <CategoryFilter />
      <Calculator />
      <CompanyRatings />
      <QuickForm />
      <Footer />
    </div>
  );
}

export default App;