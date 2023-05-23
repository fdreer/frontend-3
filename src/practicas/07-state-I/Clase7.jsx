import {useState} from 'react';
import Calculadora from './components/Calculadora';

export default function Clase7() {
  const [sum, setSum] = useState(0);

  const sumarCalculadora = (valor) => {
    setSum(sum + valor);
  };
  return (
    <>
      <Calculadora amount={1} onEqual={sumarCalculadora} />
      <Calculadora amount={5} onEqual={sumarCalculadora} />
      <Calculadora amount={13} onEqual={sumarCalculadora} />
      <h3>La suma es: {sum}</h3>
    </>
  );
}
