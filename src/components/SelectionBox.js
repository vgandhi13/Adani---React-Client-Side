import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faScrewdriverWrench, faBrain, faCode} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { getCloudServices } from '../Services/Requests';

const SelectionBox = ({userObj}) => {
  const navigator = useNavigate();

  const handleCardClick = (page) => {
    // Redirect the user to the selected page
    navigator(page);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Card
  style={{
    background: '#f8f9fa',
    width: '300px',
    height: '300px',
    margin: '20px',
    cursor: 'pointer',
    border: '2px solid transparent',
    transition: 'border-color 0.3s ease',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = '#d9d9d9'; // Set background to a darker shade of grey on hover
    e.currentTarget.style.borderColor = '#000'; // Set border color to match text font color
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = '#f8f9fa'; // Reset background color
    e.currentTarget.style.borderColor = 'transparent'; // Reset border color
  }}
  onClick={() => handleCardClick('/IdleResourcesCloudSelection')}
>
  <Card.Body
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Card.Title
      style={{
        fontSize: '1.5rem',
        textAlign: 'center',
      }}
    >
      Idle Resources in <br /> Cloud Infrastructure
    </Card.Title>
    <Card.Text>
      <br />
      <br />
      <FontAwesomeIcon icon={faCloud} size="7x" style={{ marginBottom: '10px' }} />
    </Card.Text>
  </Card.Body>
</Card>


<Card
  style={{
    background: '#f8f9fa',
    width: '300px',
    height: '300px',
    margin: '20px',
    cursor: 'pointer',
    border: '2px solid transparent',
    transition: 'border-color 0.3s ease',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = '#d9d9d9'; // Set background to a darker shade of grey on hover
    e.currentTarget.style.borderColor = '#000'; // Set border color to match text font color
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = '#f8f9fa'; // Reset background color
    e.currentTarget.style.borderColor = 'transparent'; // Reset border color
  }}
  onClick={() => window.open('https://app-backend-uq4a3qdmyad5a.azurewebsites.net', '_blank') }
>
  <Card.Body
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Card.Title
      style={{
        fontSize: '1.5rem',
        textAlign: 'center',
      }}
    >
      Open AI Azure LLM
    </Card.Title>
    <Card.Text>
      <br />
      <br />
      <br />
      <FontAwesomeIcon icon={faBrain} size="7x" style={{ marginBottom: '10px' }} />
    </Card.Text>
  </Card.Body>
</Card>

<Card
  style={{
    background: '#f8f9fa',
    width: '300px',
    height: '300px',
    margin: '20px',
    cursor: 'pointer',
    border: '2px solid transparent',
    transition: 'border-color 0.3s ease',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = '#d9d9d9'; // Set background to a darker shade of grey on hover
    e.currentTarget.style.borderColor = '#000'; // Set border color to match text font color
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = '#f8f9fa'; // Reset background color
    e.currentTarget.style.borderColor = 'transparent'; // Reset border color
  }}
  onClick={() => handleCardClick('pageA')}
>
  <Card.Body
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Card.Title
      style={{
        fontSize: '1.5rem',
        textAlign: 'center',
      }}
    >
      Under Construction
    </Card.Title>
    <Card.Text>
      <br />
      <br />
      <br />
      <FontAwesomeIcon icon={faScrewdriverWrench} size="7x" style={{ marginBottom: '10px' }} />
    </Card.Text>
  </Card.Body>
</Card>

    </div>
  );
};

export default SelectionBox;
