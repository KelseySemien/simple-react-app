import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import PostList from '../components/PostList';

export default function Main() {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchPosts()
      .then((data) => {
        if (mounted) {
          setPosts(data);
          setFiltered(data);
        }
      })
      .catch(() => {
        if (mounted) setError('Failed to load posts. Please check your network.');
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    const q = search.trim().toLowerCase();
    if (!q) {
      setFiltered(posts);
      return;
    }
    setFiltered(posts.filter((p) => p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q)));
  }, [search, posts]);

  if (loading) return <div className="page"><div className="center">Loading posts...</div></div>;
  if (error) return <div className="page"><div className="center error">{error}</div></div>;

  return (
    <div className="page main-page">
      <div className="container">
        <div className="toolbar">
          <input
            type="search"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search posts"
          />
          <div className="count">{filtered.length} results</div>
        </div>

        <PostList posts={filtered} />
      </div>
    </div>
  );
}
