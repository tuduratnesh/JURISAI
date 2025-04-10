import React, { createContext, useContext, useState } from 'react';

const FileContext = createContext();

export const FileProvider = ({ children }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const addFile = (file) => {
    setUploadedFiles((prev) => [...prev, file]);
  };

  const addFiles = (files) => {
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  return (
    <FileContext.Provider value={{ uploadedFiles, addFile, addFiles }}>
      {children}
    </FileContext.Provider>
  );
};

export const useFileContext = () => useContext(FileContext);
