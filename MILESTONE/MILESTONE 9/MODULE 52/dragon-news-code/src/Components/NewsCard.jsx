import React from 'react';
import { FaStar, FaEye, FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { format } from 'date-fns';

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 m-2">
      {/* Header */}
      <div className="flex justify-between bg-base-200 items-start px-6 py-4 border-b">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {format(new Date(author.published_date), 'yyyy-MM-dd')}
            </p>
          </div>
        </div>
        {/* Bookmark and Share Icons */}
        <div className="flex gap-3 text-gray-500 text-lg mt-1">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Thumbnail */}
      <figure>
        <img src={thumbnail_url} alt="News Thumbnail" className="w-full h-60 object-cover" />
      </figure>

      {/* Body */}
      <div className="card-body space-y-3">
        <h2 className="card-title text-lg">{title}</h2>
        <p className="text-sm text-gray-600">{details.slice(0, 150)}...</p>

        {/* Rating and Views */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1 text-orange-500">
            {[...Array(rating.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-black ml-1">{rating.number}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaEye /> {total_view}
          </div>
        </div>

        {/* Tags */}
        <div className="card-actions justify-start mt-2">
          {tags.map((tag, idx) => (
            <div key={idx} className="badge badge-outline badge-secondary">{tag}</div>
          ))}
        </div>

        <div className="pt-2">
          <button className="btn btn-link text-primary text-sm p-0">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
