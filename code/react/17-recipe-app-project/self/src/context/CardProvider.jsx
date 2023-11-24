import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [card, setCard] = useState([]);
  const [query, setQuery] = useState([]);
  const [meal, setMeal] = useState([]);

  const APP_KEY = "3fec983fbe21158f8ae4bbfa8dc7a980";
  const APP_ID = "3c651bf4";
  const BASE_URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios(BASE_URL);
      // console.log(data);
      setCard(data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  const values = { card, setCard, query, setQuery, meal, setMeal, getData };

  return <CardContext.Provider value={values}>{children}</CardContext.Provider>;
};

export const useCardContext = () => {
  return useContext(CardContext);
};

export default CardProvider;
