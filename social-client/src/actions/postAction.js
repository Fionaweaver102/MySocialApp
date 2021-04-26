export const getPosts = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    // useEffect(() => {
    fetch(`http://localhost:3001/posts`
      , {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
        }
      }
    )
      .then(resp => resp.json())
      .then(posts => {
        dispatch({ type: "SET_POSTS", posts })
      })
  }
}















