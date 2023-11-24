import React from "react";
import MyForm from "./Form";
import RecipeCard from "../../pages/home/RecipeCard";

const Header = () => {
  return (
    <div className="text-center">
      <h1 className="p-3">Recipe</h1>
      <MyForm />
      <RecipeCard />
    </div>
  );
};

export default Header;
