import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './LoginForm.css';
import { getEmployee, authenticate } from '../Services/Requests';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginForm = () => {
  const navigator = useNavigate();
  const [invalid, setInvalid] = useState('');

  const handleInvalid = () => {
    setInvalid('Email or Password was incorrect');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Retrieve the values from the form inputs
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    let result = null;
    try {
      result = await getEmployee(email, password);
      console.log(result)
      const authToken = result.data.token;
  
      sessionStorage.setItem('authToken', authToken);
      // const storedToken = sessionStorage.getItem('authToken');
      // console.log(storedToken);
      // result = await authenticate(authToken)
      // console.log(result)

      navigator('/LandingPage');
    } catch (error) {
       // Handle any error that occurred during the request
      handleInvalid();
      console.error(error);
    }
  }

  return (
    <div className='loginapp'>
      <div className="login-image-container">
        <img src="/Adani_2012_logo.png" style={{ width: '50%', height: 'auto' }}  alt="Adani logo" />
      </div>
      <div className='font-heading'>Datacenter and Cloud Operations</div>

      <div className="login-centered-container login-form">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
          <p style={{color:'red'}}>{invalid}</p>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" />
          </Form.Group>

          <div style={{marginTop: '15px' , textAlign: 'center' }}>
          <Button  variant="primary" type="submit">
            Login
          </Button>
          </div>
        </Form>
    </div>
    </div>
  );
};

export default LoginForm;
