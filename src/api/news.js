import dummyNewsItem from "../data/dummy_news_item.json";
import dummyNewsList from "../data/dummy_news_list.json";
import dummyCommentList from "../data/dummy_comment_list.json";
import { wait } from "../utils/wait";

export const getNewsList = async (location) => {
    await wait(500);
    return dummyNewsList.filter((news) => news.location === location);
};

export const getNewsItem = async (id) => {
    await wait(500);
    return dummyNewsItem;
};

export const writeNews = async (title, file, content) => {
    await wait(500);
    console.log("Write News: ", title, file, content);
    return true;
};

export const toggleLike = async (news) => {
    await wait(100);
    console.log("Like News: ", news.title);
    return true;
};

export const getCommentList = async (newsId) => {
    await wait(300);
    return dummyCommentList;
};

export const createComment = async (content) => {
    await wait(300);
    console.log("Create Comment: ", content);
    return true;
};

export const deleteComment = async (commentId) => {
    await wait(100);
    console.log("Delete Comment: ", commentId);
    return true;
};
