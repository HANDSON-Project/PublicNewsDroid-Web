import axios from "axios";
import server from "./server.json";
axios.defaults.baseURL = server.url;

export const getNewsList = async (location) => {
    const options = {
        method: "GET",
        headers: { "content-type": "application/json" },
        url: "/news?location=" + location,
    };
    const response = await axios(options);
    if (response.status !== 200 || !response.data.isSuccess) {
        alert(response.data.message);
        return null;
    }

    return response.data.result;
};

export const getNewsItem = async (newsIdx) => {
    const options = {
        method: "GET",
        headers: { "content-type": "application/json" },
        url: "/news/" + newsIdx,
    };

    const response = await axios(options);
    if (response.status !== 200 || !response.data.isSuccess) {
        alert(response.data.message);
        return null;
    }

    return response.data.result;
};

export const writeNews = async (
    jwt,
    userIdx,
    title,
    file,
    content,
    location
) => {
    const options = {
        method: "POST",
        headers: { "content-type": "application/json", "X-ACCESS-TOKEN": jwt },
        data: JSON.stringify({
            userIdx,
            title,
            context: content,
            image: "https://dummyimage.com/640x1:1/",
            location,
        }),
        url: "/news/" + userIdx,
    };
    const response = await axios(options);

    if (response.status !== 200 || !response.data.isSuccess) {
        alert(response.data.message);
        return null;
    }

    return response.data.result;
};

export const toggleLike = async (jwt, userIdx, newsIdx, curLike) => {
    const options = {
        method: curLike ? "DELETE" : "POST",
        headers: { "content-type": "application/json", "X-ACCESS-TOKEN": jwt },
        data: JSON.stringify({
            userIdx,
            newsIdx,
        }),
        url: "/news/likes",
    };
    const response = await axios(options);

    if (response.status !== 200 || !response.data.isSuccess) {
        alert(response.data.message);
        return null;
    }

    return response.data.result;
};

export const getCommentList = async (newsIdx) => {
    const options = {
        method: "GET",
        headers: { "content-type": "application/json" },
        url: "/news/comments/" + newsIdx,
    };

    const response = await axios(options);
    if (response.status !== 200 || !response.data.isSuccess) {
        alert(response.data.message);
        return null;
    }

    return response.data.result;
};

export const createComment = async (jwt, userIdx, newsIdx, content) => {
    const options = {
        method: "POST",
        headers: { "content-type": "application/json", "X-ACCESS-TOKEN": jwt },
        data: JSON.stringify({
            userIdx,
            newsIdx,
            content,
        }),
        url: "/news/comments",
    };
    const response = await axios(options);

    if (response.status !== 200 || !response.data.isSuccess) {
        alert(response.data.message);
        return null;
    }

    return response.data.result;
};

export const deleteComment = async (jwt, userIdx, commentIdx) => {
    const options = {
        method: "DELETE",
        headers: { "content-type": "application/json", "X-ACCESS-TOKEN": jwt },
        data: JSON.stringify({
            userIdx,
            commentIdx,
        }),
        url: "/news/comments",
    };
    const response = await axios(options);

    if (response.status !== 200 || !response.data.isSuccess) {
        alert(response.data.message);
        return null;
    }

    return response.data.result;
};
