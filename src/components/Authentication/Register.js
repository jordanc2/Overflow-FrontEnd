import React from 'react';
// import { withFormik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
// import axios from "axios";
// import * as Yup from "yup";


const RegisterForm = (props) => {
  return (
    <div>
      <div>
        {/* <img src={logo} alt='girl looking for direction' /> */}
        <form>
          <h2>Register Here</h2>
          <input  type="text" name="name" placeholder="Name" />
          {/* {touched.user && errors.user && (
            <p className="error">{errors.user}</p>
          )} */}
          <input  type="text" name="last_name" placeholder="Last Name" />
          {/* {touched.user && errors.user && (
            <p className="error">{errors.user}</p>
          )} */}
    
          <input  type="text" name="email" placeholder="Email" />
          {/* {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )} */}

        <input  type="text" name="phone_number" placeholder="Phone Number" />
          {/* {touched.user && errors.user && (
            <p className="error">{errors.user}</p>
          )} */}

          <input type="password" name="password" placeholder="Password" />
          {/* {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )} */}

          <div>
            <button type="submit">
              Register
        </button>

       
              <Link to="/">
                {"Already have an account? Login"}
              </Link>
       
          </div>
        </form>
       
      </div>
    </div>

  );
}

export default RegisterForm;


// const FormikRegisterForm = withFormik({

//   mapPropsToValues({ user, email, password, options }) {
//     return {
//       user: user || "",
//       email: email || "",
//       password: password || "",
//       options: options || ""
//     };
//   },



  // validationSchema: Yup.object().shape({
  //   user: Yup.string().required(),
  //   email: Yup.string().required(),
  //   options: Yup.string().notOneOf(["Option Required"]).required()
  // }),




//   handleSubmit(values, { props, resetForm }) {
//     // uncomment if backend true
//     // const params = {
//     //   username: values.user,
//     //   password: values.password,
//     //   email: values.email
//     // }

//     axios
//     .post("https://my.api.mockaroo.com/login.json?key=59ae78a0",
//       {
//         headers: {
//           'X-API-Key': '59ae78a0'
//         }
//       })
//     .then(response => {
//       const userRole = response.data.user.role
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('user', response.data.user.id);
//       if (userRole === 'male') {
//         props.history.push("/trucks")
//       } else {
//         props.history.push("/favorites")
//       }
//       resetForm();
//     })
//     .catch(error => {
//       alert(error.response);
//     })

//     // uncomment if backend true
//     // axios

//     //   .post("https://food-truck-finder-rj.herokuapp.com/api/register", params)
//     //   .then(response => {
//     //     localStorage.setItem('token', response.data.token);
//     //     localStorage.setItem('user', response.data.user.id);
//     //     props.history.push("/trucks")
//     //     resetForm();
//     //   })
//     //   .catch(error => {
//     //     alert(error.message)
//     //   });
//   }
// })(RegisterForm);



// export default FormikRegisterForm;