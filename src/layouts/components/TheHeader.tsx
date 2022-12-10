import {
  AppBar,
  Box,
  Container,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Link,
} from '@mui/material'
import React, { useState } from 'react'
import { Link as Links } from 'react-router-dom'

export const TheHeader = () => {
  const pages = [
    {
      name: 'Home',
      to: '',
    },
    {
      name: 'Create Post',
      to: '/create',
    },
  ]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" component="nav">
        <Container maxWidth="xl">
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'end' }}>
              {pages.map((page, index) => (
                <Button color="inherit" key={index}>
                  <Link
                    component={Links}
                    to={page.to}
                    sx={{ color: 'white' }}
                    underline="none"
                    color="primary"
                  >
                    {page.name}
                  </Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
