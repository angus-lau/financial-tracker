import React, { useEffect } from 'react';
import DataMapper from './Chart';
import fetchData from './fetchData';


const Expense = ({data, setData}) => {

    useEffect(() => {
        fetchData()
            .then(data => setData(data)).catch(error => console.error("can't catch promise", error));
    }, [setData]);

    return (
        <div>
            {data ? (
                <DataMapper jsonData={data} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Expense;
