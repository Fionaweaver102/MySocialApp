import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { TextField, Button } from '@material-ui/core';

const PostForm = (props) => {
  let history = useHistory();

  const [values, setValues] = useState({
    description: "",
    img: "",
  })

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    postData()
  }

  const postData = async () => {
    const inputData = {
      description: values.description,
      img: values.img,
      user_id: localStorage.getItem('currentUser')
    }

    await fetch("http://localhost:3001/posts"
      , {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      })
      .then(r => r.json())
      .then(post => {
        props.addPost(post)
        history.push("/posts")
      })
  }

  let user = localStorage.getItem('currentUser')
  console.log(user)
  console.log("hello")
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="description"
          label="description"
          name="description"
          onChange={handleChange}
          value={values.description} />

        <TextField
          id="img"
          label="img"
          name="img"
          onChange={handleChange}
          value={values.img} />

        <Button
          type="submit"
          className="PostSubmit">
          Create Post
            </Button>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: (post) => dispatch({ type: 'ADD_POST', payload: post })
  }
}

export default connect(null, mapDispatchToProps)(PostForm)
