import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PostItem({ post }) {
  const navigate = useNavigate();
  const go = () => navigate(`/posts/${post.id}`);

  return (
    <li
      className="post-item"
      onClick={go}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') go(); }}
      aria-label={`Open post ${post.id}`}
    >
      <h3>{post.title}</h3>
      <p>{post.body.length > 140 ? `${post.body.slice(0, 140)}...` : post.body}</p>
    </li>
  );
}
