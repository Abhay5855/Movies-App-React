import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rows from "./components/Rows";
// import Navbar from "./components/Navbar";
// import Add from "./components/Add";
import Input from "./components/Input"

import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  const [searchMovies, setSearchMovies] = useState('');

  console.log(searchMovies);

  const getMovies = async () => {
    const url = "http://www.omdbapi.com/?s='rocky'&apikey=e86e479e";

    const response = await fetch(url);

    const responseJson = await response.json();

    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>

            <Input searchMovies={searchMovies}  setSearchMovies={setSearchMovies}  />
           
            <Rows  movies={movies} />
         
    </>
  );


}

export default App;
