const initialState = {
  user: {},
  loggedIn: false,
  posts: [],
  userPosts: [],
  loading: true,
  error: false
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, loading: false, user: action.payload, loggedIn: true };
    case 'SET_POST':
      return {
        ...state, posts: state.posts.concat([action.payload]), userPosts: state.userPosts.concat([action.payload]), loading: false, user: state.user.posts.concat([action.payload]), loggedIn: true
      };
    case "SET_POSTS":
      return { ...state, loading: false, posts: action.posts, loggedIn: true };
    case 'REMOVE_USER':
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
