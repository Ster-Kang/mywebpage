import React, { useState } from 'react';
import FadeInText from '../../components/FadeInText';
import FadeInButton from '../../components/FadeInButton';
import './welcome.css'; // 스타일링을 위한 CSS 파일

const Welcome: React.FC = () => {
  
  // 상태를 관리하여 어떤 컴포넌트를 보여줄지 결정
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // 클릭 이벤트 핸들러
  const handleClick = () => {
    if (!showText) {
      setShowText(true);  // 첫 번째 클릭 시 텍스트를 나타나게 함
    } else if (showText && !showButton) {
      setShowButton(true); // 두 번째 클릭 시 버튼을 나타나게 함
    }
  };

  return (
    <div className="welcome-container" onClick={handleClick}>
      <FadeInText text="안녕하세요." subtext="about Ster." fadeIn={showText}/>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: '1.5rem'
        }}>
      <FadeInButton text="로그인" compStyle="login" focused={true} fadeIn={showButton}/>  
      <FadeInButton text="둘러보기" compStyle="login" fadeIn={showButton}/>
      </div>
    </div>
  );
};

export default Welcome;