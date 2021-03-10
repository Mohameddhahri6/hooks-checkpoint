
import './App.css';
import React, {useState} from 'react';
import MoviesList from './MoviesList';
import Search from './Search';
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter,Route} from 'react-router-dom'
import Description from './Description'
function App() {
  const [movies,setMovies] = useState ([


    {  id:uuidv4(),
        main_img:
          "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        second_img:
          "",
        title: "Star Wars: Episode IV - A New Hope",
        duration: "125 min",
        date: "1977",
        rate: 4,
        genre: "Action, Fantasy",
        description:
          "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.",
      },
      {id:uuidv4(),
        main_img: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        second_img:
        "",
        title: "Star Wars: Episode V - The Empire Strikes Back",
        duration: "127 min",
        date: "1980",
        rate: 5,
        genre: "Action, Fantasy",
        description:
        "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.",
      },
      {id:uuidv4(),
        main_img: "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        second_img:
          "",
        title: "Star Wars: Episode VI - Return of the Jedi",
        duration: "127 min",
        date: "1983",
        rate: 1,
        genre: "Action, Adventure,",
        description:
          "American epic space opera film directed by Richard Marquand. ... In the film, the Galactic Empire, under the direction of the ruthless Emperor, is constructing a second Death Star in order to crush the Rebel Alliance once and for all.",
      },
    ])
    
    const addMovie= (movie) => {
      setMovies(movies.concat(movie))
    }
    const [keyword,setKeyword] = useState("")
    const [newRate, setNewRate] = useState(1)
    const search =(text)=> {
      setKeyword(text);
    }
    const setRate =(rate) => {
      setNewRate(rate);
    }
  return (
    <BrowserRouter>
    <div className="container">
      <Search search={search} setRate={setRate} newRate={newRate}/>
    <MoviesList addMovie={addMovie} movies= {movies.filter(movie => movie.rate >= newRate && 
      movie.title.toLowerCase().includes(keyword.toLowerCase().trim()))}/>
    </div>
    <Route path="/description/:id" render= { (props) => <Description {...props} movies={movies}/>} />
    </BrowserRouter>
    
  );
}

export default App;
