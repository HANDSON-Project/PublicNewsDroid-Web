import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { writeNews } from "../api/news";
import Input from "../common/Input";

const NewsWriteContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
`;
const NewsWriteHeader = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 72px;
    padding: 0 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-bottom: solid 1px #aaa;

    h1 {
        margin: 0;
        font-size: 18px;
        line-height: 1;
        text-align: center;
    }

    img {
        cursor: pointer;
    }
`;

const NewsWriteForm = styled.form`
    padding: 24px 16px;

    .Input {
        margin-bottom: 16px;
    }
`;

function NewsWrite({ user }) {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState(null);

    const onTitleChange = useCallback((e) => setTitle(e.target.value), []);
    const onContentChange = useCallback((e) => setContent(e.target.value), []);
    const onFileChange = useCallback((e) => setFile(e.target.files[0]), []);

    const onBackClicked = useCallback(() => navigate("/home"), [navigate]);
    const onSave = useCallback(() => {
        writeNews(title, file, content).then(
            (result) => result && navigate("/home")
        );
    }, [navigate, title, file, content]);

    useEffect(() => {
        if (user === null) {
            navigate("/login");
        }
    }, [navigate, user]);

    return (
        <NewsWriteContainer className="NewsList">
            <NewsWriteHeader>
                <img src="/icon-back.png" alt="Back" onClick={onBackClicked} />
                <h1>뉴스 작성</h1>
                <img src="/icon-check.png" alt="Save" onClick={onSave} />
            </NewsWriteHeader>
            <NewsWriteForm>
                <Input
                    type="text"
                    name="title"
                    value={title}
                    onChange={onTitleChange}
                    placeholder="제목"
                />
                <Input
                    type="file"
                    name="file"
                    accept=".jpg,.png"
                    onChange={onFileChange}
                />
                <Input
                    type="textarea"
                    name="title"
                    value={content}
                    onChange={onContentChange}
                    placeholder="내용"
                />
            </NewsWriteForm>
        </NewsWriteContainer>
    );
}

export default NewsWrite;
