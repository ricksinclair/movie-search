import React, {useEffect, useState} from 'react'
import './App.css'
import SearchCard from "./components/SearchCard/SearchCard";
import ResultCard from "./components/ResultCard/ResultCard";
import PopupUtil from "./components/animation-util/PopUpUtil";


const baseURL = "https://www.omdbapi.com/?s=";

function App() {
    const [movies, setMovies] = useState<any>([
        {
            Title: 'Star Wars: Episode IV - A New Hope',
            Year: '1977',
            imdbID: 'tt0076759',
            Type: 'movie',
            Poster:
                'https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
        },
        {
            Title: 'Star Wars: Episode V - The Empire Strikes Back',
            Year: '1980',
            imdbID: 'tt0080684',
            Type: 'movie',
            Poster:
                'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        },
        {
            Title: 'Star Wars: Episode VI - Return of the Jedi',
            Year: '1983',
            imdbID: 'tt0086190',
            Type: 'movie',
            Poster:
                'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
        },
    ])
    const [isPending, setIsPending] = useState<any>(true)

    const [userQuery, setUserQuery] = useState('star wars')
    useEffect(() => {

        fetch(`${baseURL}${userQuery}&page=1&apikey=a5c7c0be&plot=full`).then(async res => {
            setIsPending(false)
            return await res.json()
        }).then(
            data => {
                const res = data.Search
                if (res)
                    setMovies((movies: any) => [...res])
                else
                    setMovies([])

                console.log(res)
            }
        ).then(() => {
                setIsPending(false);
                if (movies.length == 0)
                    return (<div><h1>NO Results</h1></div>)
                else
                    returnMarkup();
            }
        ).catch(e => console.error(e))

    }, [userQuery]);

    useEffect(() => {
        returnMarkup()
    }, [isPending, movies, userQuery]);


    const returnMarkup = () => {
        return (<ul className="movie-list">
            {

                movies.map(
                    (movie: any) => (<li key={`${movie.imdbID}`}><ResultCard  imdbID={movie.imdbID} loading={isPending}
                                                 title={movie.Title} poster={movie.Poster} Year={movie.Year}/></li>)
                     )}


        </ul>)

    }

    return (

        <div className="App">

            <SearchCard setUserQuery={setUserQuery}/>

            <PopupUtil>
                {movies.length > 0 &&
                    <div className="result-list-area">
                        <h1 className="result-title">Results</h1>
                        <div className="list-container">

                            {returnMarkup()}

                        </div>

                    </div>
                }
            </PopupUtil>


        </div>


    )
}

export default App;
