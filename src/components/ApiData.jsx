import React, {useEffect, useState} from "react";


function ApiData({query, onApiDataReceived}){
    function fetchData(){
        //const fetch = require('node-fetch');
        const url = 'https://wikipedia-api1.p.rapidapi.com/search?q=${query}&lang=en';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': "c48212d7a6msh0749ca07062c951p1d91dcjsn457de6d0ed23",
                'X-RapidAPI-Host': 'wikipedia-api1.p.rapidapi.com'
            }
        };

        fetch(url, options)
        .then(response => response.json())
        .then(result => {
            onApiDataReceived(result);
            console.log(result);
        })
        .catch(error => console.error(error));
        

    }
    


    useEffect(() => {
        if(query) {
            fetchData();
        }
       
        
        
    }, [query]);

    return null;
}

export default ApiData;


    


