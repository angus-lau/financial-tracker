import React, { useState } from 'react';
import Expense from '@/Components/Expense';
import Buttons from '../Components/RefreshButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseModal from '@/Components/ExpenseModal';

const App = () => {
    const [data, setData] = useState({});

    return (
        <div>
            <Expense setData={setData} data={data} />
            <Buttons />
            <ExpenseModal/>
        </div>
    );
};

export default App;
