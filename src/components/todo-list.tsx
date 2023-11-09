import { TodoItem } from '@/components';
import type { Todo } from '@/types/todo';

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function TodoList({ todos, setTodos }: Props) {
  return (
    <>
      {todos.length === 0 ? (
        <p>No Todos Available</p>
      ) : (
        <>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
          ))}
        </>
      )}
    </>
  );
}
