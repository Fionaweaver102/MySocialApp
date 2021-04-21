


// export function getUsers() {
//   return (dispatch) => {
//     dispatch({ type: "LOADING" });
//     fetch(`http://localhost:3001/user/:id`, {
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//         Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
//       }
//     })
//       .then(resp => resp.json())
//       .then(user => {
//         dispatch({ type: "NOT_LOADING" })
//         dispatch({ type: "SET_USER", user })
//       })

//   }
// }

// const Login = (props) => {
//   let history = useHistory()

//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")

//   const renderError = (response) => {
//     response.json().then(message => {
//       console.log(message)
//       window.alert(message.errors[0])
//     })
//   }

//   const handleUsername = (e) => {
//     setUsername(e.target.value)
//   }

//   const handlePassword = (e) => {
//     setPassword(e.target.value)
//   }

//   const loginFetch = async (e) => {
//     e.preventDefault()
//     console.log("logging in")
//     const loginData = {
//       user: {
//         username: username,
//         password: password
//       }
//     }

//     fetch("http://localhost:3001/login", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify(loginData)
//     })
//       .then(resp => {
//         if (resp.status === 401) {
//           renderError(resp)
//         }
//         else {
//           return resp.json()
//         }
//       })
//       .then(json => {
//         console.log(json)
//         localStorage.setItem('jwt_token', json.jwt)
//         const userId = json.user.data.id
//         localStorage.setItem('currentUser', userId)
//         props.addUser(json.user.data)
//         history.push("/posts")
//       })
//       .catch(error => {
//         console.log(error);
//       })
//   }


// export const logOutUser = (history) => {

//   return dispatch => {
//     localStorage.removeItem("token")
//     dispatch({ type: 'REMOVE_USER' })
//     history.push("/login")
//   }

// }
// export const createUser = (user, history) => {
//   const userData = {
//       username: user.username, 
//       password: user.password
//   }

//   return dispatch => {
//       fetch("/users", {
//           method: "POST", 
//           headers: {
//               "Accept": "application/json",
//               "Content-Type": "application/json"
//           },
//           body: JSON.stringify(userData)
//       })
//       .then(r => r.json())
//       .then(data => {
//           localStorage.setItem("token", data.jwt)

//           let user = {id: data.user.id, username: data.user.username}
//           dispatch({type: 'SET_USER', user})
//           alert("Thanks for signing up! We look forward to your MusicTaste.")
//           history.push("/")
//       })
//   }

// }

// export const logInUser = (user, history) => {
//   const userData = {
//     username: user.username,
//     password: user.password
//   }

//   return dispatch => {
//     fetch("/login", {
//       method: "POST",
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(userData)
//     })
//       .then(r => r.json())
//       .then(data => {
//         if (data.failure) {
//           return alert(data.failure)
//         }
//         localStorage.setItem("token", data.jwt)

//         let user = { id: data.user.id, username: data.user.username }

//         dispatch({ type: 'SET_USER', user })
//         history.push("/")
//       })
//   }

// }
