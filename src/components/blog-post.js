import React from 'react';
import Image from './image'; // Component for handling images if necessary

const BlogPost = ({ title, content, image, date, views, comments }) => {
  return (
    <article>
      <h2>{title}</h2>
      {image && <Image src={image} alt={`Illustration for ${title}`} />}
      <p>{content}</p>
      {/* Additional metadata, possibly in a footer or aside */}
      <div className="metadata">
        <span>{date}</span>
        <span>{views} views</span>
        <span>{comments} comments</span>
      </div>
    </article>
  );
};

export default BlogPost;
