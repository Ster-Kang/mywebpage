import React, {useEffect, useState} from 'react'; 
import './fadeInText.css';
import { addEventListeners, removeEventListeners} from '../../functions/utils';

type FadeInTextProps = {
  text: string;
};

const FadeInText = ({
  // 사용 props 기본값 지정
  text
}:FadeInTextProps):JSX.Element => {

  // 상태 선언
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(()=> {
    const handleUserInteraction = () => {
      setFadeIn(true);
    }  
  
    addEventListeners(window, ['click', 'touchstart', 'keydown'], handleUserInteraction);

    //
    return () => {
      removeEventListeners(window, ['click', 'touchstart', 'keydown'], handleUserInteraction)
    }
  }, []);

  return (
    <h1 className={`fade-in ${fadeIn ? 'visible': ''}`}>{text}</h1>
  );
};

export default FadeInText;