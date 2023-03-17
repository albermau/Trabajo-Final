import { Button, Input } from "@mui/material";
import React from "react";

const Search = ({ setBuscar, handleClick}) => {
    const onChangeSearch = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setBuscar({
          [name]: value,
        });
       
      };
  return (
    <div className="search">
      <Input type="search" placeholder="Buscar gif" name="buscar" onChange={onChangeSearch}/>
      <Button onClick={handleClick} type="submit">Buscar</Button>
    </div>
  );
};

export default Search;
