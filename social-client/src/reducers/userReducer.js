const initialState = {
  user: {},
  loggedIn: false,
  posts: [],
  loading: true
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, user: action.payload, loggedIn: true };
    case 'ADD_POST':
      return { ...state, user: action.payload }
    case 'DELETE_POST':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...initialState }
    case 'LOADING':
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}














// export default function userReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'ADD_USER':
//       return { ...state, user: action.payload, loggedIn: true };
//   }
// }

// function userReducer(state = {}, action) {
//   switch (action.type) {
//     case "SET_USER":
//       return state = action.user
//     case "REMOVE_USER":
//       return state = {}
//     default:
//       return state;
//   }
// }

// export default userReducer;