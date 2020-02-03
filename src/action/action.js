import {ADD_MOVIE_CARD,REMOVE_MOVIE_CARD,EDIT_CARD, FETCH_MOVIE} from './actionType'
import Axios from 'axios'

export const addMovieCard = (newMovie) => (
    {type:ADD_MOVIE_CARD,payload:newMovie}
)

export const removeMovieCard = (id) => (
    {type:REMOVE_MOVIE_CARD, payload:id}
)

export const editCard = (id, editedMovie) =>(
    {type:EDIT_CARD, payload:{id, editedMovie}}
)
export const fetchMovies =() => (dispatch) => {
    Axios({ method : 'get', url: 'https://tv-v2.api-fetch.website/movies/1'})
    .then(res => res.data)
    .then(data => {
        dispatch({
            type: FETCH_MOVIE,
            payload: data,
        })
    })
}