import React, { useState } from 'react';
import styled, { css } from 'styled-components';

type TextInputProps = {
  placeHolder?: string;
  valueType?: string; // "text" || "password"
  style?: React.CSSProperties;
};

const StyledInput = styled.input<{ isFocused: boolean }>`
  width: 100%;
  border: none;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.3);
  padding: 0.5rem 0;
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 1);
  outline: none;
  min-height: 2.4rem;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-bottom: 0.1rem solid rgba(0, 0, 0, 1);
    `}

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

const TextInput = ({ placeHolder, valueType, style }: TextInputProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    setInputValue(inputText);
  };

  return (
    <StyledInput
      type={valueType || 'text'}
      placeholder={placeHolder || '아이디를 입력하세요.'}
      isFocused={isFocused}
      value={inputValue}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleInputChange}
      style={style}
    />
  );
};

export default TextInput;
