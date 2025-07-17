import React, { useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.slice(0, visibleCount).map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
      {visibleCount < posts.length && (
        <button onClick={handleShowMore}>Show More</button>
      )}
    </div>
  );
};

export default Posts; 