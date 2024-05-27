import React, { useState } from 'react';
import Expense from '@/Components/Expense';
import Buttons from '../Components/RefreshButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseModal from '@/Components/ExpenseModal';
import Summary from '@/Components/SummarySection';
import Budget from '@/Components/Budget';

const App = () => {
    const [data, setData] = useState({});

    return (
        <div id='react-box'>
            <h1>BMO Expense Tracker</h1>
            <Budget />
            <Summary />
            <Expense setData={setData} data={data} />
            <div class='buttons'>
            <Buttons/>
            <ExpenseModal/>
            </div>
        </div>
    );
};

export default App;
