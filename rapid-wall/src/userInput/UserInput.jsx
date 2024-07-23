import React, { useState } from 'react';
import { Input } from "../src/@/components/ui/input";
import './UserInput.css';

const UserInput = ({ onFormSubmit }) => {
  const [productCode, setProductCode] = useState('');
  const [hsnCode, setHsnCode] = useState('');
  const [quantity, setQuantity] = useState('');
  const [uom, setUom] = useState('');
  const [billTo, setBillTo] = useState('');
  const [shipTo, setShipTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      productCode,
      hsnCode,
      quantity,
      uom,
      billTo,
      shipTo,
    };
    onFormSubmit(formData);
  };

  return (
    <div className='w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 animate-slide-up'>
      <div className='text-4xl text-center pb-10 font-bold text-gray-800 animate-fade-in'>
        Invoice Generator
      </div>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-8 pb-8'>
          <div className='animate-fade-in'>
            <label className='text-xl block mb-2 text-gray-700'>Product Code:</label>
            <Input
              type='text'
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
              className='rounded-lg w-full px-4 py-2 border border-gray-300 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none'
            />
          </div>
          <div className='animate-fade-in'>
            <label className='text-xl block mb-2 text-gray-700'>HSN code:</label>
            <Input
              type='text'
              value={hsnCode}
              onChange={(e) => setHsnCode(e.target.value)}
              className='rounded-lg w-full px-4 py-2 border border-gray-300 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none'
            />
          </div>
          <div className='animate-fade-in'>
            <label className='text-xl block mb-2 text-gray-700'>Quantity:</label>
            <Input
              type='text'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className='rounded-lg w-full px-4 py-2 border border-gray-300 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none'
            />
          </div>
          <div className='animate-fade-in'>
            <label className='text-xl block mb-2 text-gray-700'>UOM:</label>
            <Input
              type='text'
              value={uom}
              onChange={(e) => setUom(e.target.value)}
              className='rounded-lg w-full px-4 py-2 border border-gray-300 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none'
            />
          </div>
          <div className='animate-fade-in'>
            <label className='text-xl block mb-2 text-gray-700'>Bill to:</label>
            <Input
              type='text'
              value={billTo}
              onChange={(e) => setBillTo(e.target.value)}
              className='rounded-lg w-full px-4 py-2 border border-gray-300 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none'
            />
          </div>
          <div className='animate-fade-in'>
            <label className='text-xl block mb-2 text-gray-700'>Ship to:</label>
            <Input
              type='text'
              value={shipTo}
              onChange={(e) => setShipTo(e.target.value)}
              className='rounded-lg w-full px-4 py-2 border border-gray-300 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none'
            />
          </div>
        </div>
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-lg'>Submit</button>
      </form>
    </div>
  );
};

export default UserInput;
