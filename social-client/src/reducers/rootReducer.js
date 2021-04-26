const initialState = {
  user: {},
  userPosts: [],
  loggedIn: false,
  posts: [],
  loading: true,
  error: false
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, loading: false, user: action.payload, loggedIn: true };
    case 'SET_POST':
      return {
        ...state, posts: state.posts.concat([action.payload]), loading: false
      };
    case "SET_POSTS":
      return { ...state, loading: false, posts: action.posts };
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
