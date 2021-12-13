import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getCommentList } from "../api/news";
import CommentItem from "./CommentItem";

const CommentListContainer = styled.div`
    position: relative;
    min-height: 100%;
`;
const CommentListHeader = styled.header`
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

const StyledUl = styled.ul``;

function CommentList({ user }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [commentList, setCommentList] = useState([]);
    const onBackClicked = useCallback(
        () => navigate(`/news/${id}`),
        [navigate, id]
    );

    useEffect(() => {
        if (user === null) {
            navigate("/login");
        } else {
            getCommentList(id).then((comments) => setCommentList(comments));
        }
    }, [navigate, id, user]);

    return (
        <CommentListContainer className="CommentList">
            <CommentListHeader>
                <img src="/icon-back.png" alt="Back" onClick={onBackClicked} />
                <h1>댓글 보기</h1>
                <div className="right"></div>
            </CommentListHeader>
            <StyledUl>
                {commentList.map((comment) => (
                    <CommentItem
                        comment={comment}
                        isMe={user && user.id === comment.userId}
                    />
                ))}
            </StyledUl>
        </CommentListContainer>
    );
}

export default CommentList;
