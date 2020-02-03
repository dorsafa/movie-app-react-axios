import React from 'react';
import './App.css';
import MovieList from './component/movieList'
import { BrowserRouter, Route } from 'react-router-dom'
import Description from './component/description'


function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' render={() => <div className="App">
                  <h1> Lists of films : </h1>
                  <MovieList />
                  </div>} />
        <Route exact path='/description/:id' component={Description} />
      </div>
    </BrowserRouter>

  );
}

export default App;

