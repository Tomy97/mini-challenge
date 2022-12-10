import * as Yup from 'yup'

export const validationTitle = () => {
  return Yup.string().required('El campo Title es requerido')
}

export const validationDescription = () => {
  return Yup.string().required('El campo Title es requerido')
}
