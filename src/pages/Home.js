import React, { useState } from 'react';

const UploadPDFs = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleSubmit = () => {
    // Perform any necessary actions with the uploaded files
    // For this example, we'll simply display a success message
    setSuccessMessage('Files successfully uploaded!');
  };

  return (
    <div className="container">
      <div className="box">
        <input type="file" multiple onChange={handleFileUpload} />
        <button onClick={handleSubmit}>Upload</button>
      </div>
      {successMessage && (
        <div className="success-message">
          <h3>{successMessage}</h3>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadPDFs;
