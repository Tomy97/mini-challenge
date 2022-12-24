import { Card, Container, FormControl, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Form } from 'formik'
import React from 'react'

const CreatePost = () => {
  return (
    <Container sx={{ marginTop: '6rem' }} >
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid xs={12} md={8}>
          <Card>
            <Typography variant="h5" sx={{ textAlign: 'center' }} gutterBottom component="div">
              Create a Post
            </Typography>
            <Grid xs={12}>
              <FormControl component={Form}>
                  
              </FormControl>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CreatePost
