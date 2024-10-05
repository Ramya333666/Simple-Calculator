import React from 'react';

const Input = ({ num1, num2, setNum1, setNum2, handleclick, handleclick1, handleclick2, handleclick3 }) => {
  return (
    <div>
      <div className='mb-4'>
        <input
          type='number'
          required
          placeholder='Enter first number'
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="w-full px-3 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
      <div className='mb-4'>
        <input
          type='number'
          required
          placeholder='Enter second number'
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="w-full px-3 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
      <div className="flex space-x-2">
        <button onClick={handleclick} className="flex-1 bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition">
          ADD
        </button>
        <button onClick={handleclick1} className="flex-1 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition">
          SUB
        </button>
      </div>
      <div className="flex space-x-2 mt-2">
        <button onClick={handleclick2} className="flex-1 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
          MUL
        </button>
        <button onClick={handleclick3} className="flex-1 bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition">
          DIV
        </button>
      </div>
    </div>
  );
};

export default Input;
