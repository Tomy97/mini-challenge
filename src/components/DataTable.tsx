import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material'
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material'
import { IPosts } from '../interfaces/IPosts'
import { useAppDispatch } from '../store/hook'
import { deletePostAction } from '../store/actions/PostActions'
import { useState } from 'react'
import DialogEditData from './DialogEditData'
interface Rows {
  items: Array<IPosts>
}

export const DataTable = ({ items }: Rows) => {
  const [open, setOpen] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const handleDelete = (id: number) => {
    dispatch(deletePostAction(id))
  }

  const handleOpenModal = (data: IPosts) => {
    setOpen(true)

    return <DialogEditData open={open} data={data} fn={setOpen} />
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Titulo</TableCell>
            <TableCell align="center">Descripcion</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item: any) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="center">{item.title}</TableCell>
              <TableCell align="center">{item.body}</TableCell>
              <TableCell align="center">
                <Button color="primary" onClick={() => handleOpenModal(item)}>
                  <EditIcon />
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button color="error" onClick={() => handleDelete(item.id)}>
                  <DeleteIcon />
                </Button>
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable
