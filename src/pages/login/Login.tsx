import React from 'react';
import styled from 'styled-components';
import Box from '../../components/RoundedBox';
import Title from '../../components/Title';
import TextInput from '../../components/TextInput';

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

const Login: React.FC = () => {
    return (
        <LoginContainer>
            <Title compStyle={"title"} style={{
                fontSize: '3rem',
                marginBottom: '5rem',
                marginLeft: 0,
                marginRight: 'auto'
            }}>계정을 만들고 로그인 해보세요.</Title>

                <Title compStyle={"title"} style={{
                    fontSize : '4rem',
                    marginRight: 'auto',
                    marginBottom: '3rem',
                    marginLeft: '0',
                }}>Log in.</Title>

                <h2 style={{
                    fontSize : '2.4rem',
                    marginRight: 'auto',
                }}>
                    account_
                </h2>
                <TextInput placeHolder={'아이디를 입력하세요.'} valueType='text'/>

                <h2 style={{
                    fontSize : '2.4rem',
                    marginRight: 'auto',
                }}>
                    password_
                </h2>
                <TextInput placeHolder={'비밀번호를 입력하세요.'} valueType='password'/>
        </LoginContainer>
    );
};

export default Login;