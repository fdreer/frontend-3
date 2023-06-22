import {styled} from 'styled-components'

const GameList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`
export default GameList
