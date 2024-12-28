import React, { useEffect, useState } from 'react';

export const UseFetch = (url, options = {}) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async() => {
        setLoading(true);
        try{
            const response = await fetch(url, {...options});
            
            if(!response.ok) throw new Error (response.statusText);

            const result = await response.json();
            if(result){
            setData(result);
            setError('');
            setLoading(false);
            }
        }catch(e){
            console.log(e);
            setLoading(false);
            setError(e);   
        }
    };

    useEffect(()=>{
        fetchData();
    },[url]);

    return {data, loading, error};
}
