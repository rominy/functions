import axios from 'axios';
import React, { useEffect, useState } from 'react';

function EnvFile(props) {
  const [data, setData] = useState('');

  // API Key
  const myApiKey = 'abcdefg12345';

  const apiKey = process.env.REACT_APP_API_KEY;
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    const exampleData = async () => {
      try {
        const apiResponse = await axios.get(`https://romin&apikey=${apiKey}`);
        const tistoryApiResponse = await axios.get(`https://romin&apikey=${process.env.REACT_APP_TISTORY_API_KEY}`);
        const frontData = await axios.post(`${serverUrl}/main`, { data });
        const userData = await axios.post(`${serverUrl}/user`, { data: process.env.REACT_APP_DB_URL });
      } catch (error) {
        console.error(error);
      }
    };
    exampleData();
  }, []);

  return (
    <div>
    </div>
  );
}

export default EnvFile;