import List from './Components/CountryList';
import Item from './Components/CountryItem';
import paises from '../../fakeApi/paises.json';
import CountryList from './Components/CountryList';
import CountryItem from './Components/CountryItem';

export default function Clase5() {
  return (
    <>
      <CountryList>
        {paises.map((pais) => (
          <CountryItem key={pais.id}>{pais.name}</CountryItem>
        ))}
      </CountryList>
    </>
  );
}
