import React, { useState } from 'react';
import './App.css';
import ParentComponent from './Parent';
import { Button } from './src/@/components/ui/button';
import axios from 'axios';

function App() {
  const [pdfBlob, setPdfBlob] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGeneratePdf = async (blob) => {
    setIsLoading(true);
    try {
      setPdfBlob(blob);
      triggerDownload(blob);
      await apiCall(blob);
    } catch (error) {
      console.error("Error handling PDF blob:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const apiCall = async (blob) => {
    if (!blob) {
      console.error("No PDF blob available to upload.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('pdfFile', blob, 'invoice.pdf');

      const result = await axios.post("http://localhost:5000/upload-files", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(result);
    } catch (error) {
      console.error("Error uploading PDF file:", error);
    }
  };

  const triggerDownload = (blob) => {
    if (blob) {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'invoice.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="app-container flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-400 p-10">
      <ParentComponent onGeneratePdf={handleGeneratePdf} />
    </div>
  );
}

export default App;
