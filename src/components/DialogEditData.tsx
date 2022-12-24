import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { Form, Formik } from 'formik'
import InputText from './inputs/InputText'
import * as Yup from 'yup'
import {
  validationTitle,
  validationDescription,
} from '../validators/Validators'
import { IPosts } from '../interfaces/IPosts'

interface IDialogProps {
  open: boolean
  fn: (open: boolean) => void
  data: IPosts
}

const initialValues = {
  title: '',
  description: '',
}

const validationSchema = Yup.object().shape({
  title: validationTitle(),
  description: validationDescription(),
})

export const DialogEditData = ({ data, fn, open }: IDialogProps) => {
  const handleClose = () => {
    fn(false)
  }

  return (
    <Dialog open={open}>
      <DialogTitle>Editar Data</DialogTitle>
      <DialogContent>
        <DialogContentText>{data.body}</DialogContentText>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(val) => {
            console.log(val)
          }}
        >
          <Box component={Form}>
            <Grid container>
              <Grid xs={12}>
                <InputText
                  label="Editar title"
                  name={initialValues.title}
                  placeholder="Inserte el title que queres cambiar"
                />
              </Grid>
              <Grid xs={12} mt={3}>
                <InputText
                  label="Editar Description"
                  name={initialValues.description}
                  placeholder="ingrese la descripcion que quiere editar"
                />
              </Grid>
            </Grid>
          </Box>
        </Formik>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()}>Cancel</Button>
        <Button onClick={() => handleClose()}>Enviar</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogEditData
