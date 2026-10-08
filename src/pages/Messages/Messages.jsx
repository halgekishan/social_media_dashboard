import React, { useState } from 'react';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import { mockConversations } from '../../data/mockData';

export default function Messages() {
  const [convos, setConvos] = useState(mockConversations);
  const [activeId, setActiveId] = useState(1);
  const [text, setText] = useState('');
  const active = convos.find((c) => c.id === activeId);

  const send = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setConvos(convos.map((c) => c.id === activeId
      ? { ...c, messages: [...c.messages, { id: Date.now(), from: 'me', text: text.trim() }] } : c));
    setText('');
  };

  return (
    <Card>
      <h2>Messages</h2>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
        {convos.map((c) => (
          <Button key={c.id} variant={c.id === activeId ? 'primary' : 'ghost'} onClick={() => setActiveId(c.id)}>{c.name}</Button>
        ))}
      </div>
      <div style={{ minHeight: 120 }}>
        {active.messages.map((m) => (
          <p key={m.id} style={{ textAlign: m.from === 'me' ? 'right' : 'left', margin: '6px 0' }}>
            <span style={{ background: m.from === 'me' ? 'var(--accent)' : 'var(--hover)', color: m.from === 'me' ? '#fff' : 'inherit', padding: '6px 12px', borderRadius: 14, display: 'inline-block' }}>{m.text}</span>
          </p>
        ))}
      </div>
      <form onSubmit={send} style={{ display: 'flex', gap: 8 }}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message..." aria-label="Message"
          style={{ flex: 1, padding: 8, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)' }} />
        <Button type="submit">Send</Button>
      </form>
    </Card>
  );
}
