import React from 'react';
import styled, { css } from 'styled-components';

// 1. 컴포넌트에 필요한 타입 정의
type CompStyle = 'basic' | 'fadeIn';

type DivProps = {
  backgroundType?: 'div';
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

type FormProps = {
  backgroundType: 'form';
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & React.FormHTMLAttributes<HTMLFormElement>;

type BackgroundProps = DivProps | FormProps;

// 2. 공통 스타일 정의
const commonStyles = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  width: 100vw; /* '100wh' 오타 수정 */
  max-width: 48rem;
  padding-right: 2rem;
  padding-left: 2rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10vh;
`;

// 3. Styled Components 정의
const StyledDiv = styled.div`
  ${commonStyles}
`;

const StyledForm = styled.form`
  ${commonStyles}
`;

// 4. PageBackground 컴포넌트 구현
const PageBackground = ({ style, children, backgroundType = 'div', ...rest }: BackgroundProps): JSX.Element => {
  if (backgroundType === 'form') {
    return (
      <StyledForm style={style} {...(rest as React.FormHTMLAttributes<HTMLFormElement>)}>
        {children}
      </StyledForm>
    );
  }

  return (
    <StyledDiv style={style} {...(rest as React.HTMLAttributes<HTMLDivElement>)}>
      {children}
    </StyledDiv>
  );
};

export default PageBackground;
