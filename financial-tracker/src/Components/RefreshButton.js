import React from 'react';
import fetchNewExpenses from './RefreshNewExpenses';
import fetchData from './fetchData';
import Button from 'react-bootstrap/Button';

function Buttons() {
    // const [showModal, setShowModal] = useState(false);
  
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
  
    const callOtherFunctions = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/data'); // Replace with your FastAPI URL
        const data = await response.json();
  
        if (Array.isArray(data) && data.length > 0) {
          handleShow();
        } else {
          fetchData();
          fetchNewExpenses();
          window.location.reload();
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Optionally handle error
      }
    };
    
        return (
            <>
                <Button 
                onClick={ callOtherFunctions }
                children="Refresh"
                /> 
            </>
        )
    };

export default Buttons