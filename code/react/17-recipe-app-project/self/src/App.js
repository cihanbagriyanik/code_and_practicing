import CardProvider from "./context/CardProvider";
import AppRouter from "./router/AppRouter";
import "./App.css"

const App = () => {
  return (
    <CardProvider>
      <AppRouter />
    </CardProvider>
  );
};

export default App;
