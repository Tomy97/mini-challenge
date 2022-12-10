import { Box, Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { TheHeader } from './components/TheHeader'

const Layout = () => {
  return (
    <>
      <TheHeader />
      <Container>
        <Box sx={{ marginTop: '4rem' }}>
          <Outlet />
        </Box>
      </Container>
    </>
  )
}

export default Layout
