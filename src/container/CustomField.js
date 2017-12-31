import React from "react"


class CustomField extends React.Component {
  render(){
    const { input, label, type, placeholder, meta } = this.props;
    return (
      <section>
        <label>{label}</label>
        <input {...input} type={type} placeholder={placeholder} />
        {meta.touched
            && meta.error
              && <span style={{color:"red"}}>{meta.error}</span> }
      </section>

    )
  }
}

export default CustomField;
