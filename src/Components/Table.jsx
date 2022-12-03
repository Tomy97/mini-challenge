import React from 'react'
import { useFetch } from '../Hooks/index'
import { Table } from 'react-bootstrap'
import { fireOnRemove, fireDetails, fireFormEdit } from '../Hooks/index'
const TableComponent = (props) => {
  const { state } = useFetch()
  return (
    <>
      <Table responsive hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Titulo</th>
          </tr>
        </thead>
        <tbody>
          {state.data.map((props) => (
            <tr key={props.id}>
              <td value={props.title} onChange={props.handleChange}>
                {props.id}
              </td>
              <td value={props.body} onChange={props.handleChange}>
                {props.title}
              </td>
              <td>
                <i
                  className="fas fa-ellipsis-h d-flex justify-content-center"
                  onClick={() => fireDetails(props)}
                ></i>
              </td>
              <td>
                <i
                  className="far fa-edit d-flex justify-content-center"
                  onClick={() => fireFormEdit(props)}
                ></i>
              </td>
              <td>
                <i
                  edge="end"
                  className="fas fa-trash d-flex justify-content-center"
                  onClick={() => fireOnRemove(props)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default TableComponent
