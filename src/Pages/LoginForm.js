import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './LoginForm.css';
import { getEmployee } from '../Services/Requests';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const LoginForm = ({ userObj, setUserObj }) => {
  const navigator = useNavigate();
  const [invalid, setInvalid] = useState('');

  const handleInvalid = () => {
    setInvalid('Email or Password was incorrect');
  };

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

      setUserObj(result.data.user);
      // console.log(userObj.id);
      sessionStorage.setItem('adaniCloudOpsAuthToken', authToken);
      console.log(sessionStorage.getItem('adaniCloudOpsAuthToken'));
      navigator('/LandingPage');
    } catch (error) {
      // Handle any error that occurred during the request
      handleInvalid();
      console.error(error);
    }
  };

  //By moving the token check logic to the useEffect hook in the code, the check is performed when the component mounts. This means that it will run once when the login page is first rendered, regardless of whether the form is submitted or not. Therefore, if the user navigates back to the login page and there is an existing token in the session storage, the redirection to the landing page will take place.
  useEffect(() => {
    const storedToken = sessionStorage.getItem('adaniCloudOpsAuthToken');
    if (storedToken) {  // to check if there is a token in the session storage when the component mounts.
      navigator('/LandingPage');
    }
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="loginapp">
      <div className="login-image-container">
      <img src="https://drive.google.com/uc?export=view&id=1OdsjYVcXmedKBXjB-5h2BhuoEbpPRYz_" style={{ width: '50%', height: 'auto' }} alt="Adani logo" />

      </div>
      <div className="font-heading">Datacenter and Cloud Operations</div>

      <div className="login-centered-container login-form">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <p style={{ color: 'red' }}>{invalid}</p>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" />
          </Form.Group>

          <div style={{ marginTop: '15px', textAlign: 'center' }}>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
