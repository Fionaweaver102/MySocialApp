export const getPosts = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch(`http://localhost:3001/posts`
      , {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      }
    )
      .then(resp => resp.json())
      .then(posts => {
        console.log("d")
        dispatch({ type: "SET_POSTS", posts })
      })
  }
}















