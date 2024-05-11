import React from 'react';
import { useState } from 'react';
import"./App.css"
const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [ErrorUsername, setErrorUsername] = useState("");
  const [ErrorPassword, setErrorPassword] = useState("");
  const [ErrorEmail, setErrorEmail] = useState("");
  const [ErrorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  function validate(e) {
    e.preventDefault();
    if (username.length > 8) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUsername("Username must be 8 letters long.");
      setUserColor("red");
    }

    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setEmailColor("red");
      setErrorEmail("Email should have @gmail");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password should be 8 letters long ");
      setPasswordColor("red");
    }

    if (password != "" && password == confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Passwords didn't matched.");
      setConfirmPasswordColor("red");
    }

  }

  return (
    <>
      <div className='card'>
        <div className='card-image'></div>
        <form>
          <input
            type='text'
            placeholder='Name'
            style={{ borderColor: userColor }}
            value={username}
            onChange={(e) => { setUsername(e.target.value) }}
          />
          <p className='error'>{ErrorUsername}</p>

          <input
            type='text'
            placeholder='Email'
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <p className='error'>{ErrorEmail}</p>

          <input
            type='text'
            placeholder='Password'
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <p className='error'>{ErrorPassword}</p>

          <input
            type='text'
            placeholder='ConfirmPassword'
            style={{ borderColor: confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => { setConfirmPassword(e.target.value) }}
          />
          <p className='error'>{ErrorConfirmPassword}</p>
          <button className="submit-btn" onClick={validate}>
            Submit
          </button>

        </form>

      </div>

    </>
  )
}
export default App;