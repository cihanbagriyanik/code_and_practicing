import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState } from "react";

interface ITodoType {
  todo: string;
  isDone: boolean;
  id: string | number;
  task?: string; //!optional
}

const Home = () => {
  // const [todos, setTodos] = useState([] as ITodoType[]);
  // const [todos, setTodos] = useState<Array<ITodoType>>([]);
  const [todos, setTodos] = useState<ITodoType[]>([]);

  return (
    <Container>
      <Typography color="error" align="center" variant="h2" component="h1">
        Todo App with TypeScript
      </Typography>
    </Container>
  );
};

export default Home;
