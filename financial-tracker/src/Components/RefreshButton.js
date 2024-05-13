import React from 'react';
import fetchNewExpenses from './RefreshNewExpenses';
import fetchData from './fetchData';
import Button from 'react-bootstrap/Button';

    function Buttons() {
        const callOtherFunctions = () => {
            fetchData();
            fetchNewExpenses();
            window.location.reload();
        }
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