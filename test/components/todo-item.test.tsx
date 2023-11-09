import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoItem } from '@/components';

const mockTodo = {
  id: 1,
  userId: 10,
  title: 'Just a todo',
  completed: false,
};

const mockSetTodos = vi.fn();

describe('TodoItem', () => {
  describe('Render elements', () => {
    it('should render an article', () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);

      const article = screen.getByRole('article');

      expect(article).toBeInTheDocument();
    });

    it('should render a checkbox', () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
    });

    it('should render a button', () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);

      const button = screen.getByTestId('delete-button');

      expect(button).toBeInTheDocument();
    });
  });

  //* AAA PATTERN: Arrange | Act | Assert

  describe('Behavior of component', () => {
    it('should call setTodos when button is clicked', async () => {
      const user = userEvent.setup();
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);

      const button = screen.getByTestId('delete-button');
      await user.click(button);

      expect(mockSetTodos).toHaveBeenCalled();
    });

    it('should call setTodos when checkbox is clicked', async () => {
      const user = userEvent.setup();
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);

      const checkbox = screen.getByRole('checkbox');
      await user.click(checkbox);

      expect(mockSetTodos).toHaveBeenCalled();
    });
  });
});
