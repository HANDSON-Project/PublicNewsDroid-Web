import React from "react";
import styled from "styled-components";

const CommentItemContainer = styled.div`
    position: relative;
    background-color: #fafafa;
    padding: 16px;
    border-bottom: solid 1px #eee;
`;
const CommentAuthor = styled.strong`
    font-size: 16px;
`;
const CommentContent = styled.p`
    font-size: 16px;
    margin: 8px 0;
`;
const CommentDate = styled.p`
    font-size: 12px;
    margin: 0;
`;

const CommentBtnContainer = styled.div`
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
`;
const CommentBtn = styled.button`
    display: block;
    font-size: 12px;
    color: #000;
    background-color: transparent;
    border: none;
    padding: 0;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }
`;

function CommentItem({ comment, isMe, onDelete = () => {} }) {
    return (
        <CommentItemContainer>
            <CommentAuthor>
                {comment.nickname} {isMe ? "(나)" : null}
            </CommentAuthor>
            <CommentContent>{comment.context}</CommentContent>
            <CommentDate>{comment.createdAt}</CommentDate>
            {isMe && (
                <CommentBtnContainer>
                    <CommentBtn onClick={() => onDelete(comment.commentIdx)}>
                        삭제
                    </CommentBtn>
                </CommentBtnContainer>
            )}
        </CommentItemContainer>
    );
}

export default CommentItem;
