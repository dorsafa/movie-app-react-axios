import { ADD_MOVIE_CARD, REMOVE_MOVIE_CARD, EDIT_CARD, FETCH_MOVIE } from "../action/actionType"
// import { movieList } from '../data'

// let movieList = []

let initState = {
  movieList:[]
}


const movieListReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MOVIE_CARD:
            return { movieList: [...state.movieList, action.payload] }

        case REMOVE_MOVIE_CARD:
            return {...state, movieList:[...state.movieList.filter((el)=> (el._id !== action.payload))]}
        case EDIT_CARD:
            return { movieList: [...state.movieList.map(el => el._id === action.payload.id ? { ...el, ...action.payload.editedMovie } : el)] }
        case FETCH_MOVIE: 
            return {...state,movieList:  action.payload }
            default: return state
    }

}

export default movieListReducer;