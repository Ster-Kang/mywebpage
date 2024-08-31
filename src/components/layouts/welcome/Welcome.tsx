import React from 'react';
import FadeInText from '../../reusables/FadeInText';
import './welcome.css'; // 스타일링을 위한 CSS 파일

const Welcome: React.FC = () => {
  return (
    <div className="welcome-container">
      <FadeInText text="안녕하세요." />
    </div>
  );
};

export default Welcome;