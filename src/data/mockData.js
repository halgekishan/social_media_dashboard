const av = (n) => `https://i.pravatar.cc/100?img=${n}`;

export const currentUser = {
  id: 1, name: 'Kishan Halge', handle: '@kishan', avatar: av(12),
  bio: 'Full Stack Developer | Django + React | Nanded',
  followers: 1280, following: 342,
};

export const mockPosts = [
  { id: 1, author: { name: 'Aarav Patil', avatar: av(5) }, time: '2h ago', content: 'Just deployed my first React app on Vercel! 🚀', image: 'https://picsum.photos/seed/react1/600/300', likes: 24, comments: [{ id: 1, user: 'Sneha', text: 'Congrats!' }] },
  { id: 2, author: { name: 'Sneha Joshi', avatar: av(47) }, time: '5h ago', content: 'useEffect cleanup functions finally make sense to me 😅', image: null, likes: 11, comments: [] },
  { id: 3, author: { name: 'Rohan Deshmukh', avatar: av(33) }, time: '1d ago', content: 'Reusable components save so much time. Button, Card, Modal — done.', image: 'https://picsum.photos/seed/ui2/600/300', likes: 38, comments: [] },
];

export const mockNotifications = [
  { id: 1, text: 'Aarav liked your post', time: '10m ago', read: false },
  { id: 2, text: 'Sneha commented on your post', time: '1h ago', read: false },
  { id: 3, text: 'Rohan started following you', time: '3h ago', read: true },
];

export const mockConversations = [
  { id: 1, name: 'Aarav Patil', avatar: av(5), messages: [{ id: 1, from: 'them', text: 'Hey! Dashboard kasa chalaay?' }] },
  { id: 2, name: 'Sneha Joshi', avatar: av(47), messages: [{ id: 1, from: 'them', text: 'Can you review my PR?' }] },
];
