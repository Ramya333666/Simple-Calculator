import Input from './Input';
import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  const handleOperation = (operation) => {
    let variable;
    switch (operation) {
      case 'add':
        variable = Number(num1) + Number(num2);
        break;
      case 'subtract':
        variable = Number(num1) - Number(num2);
        break;
      case 'multiply':
        variable = Number(num1) * Number(num2);
        break;
      case 'divide':
        variable = Number(num1) / Number(num2);
        break;
      default:
        variable = 0;
    }
    setResult(variable);
    setNum1(''); // Clear inputs (optional)
    setNum2(''); // Clear inputs (optional)
  };

  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-pink-50">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-pink-600">Calculator</h1>
        <Input
          num1={num1}
          num2={num2}
          setNum1={setNum1}
          setNum2={setNum2}
          handleclick={() => handleOperation('add')}
          handleclick1={() => handleOperation('subtract')}
          handleclick2={() => handleOperation('multiply')}
          handleclick3={() => handleOperation('divide')}
        />
        <h3 className="text-lg font-semibold mt-4 text-center text-pink-700">Result: {result}</h3>
      </div>
    </div>
  );
}

export default App;
