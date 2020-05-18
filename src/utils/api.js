import axios from "axios";

const request = axios.create({
  baseURL: "https://hm-nc-news-app.herokuapp.com/api/",
});

export const getBlogs = (topic, author, sort_by, order, limit, p) => {
  return request
    .get("/articles", { params: { topic, author, sort_by, order, limit, p } })
    .then(({ data }) => {
      return { articles: data.articles, total_count: data.total_count };
    });
};

export const getBlog = (blog_id) => {
  return request.get(`/articles/${blog_id}`).then(({ data }) => {
    return data.article;
  });
};
