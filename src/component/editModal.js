import React from 'react'
import { Modal, Button } from 'antd';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './modal.css'
import { editCard } from '../action/action'
import { connect } from 'react-redux'

class App extends React.Component {
  state = {
    visible: false,
      _id: this.props.movie._id,
      title: this.props.movie.title,
      year: this.props.movie.year,
      synopsis: this.props.movie.synopsis,
      images: {
        poster: this.props.movie.images.poster,
      },
      rating: {
        watching: this.props.movie.rating.watching
      }
    
}

showModal = () => {
  this.setState({
    visible: true,
  });
};

handleInputChange = (e) => {
  let target = e.target;
  this.setState({
      [target.name]: target.value,
    
  });
}
handleInputImages = (e) => {
  let target = e.target;
  this.setState({
      images:{
        poster: target.value,
      
    } 
  })
}

handleOk = e => {
  e.preventDefault();
  this.setState({
    visible: false,
  });
};

handleCancel = e => {
  this.setState({
    visible: false,
  });
};



render() {
  return (
    <div>
      <Button onClick={this.showModal}>
        Edit
        </Button>
      <Modal
        title="Edit the movie information"
        visible={this.state.visible}
        onOk={(e) => { this.props.handleEdit(this.props.id, this.state); this.handleOk(e) }}
        onCancel={this.handleCancel}
      >
        <div className='form'>
          <h6>Image : </h6>
          <input type='text' placeholder='Enter image source' name='images' value={this.state.images.poster} onChange={(e) => this.handleInputImages(e)} />

          <h6>Movie name : </h6>
          <input type='text' name='title' placeholder='Movie name' value={this.state.title} onChange={(e) => this.handleInputChange(e)} />

          <h6>Rating :</h6>
          <Rater total={5} rating={this.state.rating.watching} onRate={(e) => this.setState({ watching: e.rating })} />

          <h6>Year : </h6>
          <input type='text' placeholder='2020' name='year' value={this.state.year} onChange={(e) => this.handleInputChange(e)} />

          <h6>Description :</h6>
          <textarea name='dsynopsis' placeholder='Enter description' value={this.state.synopsis} onChange={(e) => this.handleInputChange(e)} />

        </div>
      </Modal>
    </div>
  );
}
}


const mapStateToProps = state => {
  return {
    movieList: state
  }
}


const mapDispatchToProps = dispatch => {
  return ({
    handleEdit: (id, editedMovie) => dispatch(editCard(id, editedMovie))
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(App)