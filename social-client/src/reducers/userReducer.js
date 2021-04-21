const initialState = {
  user: {},
  loggedIn: false,
  posts: [],
  loading: true,
  error: false
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, loading: false, user: action.payload, loggedIn: true };
    case 'ADD_POST':
      return { ...state, loading: false, posts: action.payload }
    // case "SET_POSTS":
    //   return { state: action.posts }
    case 'DELETE_POST':
      return { ...state, user: action.payload }
    case "DELETE_USER":
      return { ...state, user: null, loading: false, loggedIn: false };
    case 'LOGOUT':
      return { ...initialState }
    case 'LOADING':
      return { ...state, loading: true }
    case "EDIT_CURRENT_USER":
      return { ...state, user: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
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