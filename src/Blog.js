import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# Blog Post Title
Write your post here...
`;

function Blog() {
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
}

export default Blog;
