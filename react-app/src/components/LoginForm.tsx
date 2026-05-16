// import React, { useState } from "react";

// function LoginForm() {
//   const [form, setForm] = useState({
//     email: "",
//     password: ""
//   });

//   const [errors, setErrors] = useState({});
//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//     };

//   const validate = () => {
//     let newErrors = {};

//     if (!form.email) {
//       newErrors.email = "Email is required";
//     }

//     if (!form.password) {
//       newErrors.password = "Password is required";
//     }

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       console.log("Form submitted:", form);
//       setErrors({});
//     }
//   };

//   const isValid =
//     form.email.trim() !== "" && form.password.trim() !== "";

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Email"
//         />
//         {errors.email && <p>{errors.email}</p>}
//       </div>

//       <div>
//         <input
//           type="password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//           placeholder="Password"
//         />
//         {errors.password && <p>{errors.password}</p>}
//       </div>

//       <button type="submit" disabled={!isValid}>
//         Login
//       </button>
//     </form>
//   );
// }

// export default LoginForm;