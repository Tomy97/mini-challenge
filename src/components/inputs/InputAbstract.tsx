import { TextField } from '@mui/material'
import { ErrorMessage, useField } from 'formik'

interface Props {
  label: string
  name: string
  type?: 'text'
  placeholder?: string
  [x: string]: any
}

export const InputAbstract = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props)
  return (
    <TextField
      error={meta.touched && !!meta.error}
      {...field}
      {...props}
      label={label}
      helperText={<ErrorMessage name={props.name} />}
      variant="standard"
      fullWidth
    />
  )
}
