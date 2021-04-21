export const logOutUser = (history) => {

  return dispatch => {
    localStorage.removeItem("token")
    dispatch({ type: 'REMOVE_USER' })
    history.pust('/')
  }

}

export const deleteUser = (user) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_USER", payload: user });
    fetch(`http://localhost:3001/users/${user.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
      },
      body: JSON.stringify({ user }),
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: "DELETE_USER", payload: data }));
  };
};

export const editUser = (user) => {
  return (dispatch) => {
    dispatch({ type: "LOADING", payload: true });
    fetch(`http://localhost:3001/users/${user.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
      },
      body: JSON.stringify({ user }),
    })
      .then((response) => {
        if (response.ok === false) {
          throw dispatch({
            type: "ERROR",
            payload: "ERROR: Unable to save edits.",
          });
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "EDIT_CURRENT_USER", payload: data });
        dispatch({ type: "LOADING", payload: false });
        dispatch({ type: "ERROR", payload: null });
      })
      .catch((err) => {
        dispatch({ type: "LOADING", payload: false });
        dispatch({ type: "ERROR", payload: err.message });
      });
  };
};
