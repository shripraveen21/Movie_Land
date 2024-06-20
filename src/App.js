import { useEffect , useState} from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'
//fd1504d1 ->API key
const API_url ="http://omdbapi.com/?apikey=fd1504d1&";

const APP = () => {
    const [movies, setMovies]=useState([]);
    const [searchTerm, setSearchTerm]=useState([]);
    const searchMovies = async(title)=>{
        const response = await fetch(`${API_url}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search)
    };
    useEffect(()=>
        {searchMovies('spiderman');
    },[]);  
    return (
        <div className='app'>
            <h1>Movie Land</h1>
            
            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt='search'
                    onClick={()=>searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length>0
                  ? (
                    <div className="container">
                    {movies.map((movie)=>(
                        <MovieCard movie={movie} />
                    ))}
                </div>
                  ) : (
                    <div className='empty'>
                    <p>No movies found</p>
                    </div>
                  )


            }






        </div>
    );
}


export default APP;