import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetch = () => {
  const [status, setStatus] = useState({
    data: [],
    limit: 10,
  })

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${status.limit}`,
      )
      .then((res) => {
        setStatus((prev) => ({
          ...prev,
          data: res.data,
        }))
      })
      .catch((error) => console.log(error))
  }, [status.limit])

  return {
    state: status,
    setStatus,
  }
}

export default useFetch
