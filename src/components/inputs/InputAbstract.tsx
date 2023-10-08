import { TextField } from '@mui/material'
import { ErrorMessage, useField } from 'formik'

type IType = 'text' | 'password' | 'email' | 'number'
interface Props {
  label: string
  name: string
  type: IType
  placeholder?: string
  [x: string]: any
}

export const InputAbstract = ({ label, type, ...props }: Props) => {
  const [field, meta] = useField(props)
  return (
    <TextField
      type={type}
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
