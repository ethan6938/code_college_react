import { useState, useEffect } from 'react';

const useFetch = (url) => {
    //initial state
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
    }, [url]);
    
    return data;
};

export default useFetch;