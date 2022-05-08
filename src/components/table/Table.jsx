import './table.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

const rows = [
    {
        id: 124312,
        product: "Product Name 1",
        customer: "Name Surname",
        date: "1 March",
        amout: '434',
        status: 'Approved'
    },
    {
        id: 124512,
        product: "Product Name 2",
        customer: "Name Surname",
        date: "1 March",
        amout: '700',
        status: 'Approved'
    },
    {
        id: 124582,
        product: "Product Name 3",
        customer: "Name Surname",
        date: "1 March",
        amout: '400',
        status: 'Pending'
    },
    {
        id: 144372,
        product: "Product Name 4",
        customer: "Name Surname",
        date: "1 March",
        amout: '900',
        status: 'Approved'
    },
    {
        id: 164312,
        product: "Product Name 5",
        customer: "Name Surname",
        date: "1 March",
        amout: '650',
        status: 'Pending'
    },
];

  return (
    <div>
        <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.amout}</TableCell>
              <TableCell><span className={`status ${row.status}`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default List