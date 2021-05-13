import "./App.css";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Rows from "./components/Rows";
import Navbar from "./components/Navbar"

import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([
   
  ]);

  const getMovies = async () => {
    const url = "http://www.omdbapi.com/?s=avengers&apikey=e86e479e";

    const response = await fetch(url);

    const responseJson = await response.json();

    

    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>


     <Router>

        <Navbar />



       <Switch>
         <Route exact path="/" >
           <Watchlist />
         </Route>

         <Route path="/add">

         <Add />


         </Route>

         <Route>
           <Watched />
         </Route>
       </Switch>


     </Router>





      {/* <div className="movie__container">
        <Rows key={movies.imdbID} movies={movies} />
        </div> */}


















        </>





        )

}


export default App;