import React from 'react'
import { InputAbstract } from './InputAbstract'

interface IProps {
  label: string
  placeholder: string
  name: string
}

export const InputText = ({ label, name, placeholder }: IProps) => (
  <InputAbstract
    type="text"
    label={label}
    name={name}
    placeholder={placeholder}
  />
)

export default InputText
