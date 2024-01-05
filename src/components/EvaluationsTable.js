import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const highlightColor = "#E0FDA3"
const normalColor = "transparent"

const EvaluationsTable = ({data, onDisplayButtonClick}) => {
  const pathsCount = record => {
    return record.vertical_path_indexes.length + record.horizontal_path_indexes.length
  }

  const backgroundColorForRow = record => {
    return pathsCount(record) > 0 ? highlightColor : normalColor
  }

  const size = record => record.values.length
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Timestamp</StyledTableCell>
            <StyledTableCell align="right">Size</StyledTableCell>
            <StyledTableCell align="right"># paths</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(record => (
            <StyledTableRow key={record.id} style={{backgroundColor: backgroundColorForRow(record)}} >
              <StyledTableCell component="th" scope="row">
                {record.id}
              </StyledTableCell>
              <StyledTableCell align="right">{record.timestamp}</StyledTableCell>
              <StyledTableCell align="right">{size(record)}X{size(record)}</StyledTableCell>
              <StyledTableCell align="right">{pathsCount(record)}</StyledTableCell>
              <StyledTableCell align="right">
                <Button onClick={() => onDisplayButtonClick(record)} variant="contained">Display</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default EvaluationsTable
