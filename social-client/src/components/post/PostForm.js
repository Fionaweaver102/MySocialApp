import React, { Component } from 'react'
import { addPost } from '../../actions/postAction';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core';

class PostForm extends Component {
  state = {
    description: "",
    img: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addPost(this.state, this.props.currentUserId)
    this.setState({
      description: "",
      img: ""
    })
  }

  render() {
    let user = localStorage.getItem('jwt_token')
    console.log(user)
    console.log("hello")
    return (
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="description"
            label="description"
            name="description"
            onChange={this.handleChange}
            value={this.state.description} />

          <TextField
            id="img"
            label="img"
            name="img"
            onChange={this.handleChange}
            value={this.state.img} />

          <Button
            type="submit"
            className="PostSubmit">
            Create Post
            </Button>
        </form>
      </div>
    )
  }
}

export default connect(((state) => ({ currentUserId: state.user.id })), { addPost })(PostForm)