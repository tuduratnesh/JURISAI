
import React, { useState } from 'react';

function Documents() {
  const [searchTerm, setSearchTerm] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [status, setStatus] = useState('');

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles((prev) => [...prev, ...files]);
    setStatus('');
  };

  const handleSearch = () => {
    if (uploadedFiles.length === 0) {
      setStatus('⚠️ Please upload at least one file.');
      return;
    }

    const matches = uploadedFiles.filter((file) =>
      file.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (matches.length > 0) {
      setStatus(`✅ Found ${matches.length} matching file(s).`);
    } else {
      setStatus(`❌ No match found for "${searchTerm}".`);
    }
  };

  return (
    <div className="p-6 w-full  mx-auto">
      {/* Search Input */}
      <div className="w-full flex items-center p-2 border border-gray-300 rounded-md shadow-sm">
        <input
          type="text"
          placeholder="Search document by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full outline-none text-base"
        />
        <button onClick={handleSearch} className="ml-2 text-green-600 hover:text-green-700 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0Z" />
          </svg>
        </button>
      </div>

      {/* Upload Button */}
      {/* <div className="mt-4">
        <label htmlFor="upload-file" className="cursor-pointer inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Upload Documents
        </label>
        <input
          type="file"
          id="upload-file"
          onChange={handleUpload}
          multiple
          className="hidden"
        />
      </div> */}

      {/* Status */}
      {status && (
        <div className="mt-2 text-sm font-medium text-center">
          {status.includes('✅') ? (
            <p className="text-green-600">{status}</p>
          ) : (
            <p className="text-red-500">{status}</p>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {uploadedFiles.map((file, index) => (
          <div key={index} className="border-2 border-black rounded-2xl p-4 bg-gray-50">
            <p className="text-gray-800 text-sm font-medium">📄 {file.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Documents;
