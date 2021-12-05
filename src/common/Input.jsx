import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    box-sizing: border-box;
    display: block;
    width: 100%;
    background-color: #eee;
    padding: 12px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    border: none;

    &::placeholder {
        color: #999;
    }
`;

function Input({
    type,
    name,
    value = "",
    placeholder = "",
    onChange = () => {},
}) {
    return (
        <StyledInput
            className={`Input Input__${name}`}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default Input;
