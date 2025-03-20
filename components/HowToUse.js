import React from 'react';
import { useTranslation } from 'next-i18next';
import InstructionSvg from './InstructionSvg';

const HowToUse = () => {
  const { t } = useTranslation('common');
  
  const steps = [
    {
      id: 1,
      text: t('step1'),
    },
    {
      id: 2,
      text: t('step2'),
    },
    {
      id: 3,
      text: t('step3'),
    },
    {
      id: 4,
      text: t('step4'),
    },
  ];
  
  return (
    <div className="my-12 text-center bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-8 text-accent">{t('howToUse')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="steps-container bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-medium text-accent mb-4 text-center">{t('instructions')}</h3>
          {steps.map((step) => (
            <div key={step.id} className="step mb-4 last:mb-0">
              <div className="flex items-start">
                <div className="step-number">{step.id}</div>
                <div className="step-content ml-4">
                  <p className="text-gray-700 text-left">{step.text}</p>
                </div>
              </div>
              {step.id < steps.length && (
                <div className="ml-4 pl-4 border-l-2 border-dotted border-accent h-6 opacity-50"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="instruction-svg-container bg-white p-4 rounded-lg shadow-md">
          <InstructionSvg />
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
