import React, { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import InvoicePdf from '../src/BillPDF/InvoicePdf';
import UserInput from './userInput/UserInput';
import { Button } from '../src/src/@/components/ui/button';

const ParentComponent = ({ onGeneratePdf }) => {
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [pdfBlob, setPdfBlob] = useState(null);

  const handleFormSubmit = async (data) => {
    setFormData(data);
    setIsSubmitted(true);

    const blob = await pdf(<InvoicePdf formData={data} />).toBlob();
    setPdfBlob(blob);
  };

  const handleDownloadClick = () => {
    if (pdfBlob) {
      onGeneratePdf(pdfBlob);
    }
  };

  return (
    <div>
      <UserInput onFormSubmit={handleFormSubmit} />
      {isSubmitted && pdfBlob && (
        <div className='flex justify-center mt-8'>
          <Button onClick={handleDownloadClick}>Download</Button>
        </div>
      )}
    </div>
  );
};

export default ParentComponent;
