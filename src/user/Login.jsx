import React, { useCallback, useState } from "react";
import Input from "../common/Input";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import BtnPrimary from "../common/BtnPrimary";

const LoginContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 48px;

    .Input__pw {
        margin-top: 20px;
    }
`;

const Title = styled.h1`
    text-align: center;
    font-size: 28px;
    margin: 1.5em;
`;

const BtnLogin = styled(BtnPrimary)`
    margin: 24px 0 16px;
`;

const BtnRegister = styled(Link)`
    margin: 0 auto;
    text-align: center;
    color: #999;
    font-size: 12px;
    font-weight: bold;
`;

function Login({ action = () => {} }) {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const onIdChange = useCallback((e) => setId(e.target.value), []);
    const onPwChange = useCallback((e) => setPw(e.target.value), []);
    const doLogin = useCallback(() => {
        action(id, pw).then((result) => {
            if (!result) return;

            navigate("/home");
        });
    }, [id, pw, navigate, action]);

    return (
        <LoginContainer>
            <Title>로그인</Title>
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
            <BtnLogin onClick={doLogin}>로그인</BtnLogin>
            <BtnRegister to="/register">회원가입</BtnRegister>
        </LoginContainer>
    );
}

export default Login;
