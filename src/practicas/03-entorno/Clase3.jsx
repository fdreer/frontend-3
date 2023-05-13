import isOdd from 'is-odd';

export default function Clase3() {
  const nums = [1, 2, 3, '4', 5, 6, 7, '8', 9, 10];

  //  La funcion isOdd() es una funcion que retorna true o false dependiendo
  //  si el numero es par o impar, independientemente de si es un numero o un string.

  return (
    <>
      <h2>Numeros pares:</h2>
      <ul>
        {nums
          .filter((num) => !isOdd(num))
          .map((num, index) => (
            <li key={index}>{num}</li>
          ))}
      </ul>

      <h2>Numeros impares:</h2>
      <ul>
        {nums.filter(isOdd).map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </>
  );
}
