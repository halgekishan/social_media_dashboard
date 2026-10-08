import React, { useState } from 'react';
import styles from './Profile.module.css';
import Card from '../common/Card/Card';
import Button from '../common/Button/Button';
import Modal from '../common/Modal/Modal';

export default function Profile({ user }) {
  const [bio, setBio] = useState(user.bio);
  const [draft, setDraft] = useState(user.bio);
  const [open, setOpen] = useState(false);

  const save = () => { setBio(draft); setOpen(false); };

  return (
    <Card>
      <div className={styles.wrap}>
        <img src={user.avatar} alt={user.name} className={styles.avatar} />
        <div>
          <h2>{user.name}</h2>
          <p className={styles.handle}>{user.handle}</p>
          <p>{bio}</p>
          <p className={styles.stats}><b>{user.followers}</b> Followers · <b>{user.following}</b> Following</p>
          <Button onClick={() => setOpen(true)}>Edit Bio</Button>
        </div>
      </div>
      <Modal open={open} title="Edit Bio" onClose={() => setOpen(false)}>
        <textarea className={styles.textarea} value={draft} onChange={(e) => setDraft(e.target.value)} aria-label="Bio" />
        <Button onClick={save}>Save</Button>
      </Modal>
    </Card>
  );
}
