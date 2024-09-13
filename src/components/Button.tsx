import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

type ButtonProps = {
  text: string;
  href?: string;
  compStyle?: string;
  fadeIn?: boolean;
  focused?: boolean;
  style?: React.CSSProperties;
  submit?: boolean;
  onClick?: () => void; // 추가된 prop
};

const StyledButton = styled.button<{ fadeIn?: boolean, focused?: boolean, compStyle?: string }>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-radius: 10rem;
  padding: 1.4rem 3rem 1rem 3rem;
  border: 0.2rem solid black;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 2s, transform 1s, background-color 0.1s, color 0.1s;
  background-color: white;
  font-weight: bold;
  cursor: pointer;
  pointer-events: none;


  &:hover {
    background-color: #000000e2;
    color: #ffffff;
  }

  ${({ compStyle }) => compStyle === 'basic' && css`
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  `}

  ${({ compStyle }) => compStyle === 'fadeIn' && css`
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  `}

  ${({ focused }) => focused && css`
    background-color: #000000e2;
    color: #ffffff;
    pointer-events: auto;
  `}
`;


const Button = ({ text, href, compStyle, fadeIn, focused, style, submit, onClick }: ButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (submit) {
      // 폼 제출은 handleClick에서 처리하지 않음
      return;
    }

    if (onClick) {
      onClick();
      return;
    }

    if (href === 'back') {
      window.history.back();
    } else if (href) {
      navigate(href);
    } else {
      navigate('/');
    }
  };

  return (
    <StyledButton
      type={submit ? 'submit' : 'button'} // 조건부로 type 속성 설정
      fadeIn={fadeIn}
      focused={focused}
      compStyle={compStyle}
      onClick={handleClick}
      style={style}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
