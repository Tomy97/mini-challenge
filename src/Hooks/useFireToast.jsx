/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useToast } from './index'

import { useFetch } from './useFetch'

const { state, setStatus } = useFetch()

const [valid, setValid] = useState(false)

export const fireFormEdit = async (title, body) => {
  const { value: formValues } = await Swal.fire({
    title: 'Editar formulario',
    html: `
            <label> Titulo </label>
            <textarea id="swal-input1" class="swal2-input" cols="40" rows="20"> ${title} </textarea>
            <label> Detalle </label>
            <textarea id="swal-input2" class="swal2-input" cols="40" rows="20"> ${body} </textarea>
            `,
    focusConfirm: false,
    showConfirmButton: true,
    backdrop: false,
    position: 'center',
    confirmButtonText: 'Guardar',
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value,
      ]
    },
  })
  if (formValues) {
    const changeData = JSON.stringify(formValues)
    useToast.fire({
      icon: 'success',
      title: `El dato seleccionado se actualizo correctamente`,
      allowOutsideClick: true,
    })
    return changeData
  }
}

export const fireDetails = (detailsPost) => {
  Swal.fire({
    title: 'Detalles',
    text: detailsPost.body,
    allowOutsideClick: true,
  })
}

export const fireOnRemove = (selectedPost) => {
  const data = state.data.filter((post) => post.id !== selectedPost.id)
  let newState = { ...state }
  newState.data = data
  setStatus(newState)
  if (newState) {
    setValid(true)
    useToast.fire({
      icon: 'success',
      title: `La data seleccionada se elimino correctamente`,
      allowOutsideClick: true,
    })
  }
  return data
}
