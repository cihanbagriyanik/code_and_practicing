import CardProvider from "./context/CardProvider";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <CardProvider>
      <AppRouter />
    </CardProvider>
  );
};

export default App;
