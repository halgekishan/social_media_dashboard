import React from 'react';
import Post from '../../components/Post/Post';

export default function Home({ posts, loading, error, search }) {
  if (loading) return <p>Loading posts...</p>;
  if (error) return <p role="alert">⚠️ {error}</p>;
  const q = search.toLowerCase();
  const filtered = posts.filter((p) => p.content.toLowerCase().includes(q) || p.author.name.toLowerCase().includes(q));
  if (!filtered.length) return <p>No posts found for "{search}".</p>;
  return <>{filtered.map((p) => <Post key={p.id} post={p} />)}</>;
}
