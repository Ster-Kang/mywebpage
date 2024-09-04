import styled, { css } from 'styled-components';

type TitleProps = {
  text: string;
  subtext?: string;
  compStyle?: string;
};

const StyledH1 = styled.h1<{ compStyle?: string }>`
  position: relative;
  opacity: 0;
  transform: translateY(-4.8rem);
  transition: opacity 2s ease-in-out, transform 1s ease-in-out;
  font-size: 6rem;
  font-weight: 700;
  margin: 0;
  margin-left: 1rem;
  
  ${({ compStyle }) => compStyle === 'fadeIn' && css`
    opacity: 1;
    transform: translateY(0);
  `}
  
  ${({ compStyle }) => compStyle === 'basic' && css`
    opacity: 1;
    top: -4.8rem;
  `}
`;

const StyledH2 = styled.h2<{ compStyle?: string }>`
  opacity: 0;
  transform: translateY(-4.8rem);
  transition: opacity 2s ease-in-out, transform 1s ease-in-out;
  font-size: 4rem;
  margin-top: 0.3rem;
  margin-bottom: 5rem;
  font-weight: 400;
  margin-left: 0.5rem;

  ${({ compStyle }) => (compStyle === 'fadeIn' || compStyle === 'basic') && css`
    opacity: 1;
    transform: translateY(0);
  `}
`;

const Title = ({ text, subtext, compStyle }: TitleProps) => {
  return (
    <>
      <StyledH1 compStyle={compStyle}>{text}</StyledH1>
      {subtext && <StyledH2 compStyle={compStyle}>{subtext}</StyledH2>}
    </>
  );
};

export default Title;
