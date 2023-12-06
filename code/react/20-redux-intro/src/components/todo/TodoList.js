import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div>
      <div>
        {[].map((gorev) => (
          <TodoItem key={gorev.id} gorev={gorev} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
