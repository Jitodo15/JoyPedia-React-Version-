import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SearchResult(props){
    const [searchResult, setSearchResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [similar, setSimilar] = useState([]);

    useEffect(() =>{
        async function fetchData() {
            setLoading(true);
            const url = 'https://wiki-briefs.p.rapidapi.com/search';
            const options = {
                
                params: {
                    q: props.searchItem,
                    topk: '25'
                },
                headers: {
                    'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY,
                    'X-RapidAPI-Host': 'wiki-briefs.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.get(url, options);
                setSearchResult(response.data);
                setSimilar(response.data.similar);
                setLoading(false)
    
            } catch (error) {
                console.error(error);
                setSearchResult({summary : "Could not find data on this topic"})
                setLoading(false);
            }
            
        }
        if (props.searchItem){
            fetchData();
        }

    }, [props.searchItem]);

    return(
        
        <div className='result-container'>
            {searchResult && (
                <div className='result'>
                    <h1>{searchResult.title}</h1>
                    <p>{searchResult.summary}</p>
                </div>
            )} 
        </div>
    )

}

export default SearchResult;