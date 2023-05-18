import List from './Components/List';
import Item from './Components/Item';
import paises from '../../fakeApi/paises.json';

export default function Clase5(props) {
  return (
    <>
      <List>
        {paises.map((pais) => (
          <Item key={pais.id}>{pais.name}</Item>
        ))}
      </List>
    </>
  );
}
