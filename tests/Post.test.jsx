import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Post from '../src/components/Post/Post';

const post = { id: 1, author: { name: 'Aarav', avatar: 'a.png' }, time: '1h ago', content: 'Hello React', image: null, likes: 5, comments: [] };

test('renders post content and author', () => {
  render(<Post post={post} />);
  expect(screen.getByText('Hello React')).toBeInTheDocument();
  expect(screen.getByText('Aarav')).toBeInTheDocument();
});

test('like button toggles the count', async () => {
  render(<Post post={post} />);
  const btn = screen.getByRole('button', { name: /likes/i });
  await userEvent.click(btn);
  expect(btn).toHaveTextContent('6 Likes');
  await userEvent.click(btn);
  expect(btn).toHaveTextContent('5 Likes');
});

test('can add a comment', async () => {
  render(<Post post={post} />);
  await userEvent.click(screen.getByRole('button', { name: /comments/i }));
  await userEvent.type(screen.getByLabelText('Comment'), 'Nice!');
  await userEvent.click(screen.getByRole('button', { name: /send/i }));
  expect(screen.getByText('Nice!')).toBeInTheDocument();
});
