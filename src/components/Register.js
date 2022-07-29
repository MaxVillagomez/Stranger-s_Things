import React, {useState}from "react";


const Register = (props) => {
  const {
    username, 
    setUserName, 
    password, 
    setPassword} = props;
    
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b/users/register',
       {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          }
        })
      });
      const data = await response.json();
      setUserName('');
      setPassword('');
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  return (
    <>
      <h3>
        Please enter a username and password
      </h3>
      <form onSubmit={handleSubmit}>
        <label>Username:
          <input 
            type='text' 
            value={username} 
            onChange={(event) => setUserName(event.target.value)}
          ></input>
        </label>
        <label>Password:
          <input 
            type='text' 
            value={password} 
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </label>
        <button 
          type='submit'>
          Register
        </button>
      </form>
    </>
  );
}

export default Register;