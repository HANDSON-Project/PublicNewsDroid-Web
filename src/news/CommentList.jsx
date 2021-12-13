import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { deleteComment, getCommentList } from "../api/news";
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

const StyledUl = styled.ul`
    padding: 0;
    margin: 0;
`;

const CommentWriteForm = styled.nav`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    border-top: solid 1px #333;
`;

const CommentWriteInput = styled.textarea`
    margin: 12px;
    width: 100%;
    background-color: #fafafa;
    border: solid 1px #f0f0f0;
    border-radius: 4px;
`;

const CommentWriteBtn = styled.button`
    cursor: pointer;
    border: none;
    background-color: #5297ff;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    width: 88px;
    height: 136px;
`;

function CommentList({ user }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [commentList, setCommentList] = useState([]);
    const [newComment, setNewComment] = useState("");
    const onBackClicked = useCallback(
        () => navigate(`/news/${id}`),
        [navigate, id]
    );

    const onCommentItemDelete = useCallback(
        (commentId) => {
            if (window.confirm("정말 삭제하시겠습니까?")) {
                deleteComment(commentId).then(
                    (result) =>
                        result &&
                        getCommentList(id).then((comments) =>
                            setCommentList(comments)
                        )
                );
            }
        },
        [id]
    );

    const onCommentWrite = useCallback(() => {
        console.log(newComment);
    }, [newComment]);

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
                        onDelete={onCommentItemDelete}
                    />
                ))}
            </StyledUl>
            <CommentWriteForm>
                <CommentWriteInput
                    placeholder="댓글을 입력해주세요.."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                ></CommentWriteInput>
                <CommentWriteBtn onClick={onCommentWrite}>작성</CommentWriteBtn>
            </CommentWriteForm>
        </CommentListContainer>
    );
}

export default CommentList;
