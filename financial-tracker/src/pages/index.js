import React, { useState } from 'react';
import Expense from '@/Components/Expense';
import Button from '../Components/RefreshButton';

const App = () => {
    const [data, setData] = useState(null);
    return (
        <div>
            <Expense 
            setData={setData}
            data={data} />
            <Button  />
        </div>
    );
};

export default App;