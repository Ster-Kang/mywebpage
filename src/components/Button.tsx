import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

type ButtonProps = {
  text: string;
  href?: string;
  compStyle?: string;
  fadeIn?: boolean;
  focused?: boolean;
  style?: React.CSSProperties;
};

const StyledButton = styled.button<{ fadeIn?: boolean, focused?: boolean, compStyle?: string }>`
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

  &:hover {
    background-color: #000000e2;
    color: #ffffff;
  }

  ${({ compStyle }) => compStyle === 'basic' && css`
    opacity: 1;
    transform: translateY(0);
  `}

  ${({ compStyle }) => compStyle === 'fadeIn' && css`
    opacity: 1;
    transform: translateY(0);
  `}

  ${({ focused }) => focused && css`
    background-color: #000000e2;
    color: #ffffff;
  `}
`;

const Button = ({ text, href, compStyle, fadeIn, focused, style }: ButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (href) {
      navigate(href);
    } else {
      navigate('/');
    }
  };

  return (
    <StyledButton
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
