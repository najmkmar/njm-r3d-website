import React, { useState } from 'react';
import axios from 'axios';

function Generate() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    'Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh..'
  );

  const generateImage = async () => {
    setPlaceholder(`Search ${prompt}..`);
    setLoading(true);

    try {
      const apiUrl = 'https://api.openai.com/v1/images'; // Use the proxy path

      // Access the DALL·E API key from environment variables
      const apiKey = import.meta.env.VITE_Open_AI_Key;

      const res = await axios.post(
        apiUrl,
        {
          prompt: prompt,
          n: 1,
          size: '512x512',
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      setLoading(false);
      setResult(res.data.data[0].url);
    } catch (error) {
      console.error('Error generating image:', error);
      setLoading(false);
    }
  }

  return (
    <div className="generate-main">
      {loading ? (
        <>
          <h2>Generating.. Please Wait..</h2>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </>
      ) : (
        <>
          <h2>Generate an Image using DALL·E API</h2>
          <textarea
            className="generate-input"
            placeholder={placeholder}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows="10"
            cols="40"
          />
          <button onClick={generateImage}>Generate an Image</button>
          {result.length > 0 ? (
            <img className="result-image" src={result} alt="result" />
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}

export default Generate;
