import React from 'react'
import { Card } from 'react-bootstrap'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './movieCard.css'
import { connect } from 'react-redux'
import { removeMovieCard } from '../action/action'
import Modal from './editModal'
import { Button } from 'antd';
import { Link } from 'react-router-dom'


function MovieCard(props) {
    return (
        <Card style={{ width: '18rem' }} className='movieCard' >
            <Card.Img variant="top" src={props.list.images.poster} />
            <Card.Body>
                <Rater total={5} rating={Number(props.list.rating.watching)} interactive={false} />
                <Card.Title>{props.list.title}</Card.Title>
                <Card.Subtitle>{props.list.year}</Card.Subtitle>
               <Link  to={`/description/${props.list._id}`}>
                   
               <div className='buttonDescription'>
                    <Button>Description</Button>
                </div>
               </Link>
               
                <div className='buttonDeleteEdit' >
                    <Modal id={props.list._id} movie={props.list} />
                    <Button onClick={(e) => { e.preventDefault(); props.handleRemove(props.list._id) }}>Delete</Button>
                </div>

            </Card.Body>
        </Card>
    )


}
const mapStateToProps = state => {
    return {
        movieList: state
    }
}


const mapDispatchToProps = dispatch => {
    return ({
        handleRemove: (id) => dispatch(removeMovieCard(id)),
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)