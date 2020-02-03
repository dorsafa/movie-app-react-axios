import React, { Component } from 'react'
import './movieList.css'
import MovieCard from './movieCard'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import Modals from './modal'
import { Form, FormControl, Button } from 'react-bootstrap';
import {connect} from 'react-redux'
// import axios from "axios";
import {fetchMovies} from '../action/action'


 class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            search: '',
            rating: 0,
            data:null
        }
    }

    componentDidMount(){
        this.props.getMovieList()
    }
   
    //////////// Gérer input search  by name
    handleSearchName = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    //////////// Gérer input search  by rate
    handleSearchRate = (e) => {
        this.setState({
            rating: Number(e.rating)
        })
    }

    render() {
        return (
            <div>
                <div className='search'>
                    <Form inline>
                        <FormControl type="text" placeholder="Search film" className="mr-sm-2" value={this.state.search} onChange={(e) => this.handleSearchName(e)} />
                        <Button variant="info" >Search</Button>
                    </Form>
                    <div className='raterSearch'>
                        <span> Minimun rating </span>
                        <Rater total={5} rating={Number(this.state.rating)} onRate={(e) => this.handleSearchRate(e)} />
                    </div>
                </div>
            

                <div className='movieList'>
                    <Modals movieList={this.props.movieList}  />
                    {this.props.movieList.filter((el)=> 
                    (el.title.toLowerCase().includes(this.state.search.toLowerCase())
                    && (el.rating.watching >= this.state.rating)
                    )).map((el,i)=> (
                        <MovieCard list={el} key={i} />
                    )) }
                </div>

            </div>
        )
    }

}

const mapStateToProps =state => {
    return {
        movieList:state.movieList
    }
}

const mapDispatchToProps = dispatch => ({
    getMovieList : () => dispatch(fetchMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);