import {useParams} from 'react-router-dom'
import PostItem from '../UI/Item'
import {useEffect, useState} from 'react'

function Post() {
  const [post, setPost] = useState()
  const params = useParams()

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      )
      const data = await response.json()
      setPost(data)
    }
    fetchData()
  }, [])

  return (
    <>
      {post ? (
        <PostItem>
          <p>{post.id}</p>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </PostItem>
      ) : (
        <span>Loading...</span>
      )}
    </>
  )
}
export default Post
