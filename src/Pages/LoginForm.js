import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className='loginapp'>
      <div className="login-image-container">
        <img src="/Adani_2012_logo.png" style={{ width: '50%', height: 'auto' }}  alt="Adani logo" />
      </div>
      <div className='font-heading'>Datacenter and Cloud Operations</div>

      <div className="login-centered-container login-form">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
