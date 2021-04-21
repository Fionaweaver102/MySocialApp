import React, { Component } from 'react'
import { addPost } from '../../actions/postAction';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core';


class PostForm extends Component {

  state = {
    description: "",
    img: "",
    tags: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addPost(this.state, this.props.currentUserId, this.props.history)
    this.setState({
      description: "",
      img: "",
      tags: ""
    })
  }

  render() {

    return (
      <div>
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

          <TextField
            id="tags"
            label="tags"
            name="description"
            onChange={this.handleChange}
            value={this.state.description} />

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

export default connect(((state) => ({ currentUserId: state.currentUser.id })), { addPost })(PostForm)
