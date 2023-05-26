import AccountList from './Components/AccountList'
import {useState} from 'react'

const usersMock = [
  {
    id: '1',
    nombre: 'john',
    edad: 25,
    email: 'john@egbert.com',
  },
  {
    id: '2',
    nombre: 'rose',
    edad: 27,
    email: 'rose@lalonde.com',
  },
  {
    id: '3',
    nombre: 'dave',
    edad: 25,
    email: 'dave@strider.com',
  },
  {
    id: '4',
    nombre: 'jade',
    edad: 28,
    email: 'jade@harley.com',
  },
  {
    id: '5',
    nombre: 'karkat',
    edad: 29,
    email: 'karkat@vantas.com',
  },
  {
    id: '6',
    nombre: 'tavros',
    edad: 31,
    email: 'tavros@nitram.com',
  },
  {
    id: '7',
    nombre: 'sollux',
    edad: 35,
    email: 'sollux@captor.com',
  },
  {
    id: '8',
    nombre: 'nepeta',
    edad: 32,
    email: 'nepeta@leijon.com',
  },
  {
    id: '9',
    nombre: 'kanaya',
    edad: 45,
    email: 'kanaya@maryam.com',
  },
  {
    id: '10',
    nombre: 'terezi',
    edad: 52,
    email: 'terezi@pyrope.com',
  },
]
export default function Clase8() {
  const [followedAccounts, setFollowedAccounts] = useState([])
  const [accountsToFollow, setAccountsToFollow] = useState(usersMock)

  // Verifica que el usuario esta en la lista followedAccounts
  const verifyUserFollowing = user => {
    return followedAccounts.some(userToCheck => userToCheck.id === user.id)
  }

  const addFollowAccount = user => {
    const userToFollow = accountsToFollow.filter(
      userToCheck => userToCheck.id === user.id
    )
    setFollowedAccounts([...followedAccounts, ...userToFollow])

    const newAccountsToFollow = accountsToFollow.filter(
      userToCheck => userToCheck.id !== user.id
    )
    setAccountsToFollow(newAccountsToFollow)
    return true
  }

  const deleteFollowAccount = user => {
    const userToUnfollow = followedAccounts.filter(
      userToCheck => userToCheck.id === user.id
    )
    setAccountsToFollow([...accountsToFollow, ...userToUnfollow])

    const newFollowedAccounts = followedAccounts.filter(
      userToCheck => userToCheck.id !== user.id
    )
    setFollowedAccounts(newFollowedAccounts)
    return false
  }

  const handleAccountFollow = user => {
    return verifyUserFollowing(user)
      ? deleteFollowAccount(user)
      : addFollowAccount(user)
  }

  return (
    <>
      <h1>CLASE 8</h1>
      {followedAccounts.length > 0 ? (
        <>
          <h2>Usuarios seguidos</h2>
          <AccountList
            listOfUsers={followedAccounts}
            handleAccountFollow={handleAccountFollow}
            verifyUserFollowing={verifyUserFollowing}
          />
        </>
      ) : undefined}
      {accountsToFollow.length > 0 ? (
        <>
          <h2>Usuarios Sugeridos</h2>
          <AccountList
            listOfUsers={accountsToFollow}
            handleAccountFollow={handleAccountFollow}
            verifyUserFollowing={verifyUserFollowing}
          />
        </>
      ) : undefined}
    </>
  )
}
