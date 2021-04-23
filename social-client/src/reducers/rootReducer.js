const initialState = {
  user: {},
  loggedIn: false,
  posts: [],
  loading: true,
  error: false
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, loading: false, user: action.payload, loggedIn: true };
    case "SHOW_USER":
      return { ...state, user: action.payload, loading: false, loggedIn: true };
    case 'ADD_POST':
      return { ...state, loading: false, posts: action.post, loggedIn: true };
    case "SET_POSTS":
      return { ...state, loading: false, posts: action.posts, loggedIn: true };
    case 'LOGOUT':
      return { ...initialState };
    case 'LOADING':
      return { ...state, loading: true };
    // case "EDIT_CURRENT_USER":
    //   return { ...state, loading: false, user: action.payload, loggedIn: true };
    case "ERROR":
      return { ...state, error: action.payload };
    default:
      return state
  }
}
