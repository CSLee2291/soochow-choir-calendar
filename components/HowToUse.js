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
    <div className="my-8">
      <h2 className="text-xl font-bold mb-4">{t('howToUse')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="steps-container">
          {steps.map((step) => (
            <div key={step.id} className="step">
              <div className="step-number">{step.id}</div>
              <div className="step-content">
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="instruction-svg-container">
          <InstructionSvg />
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
