import "./FormStyles.css"

import React from 'react'

const FormContact = () => {
  return (
    <div className="form">
      <form>
        <label>Full Names</label>
        <input type ="text"></input>
        <label>Email</label>
        <input type ="text"></input>
        <label>Subject</label>
        <input type ="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type Your Message Here"/>

        <button className="btn">Submit</button>
      </form>

    </div>
  )
}

export default FormContact