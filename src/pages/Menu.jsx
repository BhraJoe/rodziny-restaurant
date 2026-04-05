import { useState, useEffect } from 'react';
import CategoryTabs from '../components/CategoryTabs';
import BreakfastSection from '../sections/BreakfastSection';
import LunchDinnerSection from '../sections/LunchDinnerSection';
import DessertsSection from '../sections/DessertsSection';
import DrinksSection from '../sections/DrinksSection';
import { translations } from '../translations';

export default function Menu({ language }) {
  const categories = [
    translations[language].breakfast,
    translations[language].lunchDinner,
    translations[language].desserts,
    translations[language].drinks
  ];

  const [activeCategory, setActiveCategory] = useState(translations[language].breakfast);

  useEffect(() => {
    setActiveCategory(translations[language].breakfast);
  }, [language]);

  const renderActiveSection = () => {
    switch (activeCategory) {
      case translations[language].breakfast:
        return <BreakfastSection language={language} />;
      case translations[language].lunchDinner:
        return <LunchDinnerSection language={language} />;
      case translations[language].desserts:
        return <DessertsSection language={language} />;
      case translations[language].drinks:
        return <DrinksSection language={language} />;
      default:
        return null;
    }
  };

  return (
    <div className="menu-page fade-in" style={{ paddingTop: '80px' }}>
      <div className="section-header">
        <h2>{translations[language].ourMenu}</h2>
        <p>{translations[language].exploreMenu}</p>
      </div>
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />
      {renderActiveSection()}
    </div>
  );
}