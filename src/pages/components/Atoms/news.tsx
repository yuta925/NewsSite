import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsButton from './newsButton';
import { Article } from '@/pages/types';

const News: React.FC = () => {
  const [newsArticles, setNewsArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const pageSize = 10;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=6e7f026cad4c4a3f86195d765d535f73`
        );
        setNewsArticles(response.data.articles);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }

    fetchNews();
  }, []);

  const handleButtonClick = (url: string) => {
    window.open(url, '_blank');
  };
  
  return (
    <div className="">
      <div className="news-list top-0 ">
        {newsArticles.map((article, index) => (
          <NewsButton
            key={index}
            article={article}
            onClick={() => handleButtonClick(article.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default News;