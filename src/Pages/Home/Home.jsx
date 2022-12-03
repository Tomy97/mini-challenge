import React, { useEffect, useState } from 'react'
import { useToast } from '../../Hooks/useToast'
import TableComponent from '../../Components/Table'

const Home = (props) => {
  const [successMessage] = useState('')
  const [table, setTable] = useState({
    title: '',
    body: '',
  })

  const fireSuccesMeesage = () => {
    successMessage.length &&
      useToast.fire({
        icon: 'success',
        title: successMessage,
      })
  }

  const handleChange = (e) => {
    setTable({
      ...table,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  useEffect(fireSuccesMeesage, [successMessage])
  return (
    <>
      <TableComponent
        table={table}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isEdit
      />
    </>
  )
}

export default Home
