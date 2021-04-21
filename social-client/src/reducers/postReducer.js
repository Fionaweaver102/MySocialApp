function postReducer(state = [], action) {
  switch (action.type) {
    case "SET_POSTS":
      return state = action.posts
    case "ADD_POSTS":
      return [...state, action.playlist]
    default:
      return state;
  };
}

export default postReducer;