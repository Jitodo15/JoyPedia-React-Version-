import React, {useState, useEffect} from "react";
import SearchIcon from '@mui/icons-material/Search';
import SearchResult from "./SearchResult";
import Suggestions from "./Suggestions";

function SearchBar(){
    const [searchItem, setSearchItem] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
   
 
    function handleChange(event) {
        const {value, name} = event.target;
        setSearchItem(value);
        setShowResult(false);
        
        if (value !== '') {
            setShowSuggestions(true);
        } else {
           
            setShowSuggestions(false);
        }
        
    }

    function handleSubmit(event){
        event.preventDefault();
        setShowResult(true)
        if (searchItem.trim() !== '') {
            setShowResult(true);
        } else {
            setShowResult(false); 
            setShowSuggestions(false);
        }
       setShowSuggestions(false);
        
    }


    return (

        <div className="search-container">
            <form className="search" onSubmit={handleSubmit}>
                <div className="input-container">
                    <input type="text" placeholder="Enter search.." value={searchItem} onChange={handleChange}/>
                    <button type="submit"><SearchIcon /></button>
                </div>       
            </form>
                    
            {showSuggestions && 
                <Suggestions 
                    searchItem={searchItem} 
                    setSearchItem={setSearchItem}
                    setShowResult={setShowResult}
                    setShowSuggestions={setShowSuggestions}
                            
                />
            }
            {showResult && <SearchResult searchItem={searchItem}/>}
        </div>
                
    )
}

export default SearchBar;
