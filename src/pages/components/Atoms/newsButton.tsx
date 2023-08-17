// src/components/NewsButton.tsx
import React from 'react';
import { Article } from '@/pages/types';

interface NewsButtonProps {
  article: Article;
  onClick: () => void;
}

const NewsButton: React.FC<NewsButtonProps> = ({ article, onClick }) => {
  return (
    <div>
      <button className='news-button rounded-lg border border-white w-full h-25 px-0 my-5 flex items-center ' onClick={onClick}>
      <div className="news-title flex-4 mr-5 text-xs p-0 text-slate-300">
        <h3>{article.title}</h3>
      </div>
      <div className="news-image">
        <img className='w-full max-h-24 mr-2 py-2 pr-2 object-contain text-xs text-slate-300' src={article.urlToImage} alt={article.title} />
      </div>
    </button>
    </div>
  );
};

export default NewsButton;