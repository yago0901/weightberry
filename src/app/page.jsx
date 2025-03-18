'use client'

import { useRef } from 'react';

import Form from '../components/Form';
import Cetose2 from '../components/Cetose2';
import Faq from '../components/Faq';
import How from '../components/How';
import Cetose from '../components/Cetose';
import Carrocel from '../components/Carrocel';
import AuthoritySection from '../components/AuthoritySection';
import BenefitsSection from '../components/BenefitsSection';
import ReviewsSection from '../components/Reviews';
import HeroSection from '../components/HeroSection';

import './page.module.css';

const App = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start'  });
  };

  return (
    <div>
      <HeroSection scrollToForm={scrollToForm} />
      <ReviewsSection />
      <BenefitsSection scrollToForm={scrollToForm} />
      <AuthoritySection scrollToForm={scrollToForm} />
      <Carrocel />
      <Cetose scrollToForm={scrollToForm}/>
      <How />
      <Faq scrollToForm={scrollToForm}/>
      <Cetose2 scrollToForm={scrollToForm}/>
      <div ref={formRef}>
      <Form />
      </div>
    </div>
  );
};

export default App;
