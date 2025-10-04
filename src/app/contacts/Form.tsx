import React from 'react';
import styled from 'styled-components';

const Form = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "25e65c88-7b8e-4e47-95f0-c289b90213e5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <StyledWrapper>
      <div className="form-container">
        <form className="form" onSubmit={onSubmit}>
          <span className="heading">Contact me</span>
          <span className="c1">Please fill out the details</span>
          <input className="input" type="text" name="name" placeholder="Name" required />
          <input className="input" type="email" name="email" placeholder="E-mail" required />
          <input className="input" type="tel" name="phone" placeholder="Phone" required />
          <textarea className="input" name="message" placeholder="Message" rows={4} required />
          <div className="button-container">
            <button type="submit" className="send-button">Send Message</button>
            <div className="reset-button-container"></div>
          </div>
          <span style={{ color: '#caf438', fontWeight: 'bold', marginTop: '10px', display: 'block' }}>{result}</span>
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .orange {
    color: #caf438;
  }

  .form-container {
      max-width: 400px;
      margin: 80px 10px 10px 10px;
      background-color: #001925;
      padding: 16px;
    border-left: 5px solid #caf438;
    clip-path: polygon(
      0 0,
      100% 0,
      100% calc(100% - 20px),
      calc(100% - 20px) 100%,
      0 100%
    );
  }

  .heading {
    display: block;
    color: white;
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 20px;
  }
  .c1 {
    display: block;
    color: #d3f35f;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .c2 {
    display: block;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .form-container .form .input {
    color: #87a4b6;
    width: 100%;
    background-color: #002733;
    border: none;
    outline: none;
    padding: 10px;
    margin-bottom: 20px;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    border-left: 1px solid transparent;
  }

  .form-container .form .input:focus {
    border-left: 5px solid #caf438;
  }

  .form-container .form .textarea {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    background-color: #013747;
    color: #caf438;
    font-weight: bold;
    resize: none;
    max-height: 150px;
    margin-bottom: 20px;
    border-left: 1px solid transparent;
    transition: all 0.2s ease-in-out;
  }

  .form-container .form .textarea:focus {
    border-left: 5px solid #caf438;
  }

  .form-container .form .button-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  .form-container .form .button-container .send-button {
    background: #caf438;
    padding: 10px 32px;
    color: #001925;
    text-align: center;
    font-weight: bold;
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out;
    min-width: 180px;
    display: block;
    margin: 0;
  }

  .form-container .form .button-container .send-button:hover {
    background: transparent;
    border: 1px solid #ff7a01;
    color: #caf438;
  }

  .form-container .form .button-container .reset-button-container {
    filter: drop-shadow(1px 1px 0px #ff7a01);
    flex-basis: 30%;
  }

  .form-container .form .button-container .reset-button-container .reset-button {
    position: relative;
    text-align: center;
    padding: 10px;
    color: #caf438;
    font-weight: bold;
    background: #001925;
    clip-path: polygon(
      0 0,
      100% 0,
      100% calc(100% - 10px),
      calc(100% - 10px) 100%,
      0 100%
    );
    transition: all 0.2s ease-in-out;
  }

  .form-container
    .form
    .button-container
    .reset-button-container
    .reset-button:hover {
    background: #caf438;
    color: #001925;
  }`;

export default Form;
