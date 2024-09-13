import React from 'react';
import styled from 'styled-components';
import Title from '../../components/Title';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const LoginContainer = styled.div`
    display:flex;
    flex-direction:column;
    height: 100vh;
    align-items:center;
    width: 100wh;
    max-width: 48rem;
    padding-right: 2rem;
    padding-left: 2rem;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10vh;
`;

const ButtonContainer = styled.div`
    display:flex;
    flex-direction: row;
    gap: 3rem;
    max-width: 48rem;
    width:100wh;
    margin-top: 5rem;
    margin-bottom: 3rem;
`;

const Login: React.FC = () => {
    return (
        <LoginContainer>
            <Title 
            compStyle={"title"} 
            style={{
                fontSize : '4rem',
                marginRight: 'auto',
                marginLeft: '0'
            }}>Log in.</Title>

            <h2
                style={{
                    fontSize : '2rem',
                    marginRight: 'auto',
                    fontWeight: 400
                }}    
            >
                계정을 만들고 로그인 해보세요.
            </h2>

            <h2 style={{
                fontSize : '2.4rem',
                marginRight: 'auto',
            }}>
                account_
            </h2>
            <TextInput placeHolder={'아이디를 입력하세요.'} valueType='text'/>
            <a
                style={{
                    fontSize: '1.2rem',
                    color: 'rgba(0, 0, 0, 0.4)',
                    textDecoration: 'none',
                    textUnderlineOffset: '0.5rem',
                    marginLeft: 'auto',
                    marginTop: '1rem'
                }}

                href='#'
            >
                <span style={{
                    color : 'rgba(0,0,0,0.7)'
                }}>💡</span> 아이디 찾기
            </a>

            <h2 style={{
                fontSize : '2.4rem',
                marginRight: 'auto',
            }}>
                password_
            </h2>
            <TextInput placeHolder={'비밀번호를 입력하세요.'} valueType='password'/>
            <a
                style={{
                    fontSize: '1.2rem',
                    color: 'rgba(0, 0, 0, 0.4)',
                    textDecoration: 'none',
                    textUnderlineOffset: '0.5rem',
                    marginLeft: 'auto',
                    marginTop: '1rem'
                }}

                href='#'
            >
                <span style={{
                    color : 'rgba(0,0,0,0.4)'
                }}>🔐</span> 비밀번호 찾기
            </a>
            

            <ButtonContainer>
                <Button text="돌아가기" compStyle="basic"/>
                <Button text="로그인" compStyle="basic" focused={true}/>
            </ButtonContainer>
            <a
                style={{
                    fontSize: '1.5rem',
                    color: 'rgba(0, 0, 0, 0.4)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '0.5rem'
                }}

                href='#'
            >
                회원가입 하기
            </a>
        </LoginContainer>
    );
};

export default Login;