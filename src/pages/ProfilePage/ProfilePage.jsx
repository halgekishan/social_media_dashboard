import React from 'react';
import Profile from '../../components/Profile/Profile';
import Post from '../../components/Post/Post';
import { currentUser } from '../../data/mockData';

export default function ProfilePage({ posts }) {
  return (
    <>
      <Profile user={currentUser} />
      <h3>Recent Activity</h3>
      {posts.slice(0, 2).map((p) => <Post key={p.id} post={p} />)}
    </>
  );
}
