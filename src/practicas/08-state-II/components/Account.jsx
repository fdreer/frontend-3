import {useState} from 'react'
import {styled} from 'styled-components'

export default function Account({
  user,
  handleAccountFollow,
  verifyUserFollowing,
}) {
  const [followState, setFollowState] = useState(() =>
    verifyUserFollowing(user)
  )
  const {nombre, edad, email} = user

  const handleClick = () => {
    handleAccountFollow(user)
    setFollowState(verifyUserFollowing(user))
  }

  const AccountStyled = styled.article`
    border: #ccc solid 3px;
    border-radius: 10px;
    width: 200px;
    padding: 10px;
  `

  const FollowButton = styled.button`
    &:hover {
      border: ${prop =>
        prop.followState ? 'rgb(137, 10, 20) 1px solid' : undefined};
      color: ${prop => (prop.followState ? 'rgb(137, 10, 20)' : 'white')};
    }
  `

  return (
    <AccountStyled followState>
      <h3>{nombre.toUpperCase()}</h3>
      <p>{edad}</p>
      <p>{email}</p>
      <FollowButton onClick={handleClick} followState={followState}>
        {followState ? 'Unfollow' : 'Follow'}
      </FollowButton>
    </AccountStyled>
  )
}
