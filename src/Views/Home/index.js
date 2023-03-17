import React, { useEffect, useState } from "react";
import axios from "axios";
import Card1 from "../../componentes/Card";

// Import Swiper styles
import "./home.css";

import { Button, Input, TextField } from "@mui/material";

function Home() {
  const [post, setPost] = useState([]);
  const [buscar, setBuscar] = useState([]);
  const [busqueda, setbusqueda] = useState("");
  const onChangeSearch = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setBuscar({
      [name]: value,
    });
  };
  const handleClick = () => {
    setbusqueda(buscar?.buscar);

    getModules();

    console.log("Busqueda...");
  };
  useEffect(() => {
    setbusqueda(buscar?.buscar);
  }, [buscar]);
  const baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=eTzRprbo8Q9bfYaNzJ1PI5Etc4y7uQVQ&q=${busqueda}`;
  console.log(busqueda);

  const getModules = async () => {
    try {
      const response = await axios({
        url: `${baseUrl}`,
        method: "GET",
      });
      setPost(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="tittle">Buscar gift</h1>
      <div className="search">
      <TextField
          type="search"
          placeholder="Buscar gif"
          name="buscar"
          onChange={onChangeSearch}
          variant="outlined"
        />
      
        <Button onClick={handleClick} type="submit" variant="contained" color="primary" className="btn_de">
          Buscar
        </Button>
      </div>
      <div className="wrapper">
        {post.length ? (
          post.map((post, index) => {
            return (
              <Card1
                key={index}
                title={post?.title}
                body={post?.user?.avatar_url}
              />
            );
          })
        ) : (
          <div>No se encontro regitros</div>
        )}
      </div>
    </div>
  );
}

export default Home;
