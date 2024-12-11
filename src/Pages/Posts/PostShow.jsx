import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostShow() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const postId = useParams().id;
  const [post, setPost] = useState([]);

  useEffect(() => {
    const url = `${apiUrl}/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPost(data);
        console.log(url);
      });
  }, []);

  return (
    <>
      <h1>Dettaglio Post {postId}</h1>
      <div className="card mt-5 mb-5 w-50">
        <img src={post.img} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content}</p>
          {post.tags.map((tag) => {
            return <p className="badge text-bg-secondary me-1">{tag}</p>;
          })}
        </div>
      </div>
    </>
  );
}
