import axios from 'axios';
import React, { useEffect, useState } from 'react';

function EnvFile(props) {
  const [data, setData] = useState('');

  // API Key
  const myApiKey = 'abcdefg12345';
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(`https://apikey=${apiKey}`);
        setData(response);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [])

  return (
    <div>
    </div>
  );
}

export default EnvFile;