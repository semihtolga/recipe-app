import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88c1ac63f29f498";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    const { data } = await axios(url);
   
    setRecipes(data.hits);
  };
  console.log(recipes);

  useEffect(() => {
    getData();
  }, []);

  return <div>Home</div>;
};

export default Home;
