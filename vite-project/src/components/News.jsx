import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const News = () => {
  const [news, setNews] = useState();

  const getData = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a30388a76c22470daf7fa96a93d0ccc8"
    );
    if (response.status == 200) {
      const data = await response.json();
      console.log(data.articles);
      setNews(data.articles);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div class="mt-16 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-1">
      {news &&
        news.map((item, index) => {
          return <NewsCard key={index} data={item} />;
        })}
    </div>

 
  );
};

export default News;
