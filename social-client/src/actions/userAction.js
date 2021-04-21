export const logOutUser = (history) => {

  return dispatch => {
    localStorage.removeItem("token")
    dispatch({ type: 'REMOVE_USER' })
    history.push("/")
  }

}

export const userLoggedIn = () => {
  const token = localStorage.getItem("token")

  if (token) {
    return dispatch => {
      fetch("/auto_login", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(r => r.json())
        .then(data => {
          let user = { id: data.id, username: data.username }
          dispatch({ type: 'SET_USER', user })

        })
    }
  }

  return dispatch => {
    dispatch({ type: 'REMOVE_USER' })
  }
}
