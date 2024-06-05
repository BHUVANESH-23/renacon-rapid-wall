import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoicePdf from '../src/BillPDF/InvoicePdf';
import './App.css';
import UserInput from './userInput/UserInput';
import { Button } from '../src/src/@/components/ui/button';
import axios from 'axios';
import ReactPDF from '@react-pdf/renderer';

function App() {
  const [pdfBlob, setPdfBlob] = useState(null);

  const handleDownloadClick = async () => {
    try {
      const pdfDoc = <InvoicePdf />;
      const blob = await ReactPDF.pdf(pdfDoc).toBlob();
      setPdfBlob(blob);
      apiCall(blob);
    } catch (error) {
      console.error("Error converting document to blob:", error);
    }
  };

  const apiCall = async (blob) => {
    if (!blob) {
      console.error("No PDF blob available to upload.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('pdfFile', blob, 'invoice.pdf'); // Provide a filename

      const result = await axios.post("http://localhost:5000/upload-files", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(result);
    } catch (error) {
      console.error("Error uploading PDF file:", error);
    }
  };

  return (
    <>
      <UserInput />
      <PDFDownloadLink document={<InvoicePdf />} fileName='invoice.pdf' className='flex justify-center mt-[-170px]'>
        {({ loading }) => (
          loading ? <Button>Loading Document</Button> : <Button onClick={handleDownloadClick}>Download</Button>
        )}
      </PDFDownloadLink>
    </>
  );
}

export default App;
