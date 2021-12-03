import dummyNews from "../data/dummy_news.json";

export const getNewsList = async (location) => {
    setTimeout(() => {}, 1000);
    return dummyNews.filter((news) => news.location === location);
};
