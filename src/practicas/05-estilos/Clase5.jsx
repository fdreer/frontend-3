import List from './Components/List';
import Item from './Components/Item';
import paises from '../../fakeApi/paises.json';
import StyledList from './Components/List';
import StyledItem from './Components/Item';

export default function Clase5(props) {
  return (
    <>
      <StyledList>
        {paises.map((pais) => (
          <StyledItem key={pais.id}>{pais.name}</StyledItem>
        ))}
      </StyledList>
    </>
  );
}
