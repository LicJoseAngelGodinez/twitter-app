import React, { createContext, useState, useEffect } from 'react'
import ApiRequest from '../services/apiRequest';
import { sortFeeds } from '../utils/utils';

export const feedsContext = createContext();

export default function ContextApi({children}) {

    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        
        async function fetchData() {

            let res = await ApiRequest(process.env.REACT_APP_API_DATA);
            
            if ( res.data.length > 0 ) {
                setFeeds(sortFeeds(res.data));
            }

        }

        fetchData();
    }, [])

    return (
        <feedsContext.Provider value={{feeds, setFeeds}}>  
        {children}          
        </feedsContext.Provider>
    )
}
