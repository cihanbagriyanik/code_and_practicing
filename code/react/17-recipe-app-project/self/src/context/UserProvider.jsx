import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    
  const APP_KEY = "3fec983fbe21158f8ae4bbfa8dc7a980"
  const APP_ID = "3c651bf4"
  const BASE_URL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=lunch`;


  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios(BASE_URL);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const values = { users, setUsers };

  return( 
  <UserContext.Provider value={values}>
    {children}
  </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return UserContext(UserContext);
};

export default UserProvider;
