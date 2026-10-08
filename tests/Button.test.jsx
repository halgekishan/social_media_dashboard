import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../src/components/common/Button/Button';

test('calls onClick when clicked', async () => {
  const fn = vi.fn();
  render(<Button onClick={fn}>Click</Button>);
  await userEvent.click(screen.getByText('Click'));
  expect(fn).toHaveBeenCalledTimes(1);
});
