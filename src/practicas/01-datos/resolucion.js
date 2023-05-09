/* eslint-disable no-unused-vars */
import users from '../../fakeApi/users.json';

export default function clase01() {
  // EJERCICIO 1
  const tercerUsuario = users[2];
  console.log(tercerUsuario.apodo);
  console.log(tercerUsuario.mascotas[1].color);

  // EJERCICIO 2
  const [first, , , fourth] = users;
  const {email, mascotas} = first;

  // EJERCICIO 3
  const copiaMascotas = [
    ...mascotas,
    {nombre: 'Nami', edad: 2, color: 'negro'},
  ];
  console.log(copiaMascotas);

  //   EJERCICIO 4
  function getUserNameAndPets({apodo, mascotas}) {
    return `El Usuario ${apodo} tiene ${mascotas.length} mascotas`;
  }
  console.log(
    getUserNameAndPets({
      apodo: 'Franconeta',
      mascotas: [
        {nombre: 'Tom', edad: 2, color: 'gris y blanco'},
        {nombre: 'Lucas', edad: 4, color: 'negro'},
      ],
    })
  );

  //   EJERCICIO 5
  const peopleWithMoreThanOnePet = users.filter(
    (user) => user.mascotas.length > 1
  );
  console.log(peopleWithMoreThanOnePet);

  const usersWithMoreThanOnePetString = peopleWithMoreThanOnePet.map((user) =>
    getUserNameAndPets(user)
  );
  console.log(usersWithMoreThanOnePetString);

  const totalPets = users.reduce((acc, user) => {
    return acc + user.mascotas.length;
  }, 0);
  console.log(totalPets);
}
