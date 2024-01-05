import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const highlightColor = "#E0FDA3"
const normalColor = "transparent"

const Grid = ({data, rowsWithPath, colsWithPath, cellClicked}) => {
  const shouldHighlightCell = (i, j) => rowsWithPath.includes(i) || colsWithPath.includes(j)
  const backgroundColorForCell = (i, j) => shouldHighlightCell(i,j) ? highlightColor : normalColor

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={`row_${i}`}>
              {row.map( (number, j) => { 
                return <TableCell 
                          style={{backgroundColor: backgroundColorForCell(i, j)}} 
                          key={`cell_${i}_${j}`} 
                          align=""
                          onClick={() => cellClicked(i, j)}
                          >{number}
                          
                        </TableCell>
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Grid
