import React, { useCallback, useState } from "react";
import Input from "../common/Input";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BtnPrimary from "../common/BtnPrimary";
import locationList from "../data/location.json";

const RegisterContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 48px;

    .Input__pw,
    .Input__email {
        margin-top: 20px;
    }
`;

const Title = styled.h1`
    text-align: center;
    font-size: 28px;
    margin: 1.5em;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 12px 8px;
    margin-top: 16px;
`;

const BtnRegister = styled(BtnPrimary)`
    margin: 24px 0 16px;
`;

const BtnLogin = styled(Link)`
    margin: 0 auto;
    text-align: center;
    color: #999;
    font-size: 12px;
    font-weight: bold;
`;

function Register() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");

    const onIdChange = useCallback((e) => setId(e.target.value), []);
    const onPwChange = useCallback((e) => setPw(e.target.value), []);
    const onEmailChange = useCallback((e) => setEmail(e.target.value), []);
    const onLocationChange = useCallback(
        (e) => setLocation(e.target.value),
        []
    );

    return (
        <RegisterContainer>
            <Title>회원가입</Title>
            <Input
                type="text"
                name="id"
                value={id}
                placeholder="아이디"
                onChange={onIdChange}
            />
            <Input
                type="password"
                name="pw"
                value={pw}
                placeholder="비밀번호"
                onChange={onPwChange}
            />
            <Input
                type="email"
                name="email"
                value={email}
                placeholder="이메일"
                onChange={onEmailChange}
            />
            <Select
                name="location"
                onChange={onLocationChange}
                selected={location}
            >
                <option value="">===지역 선택===</option>
                {locationList.map((loc) => (
                    <option value={loc.value}>{loc.name}</option>
                ))}
            </Select>
            <BtnRegister onClick={(e) => console.log("회원가입!")}>
                회원가입
            </BtnRegister>
            <BtnLogin to="/login">로그인</BtnLogin>
        </RegisterContainer>
    );
}

export default Register;
