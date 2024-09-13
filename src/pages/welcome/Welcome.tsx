// Welcome.tsx
import React, { useState } from 'react';
import Title from '../../components/Title';
import Button from '../../components/Button';
import styled from 'styled-components';

// styled-components로 스타일 정의
const WelcomeContainer = styled.div`
  display:flex;
  flex-direction:column;
  text-align: center;
  padding: 2rem;
  height: 100vh;
  justify-content:center;
  align-items:center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1.5rem;
`;

const Welcome: React.FC = () => {
  const [showText, setShowText] = useState('');
  const [showButton, setShowButton] = useState('');

  // 클릭 이벤트 핸들러
  const handleClick = () => {
    if (!showText) {
      setShowText('fadeIn'); // 첫 번째 클릭 시 텍스트를 나타나게 함
    } else if (showText && !showButton) {
      setShowButton('fadeIn'); // 두 번째 클릭 시 버튼을 나타나게 함
    }
  };

  return (
    <WelcomeContainer onClick={handleClick}>
      <Title subtext="about Ster." compStyle={showText}>"안녕하세요."</Title>
      <ButtonContainer>
        <Button text="로그인" compStyle={showButton} focused={true} href={'/login'}/>
        <Button text="둘러보기" compStyle={showButton}/>
      </ButtonContainer>
    </WelcomeContainer>
  );
};

export default Welcome;
