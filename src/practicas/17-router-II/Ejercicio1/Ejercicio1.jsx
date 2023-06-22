import {useEffect, useState} from 'react'
import Post from './Post'
import {useRoutes} from 'react-router-dom'
import ListOfPosts from './ListOfPosts'

function Ejercicio1() {
  const router = useRoutes([
    {path: '/', element: <ListOfPosts />},
    {path: '/posts/:id', element: <Post />},
  ])

  return <>{router}</>
}
export default Ejercicio1
