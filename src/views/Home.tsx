import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DataTable from '../components/DataTable'

import { getPostsActions } from '../store/actions/PostActions'
import { useAppDispatch, useAppSelector } from '../store/hook'
const Home = () => {
  const state = useAppSelector(({ post }) => post)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getPostsActions())
  }, [])

  return (
    <Container>
      <DataTable items={state} />
    </Container>
  )
}

export default Home
