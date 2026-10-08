import React, { useState } from 'react';
import styles from './Post.module.css';
import Card from '../common/Card/Card';
import Button from '../common/Button/Button';

function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState(post.comments || []);
  const [showComments, setShowComments] = useState(false);
  const [text, setText] = useState('');

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  const addComment = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setComments([...comments, { id: Date.now(), user: 'You', text: text.trim() }]);
    setText('');
  };

  return (
    <Card>
      <div className={styles.header}>
        <img src={post.author.avatar} alt={post.author.name} className={styles.avatar} />
        <div><h3>{post.author.name}</h3><p>{post.time}</p></div>
      </div>
      <p className={styles.content}>{post.content}</p>
      {post.image && <img src={post.image} alt="Post content" className={styles.postImage} />}
      <div className={styles.actions}>
        <Button variant={isLiked ? 'primary' : 'ghost'} onClick={handleLike}>❤️ {likes} Likes</Button>
        <Button variant="ghost" onClick={() => setShowComments(!showComments)}>💬 {comments.length} Comments</Button>
        <Button variant="ghost">↪️ Share</Button>
      </div>
      {showComments && (
        <div className={styles.comments}>
          {comments.map((c) => <p key={c.id}><b>{c.user}:</b> {c.text}</p>)}
          <form onSubmit={addComment} className={styles.form}>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Write a comment..." aria-label="Comment" />
            <Button type="submit">Send</Button>
          </form>
        </div>
      )}
    </Card>
  );
}
export default React.memo(Post);
