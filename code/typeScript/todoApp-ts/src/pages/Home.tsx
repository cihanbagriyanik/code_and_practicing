import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";
import { SweetAlertIcons, SweetPosition, notify } from "../helper/sweetalert";

// interface ITodoType {
//   todo: string;
//   isDone: boolean;
//   id: string | number;
//   task?: string; //!optional
// }

const url: string = import.meta.env.VITE_BASE_URL;

const Home = () => {
  // const [todos,setTodos] = useState([] as ITodoType[])
  // const [todos,setTodos] = useState<Array<ITodoType>>([])
  const [todos, setTodos] = useState<ITodoType[]>([]);

  const getTodos = async () => {
    try {
      const { data } = await axios<ITodoType[]>(url);
      setTodos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const addTodo = async (text:string) => {

  // }

  // type AddFn = (text:string) => Promise<void>;

  const addTodo: AddFn = async (text) => {
    try {
      await axios.post(url, { todo: text, isDone: false });
      notify(
        "The todo was created successfully",
        SweetAlertIcons.SUCCESS,
        SweetPosition.Center
      );
    } catch (error) {
      console.log(error);
    } finally {
      getTodos();
    }
  };

  const toggleTodo: ToggleFn = async (todo) => {
    try {
      await axios.put(`${url}/${todo.id}`, { ...todo, isDone: !todo.isDone });
      notify(
        "The todo is done successfully",
        SweetAlertIcons.SUCCESS,
        SweetPosition.TopStart
      );
    } catch (error) {
      console.log(error);
    } finally {
      getTodos();
    }
  };
  const deleteTodo: DeleteFn = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      notify(
        "The todo is deleted successfully",
        SweetAlertIcons.SUCCESS,
        SweetPosition.BottomEnd
      );
    } catch (error) {
      console.log(error);
    } finally {
      getTodos();
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Typography color="error" align="center" variant="h2" component="h1">
        Todo App with Typescript
      </Typography>
      <AddTodoComp addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </Container>
  );
};

export default Home;
