import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Notifications from './pages/Notifications/Notifications';
import Messages from './pages/Messages/Messages';
import useLocalStorage from './hooks/useLocalStorage';
import { fetchPosts } from './utils/api';
import { mockNotifications } from './data/mockData';

export default function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState(mockNotifications);

  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .catch(() => setError('Could not load posts.'))
      .finally(() => setLoading(false));
  }, []);

  const markRead = (id) => setNotes((n) => n.map((x) => (x.id === id ? { ...x, read: true } : x)));
  const markAll = () => setNotes((n) => n.map((x) => ({ ...x, read: true })));

  return (
    <>
      <Header search={search} onSearch={setSearch} theme={theme}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        unread={notes.filter((n) => !n.read).length} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home posts={posts} loading={loading} error={error} search={search} />} />
          <Route path="/profile" element={<ProfilePage posts={posts} />} />
          <Route path="/notifications" element={<Notifications items={notes} onRead={markRead} onReadAll={markAll} />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="*" element={<p>404 - Page not found</p>} />
        </Routes>
      </main>
    </>
  );
}
