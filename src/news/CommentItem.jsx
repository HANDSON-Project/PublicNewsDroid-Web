import React from "react";
import styled from "styled-components";

const CommentItemContainer = styled.div``;
const CommentAuthor = styled.strong``;
const CommentContent = styled.p``;
const CommentDate = styled.p``;

function CommentItem({ comment, isMe }) {
    return (
        <CommentItemContainer>
            <CommentAuthor>
                User#{comment.id} {isMe ? "(나)" : ""}
            </CommentAuthor>
            <CommentContent>{comment.content}</CommentContent>
            <CommentDate>{comment.createAt}</CommentDate>
        </CommentItemContainer>
    );
}

export default CommentItem;
