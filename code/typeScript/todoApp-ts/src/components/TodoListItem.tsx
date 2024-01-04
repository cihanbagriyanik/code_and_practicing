import { IconButton, ListItem, ListItemText } from "@mui/material";
import { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
interface ITodoListItem {
  todo: ITodoType;
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;
}

const TodoListItem: FC<ITodoListItem> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <ListItem
      disableGutters
      sx={{ cursor: "pointer", padding: "1rem" }}
      secondaryAction={
        <IconButton
          sx={{ "&:hover": { color: "red" } }}
          aria-label="delete"
          onClick={() => deleteTodo(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        onClick={() => toggleTodo(todo)}
        primary={todo.todo}
        sx={{ wordWrap: "break-word" }}
      />
    </ListItem>
  );
};

export default TodoListItem;
