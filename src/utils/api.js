import { mockPosts } from '../data/mockData';

const avatars = [5, 47, 33, 15, 60];

// Fetches posts from a public API; falls back to mock data if offline.
export async function fetchPosts() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    if (!res.ok) throw new Error('Request failed');
    const data = await res.json();
    return data.map((p, i) => ({
      id: 100 + p.id,
      author: { name: `User ${p.userId}`, avatar: `https://i.pravatar.cc/100?img=${avatars[i % 5]}` },
      time: `${i + 1}h ago`,
      content: p.title.charAt(0).toUpperCase() + p.title.slice(1),
      image: i % 2 === 0 ? `https://picsum.photos/seed/api${p.id}/600/300` : null,
      likes: Math.floor(Math.random() * 40),
      comments: [],
    }));
  } catch {
    return mockPosts;
  }
}
