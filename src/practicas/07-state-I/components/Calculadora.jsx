import {useState} from 'react';
import ButtonCalculate from './ButtonCalculate';

export default function Calculadora({amount, onEqual}) {
  const [value, setValue] = useState(0);

  function increment() {
    setValue(value + amount);
  }

  function decrement() {
    setValue(value - amount);
  }

  function reset() {
    setValue(0);
  }

  function logValue() {
    console.log(value);
    onEqual(value);
  }

  return (
    <>
      <h2>Calculadora</h2>
      <div>
        <ButtonCalculate onClick={increment}>+</ButtonCalculate>
        <ButtonCalculate onClick={decrement}>-</ButtonCalculate>
        <ButtonCalculate onClick={reset}>reset</ButtonCalculate>
        <ButtonCalculate onClick={logValue}>=</ButtonCalculate>
      </div>
      <p>Valor: {value}</p>
    </>
  );
}
