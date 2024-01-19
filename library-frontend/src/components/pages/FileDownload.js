import React, { useState, useEffect } from 'react';

const FileDownload = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API endpoint
    fetch('http://localhost:3000/posts') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => setFiles(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
      <div>
        <h1>List of Files</h1>
        {files.map((fileData, index) => (
          <div key={index}>
            <h3>File #{index + 1}</h3>
            <ul>
              {Object.entries(fileData[0]).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
            <button onClick={() => window.open(fileData[0].url, '_blank')}>
              Go to Link
            </button>
            <hr />
          </div>
        ))}
      </div>
    );
  
};

export default FileDownload;