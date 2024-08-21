import React from 'react';
import Buttons from '../Components/RefreshButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseModal from '@/Components/ExpenseModal';
import Budget from '@/Components/Budget';
import uncategorizedExpenseModal from '@/Components/UncategorizedExpenseModal';

const App = () => {

    return (
        <div id='react-box'>
            <h1>BMO Expense Tracker</h1>
            <Budget />
            <uncategorizedExpenseModal/>
            <div class='buttons'>
            <Buttons/>
            <ExpenseModal/>
            </div>
        </div>
    );
};

export default App;
