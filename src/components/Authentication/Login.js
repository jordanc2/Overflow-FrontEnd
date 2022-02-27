import React from 'react';
// import { withFormik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
// import axios from "axios";
// import * as Yup from "yup";


const LoginForm = (props) => {
  return (
        <form>
          <h1>Sign In</h1>
          <input type="text" name="user" placeholder="Username" />
          {/* {props.touched.user && props.errors.user && (
            <p>{props.errors.user}</p>
          )} */}
          <input  type="password" name="password" placeholder="Password" />
          {/* {props.touched.password && props.errors.password && (
            <p className="error">{props.errors.password}</p>
          )} */}

          <div>
            <button type="submit">
              Sign In
            </button>

            {/* <Grid> */}
              <Link to="/register">
                {`Don't have an account? Sign Up`}
              </Link>
            {/* </Grid> */}
          </div>
        </form>
  );
}

export default LoginForm;


// const FormikUserForm = withFormik({

//   mapPropsToValues({ user, password }) {
//     return {
//       user: user || "",
//       password: password || "",
//     };
//   },



//   validationSchema: Yup.object().shape({
//     user: Yup.string().required(),
//     password: Yup.required()
//   }),




//   handleSubmit(values, { props, resetForm }) {
//     // uncomment if backend true
//     // const params ={
//     //   username: values.user,
//     //   password: values.password
//     // }

//     axios
//       .post("https://my.api.mockaroo.com/register.json",
//         {
//           headers: {
//             'X-API-Key': '59ae78a0'
//           }
//         })
//       .then(response => {
//         const userRole = response.data.user.role
//         localStorage.setItem('token', response.data.token);
//         localStorage.setItem('user', response.data.user.id);
//         if (userRole === 'Male') {
//           props.history.push("/trucks")
//         } else {
//           props.history.push("/favorites")
//         }
//         resetForm();
//       })
//       .catch(error => {
//         alert(error.response);
//       })
//   }
// })(UserForm);



// export default FormikUserForm;