
// import React from "react";
import { connect } from "react-redux";

import { fetchMovies } from '../action/action'

// function description(props) {
//   // const movie = props.movieList.filter(
//   //   el => el._id === props.match.params._id
//   // )[0];

//   return (
//           <h1 >
//             {/* {movie.synopsis} */}
//             {console.log('props.movieList:' , props.movieList)}
//           </h1>


//   );
// }

// const mapStateToProps = state => ({
//     movieList:state.movieList
// });

// export default connect(mapStateToProps)(description);

import React, { Component } from 'react'

class Description extends Component {

 
  componentDidMount() {
    this.props.getMovieList()
  }

  render() {
    return (
      <div className='description' >
        <div>Description :</div>
        <div>
        {this.props.movieList.filter(
        el => el._id === this.props.match.params.id
      )[0].synopsis}
        </div>
        
        
        
      </div>
    )
  }
}



const mapDispatchToProps = dispatch => ({
  getMovieList: () => dispatch(fetchMovies())
})

const mapStateToProps = state => ({
  movieList: state.movieList
})
export default connect(mapStateToProps, mapDispatchToProps)(Description)