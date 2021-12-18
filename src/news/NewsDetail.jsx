import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router";
import { getNewsItem, toggleLike } from "../api/news";
import styled from "styled-components";

const NewsDetailContainer = styled.div`
    position: relative;
    min-height: 100%;
`;
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

const NewsNav = styled.nav`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    border-top: solid 1px #333;
`;

const NewsLike = styled.button`
    cursor: pointer;
    flex: 1;
    font-size: 14px;
    background-color: transparent;
    border: none;
    padding: 16px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    img {
        width: 16px;
        margin-right: 4px;
    }
`;

const NewsComment = styled(NewsLike)`
    font-weight: bold;
    border-left: solid 1px #ddd;
`;

function NewsDetail({ jwt, user }) {
    const { id } = useParams();
    const [news, setNews] = useState(null);
    const [like, setLike] = useState(false);

    const navigate = useNavigate();
    const onBackClicked = useCallback(() => navigate("/home"), [navigate]);
    const onLikeClicked = useCallback(() => {
        toggleLike(jwt, user.userIdx, news.newsIdx, like).then((result) =>
            getNewsItem(id).then((n) => {
                setNews(n);
            })
        );
        setLike(!like);
    }, [jwt, user, news, like, id]);
    const onCommentClicked = useCallback(
        () => navigate("./comment"),
        [navigate]
    );

    useEffect(() => {
        if (user === null) {
            navigate("/login");
        } else {
            getNewsItem(id).then((n) => setNews(n));
        }
    }, [navigate, id, user]);

    return (
        <NewsDetailContainer className={`NewsDetail NewsDetail_${id}`}>
            <NewsDetailHeader>
                <img src="/icon-back.png" alt="Back" onClick={onBackClicked} />
                <h1>뉴스 보기</h1>
                <div className="right"></div>
            </NewsDetailHeader>
            {news && (
                <>
                    <NewsContent>
                        <h2>{news.title}</h2>
                        <img src={news.image} alt={news.title} />
                        <p>{news.context}</p>
                    </NewsContent>
                    <NewsNav>
                        <NewsLike onClick={onLikeClicked}>
                            <img
                                src={`/icon-like${like ? "" : "-empty"}.png`}
                                alt="Like"
                            />
                            {news.likeNum}
                        </NewsLike>
                        <NewsComment onClick={onCommentClicked}>
                            댓글 보기
                        </NewsComment>
                    </NewsNav>
                </>
            )}
        </NewsDetailContainer>
    );
}

export default NewsDetail;
