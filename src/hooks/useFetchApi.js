import {useState, useEffect} from 'react';

export const useApi = (params = '') => {
    const [fetchData, setFetchData] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
      const url = "https://mindicador.cl/api/"+params;
      const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            //console.log(json.slip.advice);
            setFetchData(json);
            setStatus(true);
        } catch (error) {
            console.log("error", error);
        }
      };
      fetchData();
    }, []);
      
    return {
        fetchData,
        status
    }
} 