import React, { useState } from 'react';
import Expense from '@/Components/Expense';
import Buttons from '../Components/RefreshButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseModal from '@/Components/ExpenseModal';
import TransactionItem from '@/Components/TransactionItem';

const App = () => {
    const [data, setData] = useState({});

    return (
        <div>
            <Expense setData={setData} data={data} />
            <TransactionItem title="abc" date="123" amount="111"/>
            <Buttons />
            <ExpenseModal/>
        </div>
    );
};

export default App;
