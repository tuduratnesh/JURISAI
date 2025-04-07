
import React, { useState, useRef } from 'react';


function Dashboard() {
  const [prompt, setPrompt] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

 
  const handleFileDelete = (indexToDelete) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, index) => index !== indexToDelete));
  };

 
  const handleSubmit = () => {
    if (!prompt.trim() || selectedFiles.length === 0) {
      alert('Please enter a prompt and upload at least one file.');
      return;
    }

    const formData = new FormData();
    formData.append('prompt', prompt);
    selectedFiles.forEach((file, index) => {
      formData.append(`files`, file); 
    });

    
    fetch('/api/analyze', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response from backend:", data);
        
      })
      .catch((err) => console.error('Error:', err));
  };

  return (
    <div className="p-6 w-full  mx-auto">
    
      <div className="flex w-full items-center border border-gray-300 rounded-md px-4 py-2 shadow-sm">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Upload document(s) and write prompt..."
          className="flex-1 w-full outline-none text-base"
        />
        
        <input
          type="file"
          id="file-upload"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileUpload}
          multiple
        />

      
        <label htmlFor="file-upload" className="cursor-pointer text-blue-500 hover:text-blue-600 ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0Z" />
          </svg>
        </label>

        
        <button
          onClick={handleSubmit}
          className="text-green-600 hover:text-green-700 ml-2 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0Z" />
          </svg>
        </button>
      </div>


      {selectedFiles.length > 0 && (
        <div className="mt-4 space-y-2">
          {selectedFiles.map((file, index) => (
            <div
              key={index}
              className="text-sm text-gray-600 flex items-center justify-between bg-gray-100 px-3 py-2 rounded-md"
            >
              <span className="truncate max-w-xs">{file.name}</span>
              <button
                onClick={() => handleFileDelete(index)}
                className="text-red-500 hover:text-red-700 ml-4"
                title="Remove file"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
