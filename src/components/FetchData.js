import React from 'react';
import axios from 'axios';

function FetchData() {
  const apiFetch = async ()=>
  {
    try
    {
      var data =await axios.get('https://api.weatherapi.com/v1/current.json?key=39da29e9742d4a4f8db53832221012&q=Islamabad')
      // .then(response => response.data)
    }
    catch
    {
      console.log('Error');
    }
    console.log(data);
    }
  return (
    <div className="App">
      <button onClick={apiFetch}>Click me to fetch data</button>
      <h1>New Heading</h1>
    </div>
  );
}

export default FetchData;