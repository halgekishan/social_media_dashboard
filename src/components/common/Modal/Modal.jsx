import React from 'react';
import styles from './Modal.module.css';

export default function Modal({ open, title, onClose, children }) {
  if (!open) return null;
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} role="dialog" aria-label={title} onClick={(e) => e.stopPropagation()}>
        <div className={styles.head}><h3>{title}</h3><button onClick={onClose} aria-label="Close">✕</button></div>
        {children}
      </div>
    </div>
  );
}
