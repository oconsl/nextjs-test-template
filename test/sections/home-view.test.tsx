import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HomeView } from '@/sections';

describe('HomeView', () => {
  beforeEach(() => {
    render(<HomeView />);
  });

  afterEach(() => {
    cleanup();
  });

  it('should add a new todo', async () => {
    const user = userEvent.setup();
    const timestamp = Date.now();

    const input = screen.getByPlaceholderText(/new todo/i);
    await user.type(input, `Nueva tarea 😁 ${timestamp}`);
    expect(input).toHaveValue(`Nueva tarea 😁 ${timestamp}`);

    const submitButton = screen.getByRole('button', {
      name: 'Submit',
    });
    await user.click(submitButton);

    expect(input).toHaveValue('');

    const todoTitle = await screen.findByText(`Nueva tarea 😁 ${timestamp}`);
    expect(todoTitle).toBeInTheDocument();
  });

  it('should delete a todo', async () => {
    const user = userEvent.setup();

    const todoTitle = screen.queryByText(/get coffee/i);

    expect(todoTitle).toBeInTheDocument();

    const button = screen.getAllByTestId('delete-button')[1];
    await user.click(button);

    expect(todoTitle).not.toBeInTheDocument();
  });
});
