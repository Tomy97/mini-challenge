import React, { useEffect, useState } from 'react'
import { Table, Pagination } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Toast } from '../../alerts'
import useFetch from '../../Hooks/useFetch';

const Home = () => {
    const { state, setStatus, handlePageChange } = useFetch();
    const [successMessage] = useState('')
    const [valid, setValid] = useState(false)

    const fireSuccesMeesage = () => {
        successMessage.length &&
            Toast.fire({
                icon: 'success',
                title: successMessage
            })
    }

    const onRemove = (selectedPost) => {
        const data = state.data.filter((post) => post.id !== selectedPost.id)
        let newState = { ...state };
        newState.data = data;
        setStatus(newState)
        if (newState) {
            setValid(true);
            Toast.fire({
                icon: 'success',
                title: `La data seleccionada se elimino correctamente`,
                allowOutsideClick: true,
            })
        }
    }
    const fireFormEdit = async (editPost) => {

        const { value: formValues } = await Swal.fire({
            title: 'Editar formulario',
            html: `
            <label> Titulo </label>
            <textarea id="swal-input1" class="swal2-input" cols="40" rows="20"> ${editPost.title} </textarea>
            <label> Detalle </label>
            <textarea id="swal-input2" class="swal2-input" cols="40" rows="20"> ${editPost.body} </textarea>
            `,
            focusConfirm: false,
            showConfirmButton: true,
            backdrop: false,
            position: 'center',
            confirmButtonText: 'Guardar',
            preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value
                ]
            }
        })
        if (formValues) {
            const prueba = JSON.stringify(formValues)
            // const arr = new Array(prueba);
            Toast.fire({
                icon: 'success',
                title: `El dato seleccionado se actualizo correctamente`,
                allowOutsideClick: true,
            })
        }
        console.log(formValues);

        // const { value: formValues } = await Swal.fire({
        //     title: 'Multiple inputs',
        //     html:
        //       '<input id="swal-input1" class="swal2-input">' +
        //       '<input id="swal-input2" class="swal2-input">',
        //     focusConfirm: false,
        //     preConfirm: () => {
        //       return [
        //         document.getElementById('swal-input1').value,
        //         document.getElementById('swal-input2').value
        //       ]
        //     }
        //   })

        //   if (formValues) {
        //     Swal.fire(JSON.stringify(formValues))
        //   }
    }

    const fireDetails = (detailsPost) => {
        Swal.fire({
            title: 'Detalles',
            text: detailsPost.body,
            allowOutsideClick: true,
        })
    }

    useEffect(fireSuccesMeesage, [successMessage])
    const trash = {
        color: '#F00000'
    }

    const edit = {
        color: '#00459C'
    }
    return (
        <>
            <Table responsive hover >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th >Titulo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.data.map((j) => (
                            <tr key={j.id}>
                                <td>
                                    {j.id}
                                </td>
                                <td>
                                    {j.title}
                                </td>
                                <td>
                                    <i className="fas fa-ellipsis-h d-flex justify-content-center" onClick={() => fireDetails(j)}></i>
                                </td>
                                <td>
                                    <i className="far fa-edit d-flex justify-content-center" onClick={() => fireFormEdit(j)} style={edit} ></i>
                                </td>
                                <td>
                                    <i edge='end' className="fas fa-trash d-flex justify-content-center" onClick={() => onRemove(j)} style={trash}></i>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Pagination className='d-flex justify-content-end '>
                {
                    state.data.map((_, i) => {
                        return (
                            <Pagination.Item onClick={() => handlePageChange(i + 1)}
                                key={i + 1}
                                active={i + 1 === state.activePage}
                            >
                                { i + 1}
                            </Pagination.Item>
                        )
                    })
                }
            </Pagination>
        </>
    )
}

export default Home
