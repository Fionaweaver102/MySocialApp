// const initialState = {
//   user: {},
//   loggedIn: false
// }

// export default function userReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'ADD_USER':
//       return { ...state, user: action.payload, loggedIn: true };
//     case 'LOGOUT':
//       return { ...initialState };
//   }
// }

function userReducer(state = {}, action) {
  switch (action.type) {
    case "SET_USER":
      return state = action.user
    case "REMOVE_USER":
      return state = {}
    default:
      return state;
  }
}

export default userReducer;



  //   case 'SIGN_IN':
  //     return {
  //       ...state,
  //       logged_in: true,
  //       user: action.payload.data.user
  //     }

  //   case 'SIGN_UP':
  //     return {
  //       ...state,
  //       logged_in: true,
  //       user: action.payload.data.user
  //     }

  //   case 'LOG_OUT':
  //     return {
  //       ...state,
  //       logged_in: false,
  //       user: {}



