const fetchData = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/get-expenses');
        const responseData = await response.json();

    return responseData;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export default fetchData;