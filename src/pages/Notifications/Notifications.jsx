import React from 'react';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import Notification from '../../components/Notification/Notification';

export default function Notifications({ items, onRead, onReadAll }) {
  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Notifications</h2>
        <Button variant="ghost" onClick={onReadAll}>Mark all read</Button>
      </div>
      {items.map((n) => <Notification key={n.id} item={n} onRead={onRead} />)}
    </Card>
  );
}
