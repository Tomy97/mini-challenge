import axios from 'axios'
import { IPosts } from '../interfaces/IPosts'

export const getPostsService = async () => {
  const { data } = await axios.get<IPosts[]>(
    'https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10',
  )
  return data
}

export const deletePostService = async (id: number) => {
  const { data } = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  )
  return data
}
