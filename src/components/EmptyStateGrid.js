import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import TableViewIcon from '@mui/icons-material/TableView'

const EmptyStateGrid = () => {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <div style={{textAlign: "center"}}>
          <TableViewIcon style={{ fontSize: 120 }} />
          <h2>No grid has been selected</h2>
          <p>When you pick one, you will see the data here</p>
        </div>
        
      </Box>
    </Container>
  )
}

export default EmptyStateGrid
