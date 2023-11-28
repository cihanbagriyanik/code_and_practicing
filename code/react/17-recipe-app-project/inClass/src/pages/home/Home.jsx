import React, { useContext, useState } from "react";
// import axios from "axios";
import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import { HomeImg, ImgDiv } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";
import { RecipeContext } from "../../App";

// const APP_ID = "bfbb3efc";

// const APP_KEY = "43faeee790f26cd82b28050d3031619d";

const Home = () => {
  // const [query, setQuery] = useState("");
  // const [ögün, setOgun] = useState("Breakfast");
  // const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${ögün}`;

  // const getData = async () => {
  //   const veri = await axios.get(url);
  //   console.log(veri.data.hits);
  //   setRecipes(veri.data.hits);
  // };
  // getData()

  const { recipes } = useContext(RecipeContext);

  return (
    <div>
      {/* <Header setQuery={setQuery} setOgun={setOgun} getData={getData} /> */}
      <Header />

      {recipes.length > 0 ? (
        <div>
          {/* <RecipeCard recipes={recipes} /> */}
          <RecipeCard />
        </div>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} alt="" />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
