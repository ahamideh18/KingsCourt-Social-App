import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query'
import './App.css';

function App() {

  const { isLoading, isError, data, error } = useQuery('messages', async () => {
    const { data } = await axios({
      method: 'get',
      url: 'http://localhost:3003/api/messages',
      responseType: 'stream'
    })
    return data;
  })

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>{error}</h1>
  }

  return (
    <div className="App">
      {data.map(message => (
        <li key={message._id}>{message.text}</li>
      ))}
    </div>
  );
}

export default App;
