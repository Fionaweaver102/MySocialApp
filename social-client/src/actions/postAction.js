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
        dispatch({ type: "SET_POSTS", posts })
      })

  }
}

export const logOutUser = (history) => {
  return dispatch => {
    localStorage.removeItem("token")
    dispatch({ type: 'REMOVE_USER' })
    history.push("/home")
  }
}
  // return dispatch => {
  //   dispatch({ type: "LOADING" })
  //   fetch("http://localhost:3001/posts")
  //     .then(resp => resp.json)
  //     .then(posts => dispatch({ type: "SET_POSTS", posts }))
  // };




  // return (
  //   <div>
  //     {loading && "Loading..."}
  //     {JSON.stringify(data)}
  //   </div>
  // );
// };

// export { getPosts };









