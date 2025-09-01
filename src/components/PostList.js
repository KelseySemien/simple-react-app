import React from 'react';
import PostItem from './PostItem';

export default function PostList({ posts }) {
  if (!posts || posts.length === 0) {
    return <div className="empty">No posts found.</div>;
  }
  return (
    <ul className="post-list" aria-live="polite">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}
