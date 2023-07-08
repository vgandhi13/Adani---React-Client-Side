import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SelectionBox = () => {
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
    e.currentTarget.style.borderColor = '#000'; // Set border color to match text font color
  }}
  onMouseLeave={(e) => {
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
    e.currentTarget.style.borderColor = '#000'; // Set border color to match text font color
  }}
  onMouseLeave={(e) => {
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
    e.currentTarget.style.borderColor = '#000'; // Set border color to match text font color
  }}
  onMouseLeave={(e) => {
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
