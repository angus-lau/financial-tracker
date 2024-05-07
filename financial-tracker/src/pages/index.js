import React, { useState } from 'react';
import Expense from '@/Components/Expense';
import Button from '../Components/RefreshButton';

const App = () => {
    const [data, setData] = useState({});
    console.log(data, setData)

    return (
        <div>
            <Expense setData={setData} data={data} />
            <Button />
        </div>
    );
};

export default App;
