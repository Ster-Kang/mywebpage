import React from 'react';
import styled from 'styled-components';
import Background from '../../components/Background';
import Title from '../../components/Title';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const Join: React.FC = () => {
    return (
        <Background backgroundType='form' action="#">
            <Title 
            compStyle={"title"} 
            style={{
                fontSize : '4rem',
                marginRight: 'auto',
                marginLeft: '0',
                marginBottom: '3rem'
            }}>회원가입</Title>
            <h2 style={{
                fontSize : '2.4rem',
                marginRight: 'auto',
                marginBottom: '1rem'
            }}>
                사용할 계정
            </h2>
            <TextInput 
            placeHolder={'아이디는 8-16자 내의 영문과 숫자만 사용 가능합니다.'} valueType='text' 
            style={{
                marginBottom: '3rem'
            }}
            required={true}/>

            <h2 style={{
                fontSize : '2.4rem',
                marginRight: 'auto',
                marginBottom: '1rem'
            }}>
                비밀번호
            </h2>
            <TextInput 
            placeHolder={'비밀번호는 8자 이상, 대소문자, 숫자, 특수문자를 포함해야 합니다.'} 
            valueType='password'
            required={true}
            style={{
                marginBottom: '5rem'
            }}/>
            <Button text='가입완료' submit={true} compStyle='basic' focused={true}></Button>
        </Background>
    )
}

export default Join;