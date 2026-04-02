import { useState } from "react";
import './App.css';

function App() {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);
  
  const calculate = (a: string, b: string, op: string) => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) return '0';
    let result = 0;
    switch (op) {
      case '+': result = numA + numB; break;
      case '-': result = numA - numB; break;
      case '*': result = numA * numB; break;
      case '/': result = numA / numB; break;
      case '%': if (numB === 0) return "Error"; result = numA % numB; break; default: return b;
    }
    return String(Math.round(result * 100) / 100);
  };

  const handleDigit = (digit: string) => {
    if (waitingForNewValue) {
      setCurrentValue(digit);
      setWaitingForNewValue(false);
    } else {
      if (currentValue === '0' && digit !== '.') {
        setCurrentValue(digit);
      } else if (digit === '.' && currentValue.includes('.')) {
        return;
      } else {
        setCurrentValue(currentValue + digit);
      }
    }
  };

  const handleOperator = (nextOperator: string) => {
    if (previousValue && operator && !waitingForNewValue) {
      const result = calculate(previousValue, currentValue, operator);
      setCurrentValue(result);
      setPreviousValue(result);
    } else {
      setPreviousValue(currentValue)
    }
    setOperator(nextOperator);
    setWaitingForNewValue(true);
  };

  const handleEqual = () => {
    if (operator && previousValue) {
      const result = calculate(previousValue, currentValue, operator);
      setCurrentValue(result);
      setPreviousValue(null);
      setOperator(null);
      setWaitingForNewValue(true)
    }
  };

  const handleAC = () => {
    setCurrentValue('0');
    // setOperator(null)
    setPreviousValue(null);
    setWaitingForNewValue(false);
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-sm  bg-gray-600 rounded-3xl overflow-hidden shadow-2xl pb-1">
        <div className="text-white text-right text-6xl font-light px-6 py-8">
          {currentValue}
        </div>
        <div className="grid grid-cols-4 gap-[1px] bg-gray-600 border-t border-gray-600">
          <button onClick={() => handleAC('AC')} className="bg-gray-300 text-black text-3xl py-6 hover:bg-gray-400">AC</button>
          <button className="bg-gray-300 text-black text-3xl py-6 hover:bg-gray-400">+/-</button>
          <button onClick={() => handleOperator('%')} className="bg-gray-300 text-black text-3xl py-6 hover:bg-gray-400">%</button>
          <button onClick={() => handleOperator('/')} className="bg-orange-500 text-white text-4xl py-6 hover:bg-orange-400 focus:bg-orange-600">÷</button>

          <button onClick={() => handleDigit('7')}className="bg-gray-200 text-black text-4xl py-6 hover:bg-gray-300">7</button>
          <button onClick={() => handleDigit('8')} className="bg-gray-200 text-black text-4xl py-6 hover:bg-gray-300">8</button>
          <button onClick={() => handleDigit('9')} className="bg-gray-200 text-black text-4xl py-6 hover:bg-gray-300">9</button>
          <button onClick={() => handleOperator ('*')} className="bg-orange-500 text-white text-4xl py-6 hover:bg-orange-400 focus:bg-orange-600">x</button>

          <button onClick={() => handleDigit('4')} className="bg-gray-200 text-black text-4xl py-6 hover:bg-gray-300">4</button>
          <button onClick={() => handleDigit('5')} className="bg-gray-200 text-black text-4xl py-6 hover:bg-gray-300">5</button>
          <button onClick={() => handleDigit('6')} className="bg-gray-200 text-black text-4xl py-6 hover:bg-gray-300">6</button>
          <button onClick={() => handleOperator ('-')} className="bg-orange-500 text-white text-5xl py-6 hover:bg-orange-400 focus:bg-orange-600">-</button>

          <button onClick={() => handleDigit('1')} className="bg-gray-200 text-black text-4xl py-6 hover:bg-gray-300">1</button>
          <button onClick={() => handleDigit('2')} className="bg-gray-200 text-black text-4xl py-6 hover:bg-gray-300">2</button>
          <button onClick={() => handleDigit('3')} className="bg-gray-200 text-black text-4xl py-6 hover:bg-gray-300">3</button>
          <button onClick={() => handleOperator ('+')} className="bg-orange-500 text-white text-5xl py-6 hover:bg-orange-400 focus:bg-orange-600">+</button>

          <button onClick={() => handleDigit('0')} className="col-span-2 bg-gray-200 text-black text-4xl py-6 pl-10 text-left hover:bg-gray-300">0</button>
          <button onClick={() => handleDigit('.')} className="bg-gray-200 text-black text-4xl py-6 hover:bg-gray-300">.</button>
          <button onClick={() => handleOperator ('=')}  className="bg-orange-500 text-white text-4xl py-6 hover:bg-orange-400 focus:bg-orange-600">=</button>
        </div>
      </div>
    </div>
  )
}
export default App;
