import { useHistory } from 'react-router';

export const getPosts = () => {
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
        dispatch({ type: "SET_POSTS", posts })
      })
  }
}

export const addPost = (post, id) => {
  // let history = useHistory()
  const postData = {
    img: post.img,
    description: post.description,
    // tags: post.tags,
    user_id: id
  }
  console.log(postData)
  return dispatch => {

    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
      },
      body: JSON.stringify(postData),
    })
      .then(r => r.json())
      .then(post => {
        dispatch({ type: 'SET_POST', post })
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













