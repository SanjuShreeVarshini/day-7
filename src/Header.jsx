import { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
  const [post, setPost] = useState(null); // State to store the post
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch post using Axios from a different endpoint
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setPost(response.data); // Set the post in state
        setLoading(false); // Stop the loading state
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setLoading(false); // Stop the loading state even if there's an error
      });
  }, []); // Runs only once when the component mounts

  return (
    <div>
      <h1>Post</h1>
      {loading ? (
        <p>Loading...</p> // Show loading message while fetching
      ) : (
        <div>
          <h2>{post?.title}</h2> {/* Display post title */}
          <p>{post?.body}</p> {/* Display post body */}
        </div>
      )}
    </div>
  );
};

export default Header;
