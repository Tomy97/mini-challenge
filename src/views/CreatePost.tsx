import { Card, Container, FormControl, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Form } from "formik";
import InputText from '../components/inputs/InputText';
import { useState } from 'react';
const CreatePost = () => {
  const [ initialValues, setInitialValues ] = useState({
    title: '',
    description: '',
  })

  const handleSubmitCreatePost = async () => {
    console.log('handleSubmitCreatePost')
  }
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
                <Container>
                  <Grid xs={12}>
                    <InputText
                      label="Title"
                      name={initialValues.title}
                      placeholder='Inserte el title que queres crear'
                      type='text'
                    />
                  </Grid>
                </Container>
              </FormControl>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CreatePost
