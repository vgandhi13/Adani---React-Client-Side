import { Dropdown } from "react-bootstrap";
import React from "react";

function DropdownButton({buttonText, setButtonText, dropdownItems}) {
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdownMenu2">
            {buttonText}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {dropdownItems.map((itemText, index) => (
              <Dropdown.Item key={index} onClick={() => setButtonText(itemText)}>
                {itemText}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
  
  export default DropdownButton;
  
