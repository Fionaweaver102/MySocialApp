export const logOutUser = (history) => {

  return dispatch => {
    localStorage.removeItem("token")
    dispatch({ type: 'REMOVE_USER' })
    history.push('/')
  }
}

// export const userLoggedIn = () => {
//   const token = localStorage.getItem("token")

//   if (token) {
//     return dispatch => {
//       fetch("/auto_login", {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       })
//         .then(r => r.json())
//         .then(data => {
//           let user = { id: data.id, username: data.username }
//           dispatch({ type: 'ADD_USER', user })

//         })
//     }
//   }

// return dispatch => {
//   dispatch({ type: 'REMOVE_USER' })
// }




// export const deleteUser = (user) => {
//   return (dispatch) => {
//     dispatch({ type: "DELETE_USER", payload: user });
//     fetch(`http://localhost:3001/users/${user.id}`, {
//       method: "DELETE",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
//       },
//       body: JSON.stringify({ user }),
//     })
//       .then((response) => response.json()) // fulfilled and returns the user object
//       .then((data) => dispatch({ type: "DELETE_USER", payload: data }));
//   };
// };



export const editUser = (user, history, e) => {
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
        // history.push("/users/:id")
      })
  };
};

// export function getPosts() {
//   return (dispatch) => {
//     dispatch({ type: "LOADING" });
//     fetch(`http://localhost:3001/posts`, {
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//         Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
//       }
//     })
//       .then(resp => resp.json())
//       .then(posts => {
//         dispatch({ type: "SET_POSTS", posts })
//       })
//   }
// }