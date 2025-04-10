
import React, { useState, useRef,useEffect } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

function Dashboard() {
  const [prompt, setPrompt] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);
  const [isListening, setIsListening] = useState(false);

  const [latexHTML, setLatexHTML] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  //when mohit give data then it should be commitout
  useEffect(() => {
    // Simulate an API call with dummy LaTeX
    const fakeApiData = {
      answer: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}"
    };
  
    setTimeout(() => {
      try {
        const rendered = katex.renderToString(fakeApiData.answer, {
          throwOnError: false,
          displayMode: true,
        });
        setLatexHTML(rendered);
      } catch (renderErr) {
        setError('Error rendering LaTeX');
      } finally {
        setLoading(false);
      }
    }, 1000);
  }, []);
  

// it take out from commitout when code is given

  // useEffect(() => {
    // fetch('/api/analyze', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then((res) => {
    //     if (!res.ok) throw new Error('Failed to fetch');
    //     return res.json();
    //   })
  //     .then((data) => {
  //       try {
  //         const rendered = katex.renderToString(data.answer, {
  //           throwOnError: false,
  //           displayMode: true, // Block display
  //         });
  //         setLatexHTML(rendered);
  //       } catch (renderErr) {
  //         setError('Error rendering LaTeX');
  //       } finally {
  //         setLoading(false);
  //       }
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       setLoading(false);
  //     });
  // }, []);


  const recognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
      ? new (window.SpeechRecognition || window.webkitSpeechRecognition)()
      : null;

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
    selectedFiles.forEach((file) => {
      formData.append('files', file);
    });

    fetch('/api/analyze', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response from backend:", data);
        speak("Analysis complete. Check the console or display area for results.");
      })
      .catch((err) => {
        console.error('Error:', err);
        speak("There was an error processing your request.");
      });
  };

  // // ✅ Text-to-Speech
  // const speak = (text) => {
  //   const utterance = new SpeechSynthesisUtterance(text);
  //   utterance.lang = 'en-US';
  //   window.speechSynthesis.speak(utterance);
  // };

  // 🎙️ Speech-to-Text
  const handleVoiceInput = () => {
    if (!recognition) {
      alert('Speech recognition not supported in this browser.');
      return;
    }

    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const speech = event.results[0][0].transcript;
      setPrompt((prevPrompt) => `${prevPrompt} ${speech}`);
      setIsListening(false);
    };

    recognition.onerror = () => {
      alert('Speech recognition failed. Try again.');
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <div className="p-6 w-full mx-auto">
 
      <div className="flex w-full items-center border border-gray-300 rounded-md px-4 py-2 shadow-sm">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Upload document(s) and write prompt..."
          className="flex-1 w-full outline-none text-base"
        />

        {/* 🎙️ Voice Input */}
        <button
          onClick={handleVoiceInput}
          className={`text-blue-500 hover:text-blue-600 ml-2 ${isListening ? 'animate-pulse' : ''}`}
          title="Speak Prompt"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v2m4-2a4 4 0 01-8 0V9a4 4 0 018 0v9Z" />
          </svg>
        </button>

        {/* 🔊 Read Prompt
        <button
          onClick={() => speak(prompt)}
          className="text-purple-500 hover:text-purple-600 ml-2"
          title="Read Prompt Aloud"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5v14M5 12h6m8 0a9 9 0 11-18 0 9 9 0 0118 0Z" />
          </svg>
        </button> */}

        {/* 📁 Upload Files */}
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

        {/* ✅ Submit */}
        <button
          onClick={handleSubmit}
          className="text-green-600 hover:text-green-700 ml-2 cursor-pointer"
          title="Submit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0Z" />
          </svg>
        </button>
      </div>
      {!loading && !error && (
        <div
          style={{ fontSize: '24px', marginTop: '20px' }}
          dangerouslySetInnerHTML={{ __html: latexHTML }}
        />
      )}
      {/* File list */}
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

