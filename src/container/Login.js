import React from "react"
import { reduxForm, Field } from "redux-form"

import CustomField from "./CustomField"

class Login extends React.Component {

  customHandleSubmit = (values) => {
    console.log("values", values)
  }

  render(){
    const { handleSubmit, reset } = this.props;
    return (
      <section>
        <form onSubmit={handleSubmit(this.customHandleSubmit)}>
            <Field
              type="email"
              placeholder="Enter your Email"
              name="email"
              label="Email"
              component={CustomField}
              />
              <Field
                type="password"
                placeholder="Enter your Password"
                name="password"
                label="Password"
                component={CustomField}
            />

            <button type="submit">Submit</button>
            <button onClick={reset}>Reset</button>
        </form>
      </section>
    )
  }
}


const validateEmail  = (email) => {
   const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   return re.test(email) === true
}

const validate = (values) => {
  const errors = {};

  if(!values.email || !validateEmail(values.email)){
    errors.email = "Is it Required"
  }

  if(!values.password || values.password.length < 5){
    errors.password = "Password is Required";
  }

  return errors;
}


export default reduxForm({
  form: "login",
  validate
})(Login)
