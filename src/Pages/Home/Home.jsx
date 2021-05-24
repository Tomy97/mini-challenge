import React, { useEffect, useState } from 'react'
import { Table, Pagination } from 'react-bootstrap';
import { Toast } from '../../alerts';
import useFetch from '../../Hooks/useFetch';
const Home = () => {

    const { state, setStatus, handlePageChange } = useFetch();
    const [successMessage] = useState('')
    const [valid, setValid] = useState(false)

    const trash = {
        color: '#F00000'
    }

    const edit = {
        color: '#00459C'
    }

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
                title: `La data seleccionada se elimino correctamente`
            })
        }
    }
    useEffect(fireSuccesMeesage, [successMessage])
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
                                    <i className="far fa-edit d-flex justify-content-center" style={edit}></i>
                                </td>
                                <td>
                                    <i edge='end' className="fas fa-trash d-flex justify-content-center" onClick={() => onRemove(j)} aria-label='delete' style={trash}></i>
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
