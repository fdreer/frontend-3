import {useEffect, useState} from 'react'
import PostList from '../UI/List'
import {Link} from 'react-router-dom'

function ListOfPosts(params) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      setPosts(data)
    }
    fetchData()
    console.log(posts)
    console.log('useEffect')
  }, [])

  return (
    <PostList>
      {posts.map(post => (
        <li key={post.id} style={{listStyle: 'none'}}>
          <p>{post.id}</p>
          <h3>{post.title}</h3>
          <Link to={`./posts/${post.id}`}>Ver mas</Link>
        </li>
      ))}
    </PostList>
  )
}
export default ListOfPosts
