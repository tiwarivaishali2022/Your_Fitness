import React, { useState } from "react";

export default function Contact() {
    
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    // Regular expression for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // Clear email error message when user starts typing
    setEmailError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      alert("submited")
    }
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className="form-control border-primary-subtle"  style={{ width: '50%' }} id="name"  />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input type="email" className="form-control border-primary-subtle"  style={{ width: '50%' }} id="email" value={email} onChange={handleEmailChange} />
            {emailError && <div className="text-danger">{emailError}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control border-primary-subtle" id="message"  style={{ width: '50%' }} rows="5"></textarea>
          </div>
          <button type="submit" className="btn btn-danger my-2">Submit</button>
        </form>
    </div>
   
  );
}
