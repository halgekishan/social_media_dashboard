import React from 'react';
import styles from './Notification.module.css';

export default function Notification({ item, onRead }) {
  return (
    <div className={`${styles.item} ${item.read ? '' : styles.unread}`} onClick={() => onRead(item.id)}>
      <span>🔔 {item.text}</span>
      <small>{item.time}</small>
    </div>
  );
}
