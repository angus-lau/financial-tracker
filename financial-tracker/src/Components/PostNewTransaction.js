const PostNewTransaction = async (date, expense, amount, category) => {
    try {
        const url = `http://127.0.0.1:8000/post-new-expense?date=${encodeURIComponent(date)}&expense=${encodeURIComponent(expense)}&amount=${encodeURIComponent(amount)}&category=${encodeURIComponent(category)}`;
        const body = {
            date: date,
            expense: expense,
            amount: amount,
            category: category
        };

        console.log('Request Payload: ', body);

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export default PostNewTransaction;