import React, {useEffect, useState} from "react";

// useEffect will run after render
const Count = () => {
  const [searchValue, setSearchValue] = useState('');
  const [movie, setMovie] = useState({});

  const fetchData = () => {
    let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=18047d2f&t=' + searchValue;
    fetch(url)
      .then(data => {
        if (!data.ok) {
          throw new Error('Failed to fetch');
        }
        return data.json();
      })
      .then(data => {
        setMovie(data);
      })
      .catch(err => Promise.reject(err))
  }

  // this side effect will happen when prop searchValue changed, this will be run
  useEffect(() => {
    fetchData();
  }, [searchValue])

  // this side effect will happen when prop movie changed, this will be run
  useEffect(() => {
    console.log('movie result has been changed');
  }, [movie])

  return (
    <React.Fragment>
      <div>
        <span>useEffect sample</span>
      </div>
      <div className='search'>
        <span>search movie: </span>
        <input
          type="text"
          placeholder="search"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </div>
      <div className='search'>
        <span>movie list: </span>
        <div className='search search-result'>
          <label>Title: <span>{movie.Title}</span></label>
          <label>Director: <span>{movie.Director}</span></label>
          <label>Actors: <span>{movie.Actors}</span></label>
        </div>
      </div>
    </React.Fragment>
  )
};

export default Count;