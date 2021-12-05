import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getNewsList } from "../api/news";
import NewsItem from "./NewsItem";

const NewsListContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
`;
const NewsListHeader = styled.header`
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
const StyledUl = styled.ul`
    margin: 0;
    padding: 0;
`;

function NewsList({ user }) {
    const navigate = useNavigate();
    const [newsList, setNewsList] = useState([]);

    const onWriteClicked = useCallback(() => navigate("/write"), [navigate]);
    const onRefreshClicked = useCallback(() => {
        getNewsList(user.location).then((result) => setNewsList(result));
    }, [user]);

    useEffect(() => {
        if (user === null) {
            navigate("/login");
        } else {
            getNewsList(user.location).then((result) => setNewsList(result));
        }
    }, [navigate, user]);

    return (
        <NewsListContainer className="NewsList">
            <NewsListHeader>
                <img src="/icon-plus.png" alt="Plus" onClick={onWriteClicked} />
                <h1>{user && user.location}</h1>
                <img
                    src="/icon-refresh.png"
                    alt="Refresh"
                    onClick={onRefreshClicked}
                />
            </NewsListHeader>
            <StyledUl>
                {newsList.map((news) => (
                    <NewsItem key={news.id} news={news} />
                ))}
            </StyledUl>
        </NewsListContainer>
    );
}

export default NewsList;
