import { useEffect, useState } from "react";

export default function PostListPage() {
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(apiUrl);
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
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Immagine</th>
            <th scope="col">Nome</th>
            <th scope="col">Tags</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <th scope="row">{post.img}</th>
              <td scope="row">{post.title}</td>
              <td scope="row">
                {post.tags.map((tag, id) => (
                  <span key={id} className="badge text-bg-secondary">
                    {tag}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
