import React, {useState, useEffect} from "react";
import axios from "axios";


function Suggestions(props){
    const [similar, setSimilar] = useState([]);
    
    useEffect(() =>{
        async function fetchData() {
            
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
                setSimilar(response.data.similar);
            } catch (error) {
                console.error(error); 
            }  
        }
        if (props.searchItem){
            fetchData();
        }

    }, [props.searchItem]);

   
    function handleClick(selectedSuggestion){
        
        props.setSearchItem(selectedSuggestion); 
        props.setShowResult(true); 
        props.setShowSuggestions(false); 
        
    }
  

    return (
        
        <div className="suggestions-container">
            
            {similar.map((suggestion, index) => (
                   <div className="suggestion-item" key={index} onClick={() => handleClick(suggestion.title)}>{suggestion.title}</div>
            ))}
        </div>

    )
}

export default Suggestions;