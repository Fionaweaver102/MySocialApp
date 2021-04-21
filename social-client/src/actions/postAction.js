export function getPosts() {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch(`http://localhost:3001/posts`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
      }
    })
      .then(resp => resp.json())
      .then(posts => {
        dispatch({ type: "NOT_LOADING" })
        dispatch({ type: "ADD_POSTS", posts })
      })
  }
}

// import axios from 'axios';

// export function addPost(payload) {
//   axios.post("http://localhost:3001/posts", payload, { withCredentials: true })
//     .then(response => payload.dispatch({ type: "ADD_POST", payload: response.data })).catch(err => console.log(err.message))
// }

export const addPost = (post, id, history) => {
  const postData = {
    img: post.img,
    description: post.description,
    tags: post.tags,
    user_id: id
  }
  console.log(postData)
  return dispatch => {

    fetch("http://localhost:3001/users/:user_id/posts", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData),
    })
      .then(r => r.json())
      .then(post => {
        dispatch({ type: 'ADD_POST', post })
        // history.push("/posts")
      })
  }
}


// export const addPost = (post, id, history) => {
//   const postData = {
//     img: post.img,
//     description: post.description,
//     tags: post.tags,
//     user_id: id
//   }
//   return dispatch => {

//     fetch("http://localhost:3001/posts", {
//       method: "POST",
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(postData)
//     })
//       .then(r => r.json())
//       .then(post => {
//         dispatch({ type: 'ADD_POST', post })
//         // history.push("/posts")
//       })
//   }
// }













