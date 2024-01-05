import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const EmptyStateHistory = () => {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <div style={{textAlign: "center"}}>
          <SentimentDissatisfiedIcon style={{ fontSize: 120 }} />
          <h2>You don't have any grid records</h2>
          <p>When you create one, you will see them here</p>
        </div>
        
      </Box>
    </Container>
  )
}

export default EmptyStateHistory
