import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="space-y-5 flex flex-col justify-center px-4 md:px-0">
      {/* Standard News Image Styling */}
      <img
        className="w-full h-auto max-h-[500px] object-cover rounded-md"
        src={news.image_url}
        alt="news"
      />

      {/* Title */}
      <h1 className="text-xl md:text-2xl font-semibold">{news.title}</h1>

      {/* Details */}
      <p className="text-sm md:text-base leading-relaxed text-justify">{news.details}</p>

      {/* Small Button */}
      <Link
        className="btn btn-sm btn-secondary self-start"
        to={`/category/${news.category_id}`}
      >
        Back To Category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
