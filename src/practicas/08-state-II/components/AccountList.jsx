import Account from './Account'
import {styled} from 'styled-components'

export default function AccountList({
  listOfUsers,
  handleAccountFollow,
  verifyUserFollowing,
}) {
  const AccountListStyled = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  `
  return (
    <AccountListStyled>
      {listOfUsers.map(user => (
        <Account
          key={user.id}
          user={user}
          handleAccountFollow={handleAccountFollow}
          verifyUserFollowing={verifyUserFollowing}
        />
      ))}
    </AccountListStyled>
  )
}
