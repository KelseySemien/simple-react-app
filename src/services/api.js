const BASE = 'https://jsonplaceholder.typicode.com';

export async function fetchPosts() {
  const res = await fetch(`${BASE}/posts`);
  if (!res.ok) throw new Error('Network error when fetching posts');
  return res.json();
}

export async function fetchPostById(id) {
  const res = await fetch(`${BASE}/posts/${id}`);
  if (!res.ok) throw new Error('Network error when fetching post');
  return res.json();
}

export async function fetchUserById(id) {
  const res = await fetch(`${BASE}/users/${id}`);
  if (!res.ok) throw new Error('Network error when fetching user');
  return res.json();
}
