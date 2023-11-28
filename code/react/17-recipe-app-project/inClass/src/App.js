import React, { createContext, useState } from "react";
import AppRouter from "./router/AppRouter";
import axios from "axios";

export const RecipeContext = createContext();

const APP_ID = "bfbb3efc";

const APP_KEY = "43faeee790f26cd82b28050d3031619d";

const App = () => {
  //! login ve privateRouter icin
  const [name, setName] = useState(localStorage.getItem("username") || "");
  const [pass, setPass] = useState(localStorage.getItem("password") || "");

  //! home header ve recipeCard icin
  const [recipes, setRecipes] = useState([]);

  const [query, setQuery] = useState("");
  const [ogun, setOgun] = useState("Breakfast");
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${ogun}`;

  const getData = async () => {
    const veri = await axios.get(url);
    console.log(veri.data.hits);
    setRecipes(veri.data.hits);
  };

  return (
    <RecipeContext.Provider
      value={{
        name,
        pass,
        setName,
        setPass,
        query,
        setQuery,
        ogun,
        setOgun,
        getData,
        recipes,
      }}
    >
      <AppRouter />
    </RecipeContext.Provider>

    // <div>
    //   <AppRouter />
    // </div>
  );
};

export default App;
