import React from 'react'
import { Table } from 'react-bootstrap';
import useFetch from '../../Hooks/useFetch';
const Home = () => {

    const { state } = useFetch();
    console.log(state);
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
                        <th>Ids</th>
                        <th >Titulos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="1" >1</td>
                        <td>Mark</td>
                        <td>
                            <i className="far fa-edit d-flex justify-content-center" style={edit} ></i>
                        </td>
                        <td>
                            <i className="fas fa-trash d-flex justify-content-center" style={trash} ></i>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>
                            <i className="far fa-edit d-flex justify-content-center"></i>
                        </td>
                        <td>
                            <i className="fas fa-trash d-flex justify-content-center"></i>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>
                            Larry the Bird
                        <div className="d-flex justify-content-end">
                            </div>
                        </td>
                        <td>
                            <i className="far fa-edit d-flex justify-content-center"></i>
                        </td>
                        <td>
                            <i className="fas fa-trash d-flex justify-content-center"></i>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Home
