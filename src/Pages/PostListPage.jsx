import { useEffect, useState } from "react";

export default function PostListPage() {
  const apiUrl = import.meta.env.API_URL;
  // console.log(import.meta.env.API_URL);
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        setPost(data.posts);
      });
  }, []);
  console.log(posts);

  return (
    <>
      <h1>Lista dei post</h1>
    </>
  );
}
