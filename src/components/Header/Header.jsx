import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header({ search, onSearch, theme, onToggleTheme, unread }) {
  const link = ({ isActive }) => (isActive ? styles.active : '');
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>SocialDash</h1>
      <nav className={styles.nav}>
        <NavLink to="/" end className={link}>Home</NavLink>
        <NavLink to="/profile" className={link}>Profile</NavLink>
        <NavLink to="/notifications" className={link}>Alerts{unread > 0 && <span className={styles.badge}>{unread}</span>}</NavLink>
        <NavLink to="/messages" className={link}>Messages</NavLink>
      </nav>
      <input className={styles.search} value={search} onChange={(e) => onSearch(e.target.value)} placeholder="🔍 Search posts/users" aria-label="Search" />
      <button className={styles.theme} onClick={onToggleTheme} aria-label="Toggle theme">{theme === 'dark' ? '☀️' : '🌙'}</button>
    </header>
  );
}
