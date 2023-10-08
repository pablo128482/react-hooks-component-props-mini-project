import React from 'react';
import blogConfig from '../data/blog';

import About from './About';
import ArticleList from './ArticleList';
import Header from './Header';
import Article from './Article';
console.log(blogConfig);

function App() {
  return (
    <div className = "App">
      <Header name={blogConfig.name} />
      <About image={blogConfig.image} about={blogConfig.about} />
      <ArticleList posts={blogConfig.posts} />
    </div>
  );
}

export default App;
