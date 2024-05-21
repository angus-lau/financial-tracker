import React, { useState } from 'react';
import Expense from '@/Components/Expense';
import Buttons from '../Components/RefreshButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseModal from '@/Components/ExpenseModal';

const App = () => {
    const [data, setData] = useState({});
    const headerText = 'BMO Expense Tracker';

    return (
        <div id='react-box'>
            <h1>BMO Expense Tracker</h1>
            <Expense setData={setData} data={data} />
            <div class='buttons'>
            <Buttons/>
            <ExpenseModal/>
            </div>
        </div>
    );
};

export default App;
