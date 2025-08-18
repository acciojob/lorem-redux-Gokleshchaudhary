import React, { useState, useEffect } from "react";
import "./index.css"; 

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="App" data-testid="app-container">
      
      <h4 className="intro-text">A short Narration of Lorem Ipsum</h4>

      
      {isLoading && <h4 className="loading-text">Loading...</h4>}

      
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <span className="title">{post.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
