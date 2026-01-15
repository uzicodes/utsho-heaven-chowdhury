import React from 'react';
import styled from 'styled-components';

const Form = () => {
  const [result, setResult] = React.useState("");
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    setErrors({});

    const form = event.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const newErrors: { [key: string]: string } = {};

    if (name.length > 100) {
      newErrors.name = "Name must not exceed 100 characters";
    }

    if (!email.includes('@')) {
      newErrors.email = "Email must contain '@'";
    }

    if (phone.length > 15) {
      newErrors.phone = "Phone number must not exceed 15 digits";
    } // Validate phone characters
    else if (!/^[\d\s\-\+\(\)\.]+$/.test(phone)) {
      newErrors.phone = "Phone number contains invalid characters";
    }

    const wordCount = message.trim().length === 0 ? 0 : message.trim().split(/\s+/).length;
    if (wordCount > 500) {
        newErrors.message = `Message must not exceed 500 words (Current: ${wordCount})`;
    }

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setResult("");
        return;
    }

    formData.append("access_key", "25e65c88-7b8e-4e47-95f0-c289b90213e5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      form.reset();
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
          <input className="input" type="text" name="name" placeholder="Name" required maxLength={100} />
          {errors.name && <span className="error-message">{errors.name}</span>}
          
          <input className="input" type="email" name="email" placeholder="E-mail" required />
          {errors.email && <span className="error-message">{errors.email}</span>}
          
          <input className="input" type="tel" name="phone" placeholder="Phone" required maxLength={15} />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
          
          <textarea className="input" name="message" placeholder="Message" rows={4} required />
          {errors.message && <span className="error-message">{errors.message}</span>}
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

  .error-message {
    color: #ff4d4d;
    font-size: 0.8rem;
    margin-top: -15px;
    margin-bottom: 15px;
    font-weight: bold;
    display: block;
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
    color: #d3f35f;
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 20px;
  }
  .c1 {
    display: block;
    color: #CC6D0E;
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
