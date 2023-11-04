import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import BlogPost from '../components/blog-post';
import '../components/help-center.css';

const blogPostsData = [
  // Array of blog post data; each item represents a blog post
  // Replace this with actual blog post data
  {
    title: 'How data and analytics can optimize incentive rewards programs',
    content: 'Maximizing results: Learn how to improve your incentive rewards programs with the power of data and analytics to optimize your strategy...',
    image: 'path_to_image',
    date: 'Mar 3',
    views: 17,
    comments: 0
  },
  // ...more blog posts
];

const Blog = () => {
  return (
    <div>
      <Header />
      <main>
        {blogPostsData.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
