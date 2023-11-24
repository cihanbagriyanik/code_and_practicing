import UserProvider from "./context/UserProvider";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
};

export default App;
