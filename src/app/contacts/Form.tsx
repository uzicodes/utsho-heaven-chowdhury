import React from 'react';
import styled from 'styled-components';

const Form = () => {
  return (
    <StyledWrapper>
      <form className="form">
        <p className="title">Drop a Text !</p>
        <p className="message">Please Fill the Details </p>
        <label>
          <input className="input" type="text" placeholder="" required />
          <span>Name</span>
        </label>
        <label>
          <input className="input" type="email" placeholder="" required />
          <span>Email</span>
        </label> 
        <label>
          <input className="input" type="tel" placeholder="" required />
          <span>Mobile Number</span>
        </label>
        <label>
          <textarea className="input" rows={4} placeholder="" required />
          <span>Message</span>
        </label>
        <button className="submit">Submit</button>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form {
  margin-top: 96px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  max-width: 1400px;
  width: 100%;
  padding: 40px;
  margin-left: auto;
  margin-right: auto;
    border-radius: 20px;
    position: relative;
    background-color: #1a1a1a;
    color: #fff;
    border: 1px solid #333;
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0;
    color: #5BF527;
    text-align: center;
  }

  .title::before {
    width: 18px;
    height: 18px;
  }

  .title::after {
    width: 18px;
    height: 18px;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
  background-color: #5BF527;
  }

  .message {
    font-size: 14.5px;
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    margin-bottom: 10px;
  }
  .signin {
    font-size: 14.5px;
    color: rgba(255, 255, 255, 0.7);
  }

  .signin {
    text-align: center;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .signin a {
  color: #5BF527;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    background-color: #333;
    color: #fff;
    width: 100%;
    min-width: 400px;
    padding: 20px 10px 5px 16px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
    box-sizing: border-box;
    font-size: 1.1em;
  }

  .form label .input + span {
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 10px;
    top: 0px;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 12.5px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    color: #00bfff;
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .input {
    font-size: medium;
  }

  .submit {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
    background-color: #00bfff;
  }


  .submit:hover {
    background-color: #00bfff96;
  }

  /* pulse animation removed */
`

export default Form;
