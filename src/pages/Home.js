import React, { useState } from 'react';
import './Home.css';                                                     


const FileUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    if (selectedFiles.length === 0) {
      setUploadMessage('No files selected.');
    } else {
      setUploadMessage(`${selectedFiles.length} files uploaded successfully.`);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <label htmlFor="file-upload" className="select-files">
          Select Files
        </label>
        <input
          type="file"
          id="file-upload"
          multiple
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <br />
        <button onClick={handleUpload}>Upload</button>
      </div>
      {uploadMessage && <p>{uploadMessage}</p>}
      {selectedFiles.length > 0 && (
        <div>
          <h3>Files Uploaded:</h3>
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

export default FileUploader;
