import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    box-sizing: border-box;
    display: block;
    width: 100%;
    min-height: 300px;
    background-color: #f6f6f6;
    padding: 12px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    border: none;
    border-radius: 4px;

    &::placeholder {
        color: #999;
    }
`;

const StyledInput = styled.input`
    box-sizing: border-box;
    display: block;
    width: 100%;
    background-color: #f6f6f6;
    padding: 12px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    border: none;
    border-radius: 4px;

    &::placeholder {
        color: #999;
    }
`;

function Input({
    type,
    name,
    value = "",
    placeholder = "",
    accept = "",
    onChange = () => {},
}) {
    return type === "textarea" ? (
        <StyledTextarea
            className={`Input Input__${name}`}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    ) : type === "file" ? (
        <StyledInput
            className={`Input Input__${name}`}
            type={type}
            name={name}
            accept={accept}
            onChange={onChange}
        />
    ) : (
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
