import dummyNews from "../data/dummy_news.json";
import { wait } from "../utils/wait";

export const getNewsList = async (location) => {
    await wait(500);
    return dummyNews.filter((news) => news.location === location);
};

export const writeNews = async (title, file, content) => {
    await wait(500);
    console.log("Write News: ", title, file, content);
    return true;
};
