import React from 'react'
import { Table } from 'react-bootstrap'
import useFetch from '../Components/useFetch'

const Home = () => {
    const { state, getData } = useFetch();
    return (
        <Table getData={getData} >
            <thead>
                <tr>
                    <th>
                        Id
                        </th>
                    <th>
                        Titulo
                        </th>
                </tr>
            </thead>
        </Table>
    )
}

export default Home
