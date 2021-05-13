import "./App.css";
import Rows from "./components/Rows";
import requests from "./requests";

function App() {
  return (
    <>

       <h2>I am building Netflix Clone</h2>
      <Rows title="Trending" fetchUrl={requests.fetchTrending} />
      <Rows
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Rows title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Rows title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Rows title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default App;
