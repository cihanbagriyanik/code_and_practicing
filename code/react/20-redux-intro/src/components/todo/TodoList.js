import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // const gorevler1 = useSelector((state) => state.todoReducer.gorevler);
  const { gorevler } = useSelector((state) => state.todoReducer);
  // console.log(gorevler);

  return (
    <div>
      <div>
        {gorevler.map((gorev) => (
          <TodoItem key={gorev.id} gorev={gorev} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
