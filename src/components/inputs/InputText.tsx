import React from 'react'
import { InputAbstract } from './InputAbstract'

type IType = 'text' | 'password' | 'email' | 'number'

interface IProps {
  label: string
  placeholder: string
  name: string
  type: IType
}


export const InputText = ({ label, name, placeholder, type }: IProps) => (
  <InputAbstract
    type={type}
    label={label}
    name={name}
    placeholder={placeholder}
  />
)

export default InputText
