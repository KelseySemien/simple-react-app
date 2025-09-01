import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPostById, fetchUserById } from '../services/api';

export default function Detail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchPostById(id)
      .then((data) => {
        if (!mounted) return;
        setPost(data);
        return fetchUserById(data.userId);
      })
      .then((u) => { if (mounted) setUser(u); })
      .catch(() => { if (mounted) setError('Failed to load post details.'); })
      .finally(() => { if (mounted) setLoading(false); });

    return () => { mounted = false; };
  }, [id]);

  if (loading) return <div className="page"><div className="center">Loading...</div></div>;
  if (error) return <div className="page"><div className="center error">{error}</div></div>;
  if (!post) return <div className="page"><div className="center">Post not found.</div></div>;

  return (
    <div className="page detail-page">
      <div className="container">
        <Link to="/" className="btn-link">← Back to list</Link>

        <article className="post-detail">
          <h2>{post.title}</h2>
          <p>{post.body}</p>

          {user && (
            <div className="author">
              <h4>Author</h4>
              <p>{user.name} — {user.email}</p>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
