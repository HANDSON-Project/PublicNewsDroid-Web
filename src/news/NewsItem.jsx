import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NewsItemContainer = styled.li`
    background-color: #fafafa;
    border-bottom: solid 1px #eee;
`;
const NewsLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    color: inherit;
    text-decoration: none;
    font-size: 10px;
`;
const NewsThumbnail = styled.img`
    display: block;
    width: 56px;
    height: 56px;
    object-fit: cover;
    margin-right: 12px;
`;
const NewsInfoContainer = styled.div``;
const NewsTitle = styled.h2`
    max-width: 90%;
    margin: 0;
    white-space: nowrap;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const NewsDescription = styled.p`
    margin: 4px 0;
`;
const NewsCountContainer = styled.div`
    display: flex;
`;
const NewsViewCount = styled.span`
    margin-right: 12px;
    line-height: 16px;
    &::before {
        content: "";
        display: block;
        float: left;
        width: 16px;
        height: 16px;
        margin-right: 4px;
        background-image: url(/icon-eye.png);
        background-position: center;
        background-repeat: no-repeat;
    }
`;
const NewsLikeCount = styled.span`
    line-height: 16px;
    &::before {
        content: "";
        display: block;
        float: left;
        width: 16px;
        height: 16px;
        margin-right: 4px;
        background-image: url(/icon-like.png);
        background-size: 8px 8px;
        background-position: center;
        background-repeat: no-repeat;
    }
`;

function NewsItem({ news }) {
    return (
        <NewsItemContainer>
            <NewsLink to={`/news/${news.id}`}>
                <NewsThumbnail src={news.image} alt={news.title} />
                <NewsInfoContainer>
                    <NewsTitle>{news.title}</NewsTitle>
                    <NewsDescription>
                        {news.content.slice(0, 40)}
                    </NewsDescription>
                    <NewsCountContainer>
                        <NewsViewCount>{news.viewNum}</NewsViewCount>
                        <NewsLikeCount>{news.like}</NewsLikeCount>
                    </NewsCountContainer>
                </NewsInfoContainer>
            </NewsLink>
        </NewsItemContainer>
    );
}

export default NewsItem;
