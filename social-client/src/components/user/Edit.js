// import { useHistory } from 'react-router';
// import React, { useState } from "react";
// import { connect } from "react-redux";
// import { TextField, Button } from '@material-ui/core'
// import { editUser } from "../../actions/userAction";

// const EditUser = (props) => {
//   let history = useHistory();
//   const [currentUser, setCurrentUser] = useState({
//     id: props.user.id,
//     firstName: props.user.firstName,
//     lastName: props.user.lastName,
//     email: props.user.email,
//     birthday: props.user.birthday,
//     gender: props.user.gender,
//     phone: props.user.phone,
//     picture: props.user.picture,
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     props.editUser(currentUser);
//     history.push('/users/:id')
//   };

//   // const handleDelete = (e) => {
//   //   e.preventDefault();
//   //   props.history.push('/')
//   //   props.deleteUser(currentUser)
//   // };

//   const handleChange = (event) => {
//     setCurrentUser({
//       ...currentUser,
//       [event.target.name]: event.target.value,
//     });
//   };


//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="EditForm" noValidate>

//         <TextField
//           autoComplete="fname"
//           name="firstName"
//           id="firstName"
//           label="First Name"
//           placeholder="First Name"
//           onChange={handleChange}
//           defaultValue={currentUser.firstName}
//           autoFocus
//         />

//         <TextField
//           id="lastName"
//           label="Last Name"
//           name="lastName"
//           placeholder="lastName"
//           onChange={handleChange}
//           defaultValue={currentUser.lastName}
//           autoComplete="lname"
//         />

//         <TextField
//           id="email"
//           label="Email Address"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           defaultValue={currentUser.email}
//           autoComplete="email"
//         />

//         <TextField
//           id="date"
//           label="Birthday"
//           name="birthday"
//           type="date"
//           placeholder="Birthday"
//           defaultValue={currentUser.birthday}
//           onChange={handleChange}
//         />

//         <TextField
//           id="gender"
//           label="Gender"
//           name="gender"
//           placeholder="Gender"
//           onChange={handleChange}
//           defaultValue={currentUser.gender}
//           autoComplete="gender"
//         />

//         <TextField
//           id="phone"
//           label="Phone Number"
//           name="phone"
//           placeholder="Phone Number"
//           onChange={handleChange}
//           defaultValue={currentUser.phone}
//           autoComplete="phone"
//         />

//         <TextField
//           id="picture"
//           name="picture"
//           label="Profile Picture"
//           alt="user image"
//           placeholder="Profile Picture"
//           onChange={handleChange}
//           defaultValue={currentUser.picture}
//           autoComplete="picture"
//         />

//         <Button type="submit" className="EditButton">
//           Edit Profile
//         </Button>

//         {/* <Button type="delete" className="deleteProfile" onSubmit={handleDelete}>
//           Delete Profile
//         </Button> */}
//       </form>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//     loading: state.loading
//   }
// }

// export default connect(mapStateToProps, { editUser })(EditUser);