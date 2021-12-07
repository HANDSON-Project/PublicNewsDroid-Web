import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router";
import { getNewsItem } from "../api/news";
import styled from "styled-components";

const NewsDetailContainer = styled.div``;
const NewsDetailHeader = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 72px;
    padding: 0 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-bottom: solid 1px #aaa;

    h1 {
        flex: 1;
        margin: 0;
        font-size: 18px;
        line-height: 1;
        text-align: center;
    }

    img {
        flex: 1
        cursor: pointer;
        margin-left: 0;
        min-width: 10px;
    }
    
    .right {
        min-width: 17px;
    }
`;
const NewsContent = styled.form`
    padding: 24px 16px;

    img {
        display: block;
        max-width: 100%;
        margin: 0 auto;
    }
`;

function NewsDetail() {
    const { id } = useParams();
    const [news, setNews] = useState(null);
    const navigate = useNavigate();
    const onBackClicked = useCallback(() => navigate("/home"), [navigate]);

    useEffect(() => {
        getNewsItem(id).then((n) => setNews(n));
    }, [id]);

    return (
        <NewsDetailContainer className={`NewsDetail NewsDetail_${id}`}>
            <NewsDetailHeader>
                <img src="/icon-back.png" alt="Back" onClick={onBackClicked} />
                <h1>뉴스 보기</h1>
                <div class="right"></div>
            </NewsDetailHeader>
            {news && (
                <NewsContent>
                    <h2>{news.title}</h2>
                    <img src={news.image} alt={news.title} />
                    <p>{news.content}</p>
                </NewsContent>
            )}
        </NewsDetailContainer>
    );
}

export default NewsDetail;
