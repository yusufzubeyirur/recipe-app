"use client";
import axios from "axios";
import React, { useState } from "react";
import Recipelist from "./Recipelist";

export default function Home() {
  const [search, setSearch] = useState("");
  const [featuredRecipes, setFeaturedRecipes] = useState([]);

  const Api_Id = `2e4997e4`;
  const Api_Key = `d10988b799e37c56735a92b056afe6bf`;

  const fetchRecipes = async () => {
    if (search) {
      try {
        const url = `https://api.edamam.com/search?q=${search}&app_id=${Api_Id}&app_key=${Api_Key}`;
        const response = await axios.get(url);
        const data = response.data;
        setFeaturedRecipes(data.hits);
        console.log(data);
      } catch (error) {
        console.error("Veri Çekilemedi", error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  return (
    <div className="w-full flex flex-col">
      <h1>Project 9 Recipe App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tarifler burada..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">Ara</button>
      </form>
      <Recipelist recipes={featuredRecipes} />
    </div>
  );
}
