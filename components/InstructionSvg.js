import React from 'react';
import { useTranslation } from 'next-i18next';

const InstructionSvg = () => {
  const { i18n } = useTranslation('common');
  const isEnglish = i18n.language === 'en';
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 400"
      className="w-full h-auto"
    >
      {/* Background */}
      <rect width="500" height="400" fill="#f8f9fa" rx="10" ry="10" />
      
      {/* Calendar Illustration */}
      <rect x="50" y="50" width="180" height="150" fill="#ffffff" stroke="#6b46c1" strokeWidth="2" rx="5" ry="5" />
      <line x1="50" y1="80" x2="230" y2="80" stroke="#6b46c1" strokeWidth="2" />
      
      {/* Calendar days */}
      <rect x="60" y="90" width="20" height="20" fill="#e9d5ff" rx="2" ry="2" />
      <rect x="90" y="90" width="20" height="20" fill="#e9d5ff" rx="2" ry="2" />
      <rect x="120" y="90" width="20" height="20" fill="#e9d5ff" rx="2" ry="2" />
      <rect x="150" y="90" width="20" height="20" fill="#e9d5ff" rx="2" ry="2" />
      <rect x="180" y="90" width="20" height="20" fill="#e9d5ff" rx="2" ry="2" />
      
      <rect x="60" y="120" width="20" height="20" fill="#e9d5ff" rx="2" ry="2" />
      <rect x="90" y="120" width="20" height="20" fill="#6b46c1" rx="2" ry="2" />
      <rect x="120" y="120" width="20" height="20" fill="#e9d5ff" rx="2" ry="2" />
      <rect x="150" y="120" width="20" height="20" fill="#e9d5ff" rx="2" ry="2" />
      <rect x="180" y="120" width="20" height="20" fill="#e9d5ff" rx="2" ry="2" />
      
      <rect x="60" y="150" width="20" height="20" fill="#e9d5ff" rx="2" ry="2" />
      <rect x="90" y="150" width="20" height="20" fill="#e9d5ff" rx="2" ry="2" />
      <rect x="120" y="150" width="20" height="20" fill="#e9d5ff" rx="2" ry="2" />
      <rect x="150" y="150" width="20" height="20" fill="#6b46c1" rx="2" ry="2" />
      <rect x="180" y="150" width="20" height="20" fill="#e9d5ff" rx="2" ry="2" />
      
      {/* Step 1: View Calendar */}
      <circle cx="140" cy="120" r="30" fill="#6b46c1" fillOpacity="0.2" />
      <text x="240" y="70" fontFamily="Arial" fontSize="14" fill="#4a5568">
        {isEnglish ? "Step 1: View Calendar" : "步驟一：查看行事曆"}
      </text>
      <path d="M140 120 L220 70" stroke="#6b46c1" strokeWidth="1.5" strokeDasharray="5,5" />
      
      {/* Step 2: Click Event for Details */}
      <circle cx="90" cy="120" r="15" fill="#6b46c1" fillOpacity="0.3" />
      <text x="240" y="120" fontFamily="Arial" fontSize="14" fill="#4a5568">
        {isEnglish ? "Step 2: Click for Details" : "步驟二：點擊查看詳情"}
      </text>
      <path d="M90 120 L220 120" stroke="#6b46c1" strokeWidth="1.5" strokeDasharray="5,5" />
      
      {/* Step 3: Event Details Modal */}
      <rect x="260" y="150" width="180" height="120" fill="#ffffff" stroke="#6b46c1" strokeWidth="2" rx="5" ry="5" />
      <text x="280" y="180" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="#6b46c1">
        {isEnglish ? "Event Details" : "活動詳情"}
      </text>
      <line x1="280" y1="190" x2="420" y2="190" stroke="#e9d5ff" strokeWidth="2" />
      <text x="280" y="210" fontFamily="Arial" fontSize="10" fill="#4a5568">
        {isEnglish ? "Date: 2023-03-15" : "日期：2023-03-15"}
      </text>
      <text x="280" y="230" fontFamily="Arial" fontSize="10" fill="#4a5568">
        {isEnglish ? "Time: 19:00 - 21:00" : "時間：19:00 - 21:00"}
      </text>
      <text x="280" y="250" fontFamily="Arial" fontSize="10" fill="#4a5568">
        {isEnglish ? "Location: Choir Room" : "地點：合唱團教室"}
      </text>
      <path d="M150 150 L260 200" stroke="#6b46c1" strokeWidth="1.5" strokeDasharray="5,5" />
      
      {/* Step 4: Export Calendar */}
      <rect x="50" y="240" width="180" height="80" fill="#ffffff" stroke="#6b46c1" strokeWidth="2" rx="5" ry="5" />
      <text x="70" y="270" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="#6b46c1">
        {isEnglish ? "Export Calendar" : "匯出行事曆"}
      </text>
      <rect x="70" y="280" width="140" height="25" fill="#6b46c1" rx="3" ry="3" />
      <text x="100" y="297" fontFamily="Arial" fontSize="12" fill="#ffffff">
        {isEnglish ? "Google Calendar" : "Google 行事曆"}
      </text>
      <text x="240" y="280" fontFamily="Arial" fontSize="14" fill="#4a5568">
        {isEnglish ? "Step 3: Export Calendar" : "步驟三：匯出行事曆"}
      </text>
      <path d="M140 280 L220 280" stroke="#6b46c1" strokeWidth="1.5" strokeDasharray="5,5" />
      
      {/* Step 4: Subscribe */}
      <rect x="300" y="320" width="150" height="30" fill="#6b46c1" rx="15" ry="15" />
      <text x="325" y="340" fontFamily="Arial" fontSize="12" fill="#ffffff">
        {isEnglish ? "Subscribe for Updates" : "訂閱獲取更新"}
      </text>
      <text x="240" y="350" fontFamily="Arial" fontSize="14" fill="#4a5568">
        {isEnglish ? "Step 4: Stay Updated" : "步驟四：保持更新"}
      </text>
      <path d="M300 335 L220 350" stroke="#6b46c1" strokeWidth="1.5" strokeDasharray="5,5" />
    </svg>
  );
};

export default InstructionSvg;
