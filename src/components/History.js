import Snackbar from '@mui/material/Snackbar'
import GridUI from '@mui/material/Grid'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'

import Grid from "./Grid"
import EmptyStateHistory from "./EmptyStateHistory"
import EmptyStateGrid from "./EmptyStateGrid"
import EvaluationsTable from "./EvaluationsTable"
import { useEffect, useState } from 'react'
import { makeGetRequest, makeDeleteRequest } from "../shared/helpers/http_methods"

const History = () => {
  const [currentGridData, setCurrentGridData] = useState(null)
  const [rowsWithPath, setRowsWithPath] = useState([])
  const [colsWithPath, setColsWithPath] = useState([])

  const [data, setData] = useState([])
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState("")

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/grids`
    const fetchData = async () => {
      const response = await makeGetRequest(url)
      setData(response.payload)
    }

    fetchData()
      .catch(e => displayError())
  }, [])

  const displayError = (message="There was an error, please try again") => {
    setSnackbarMessage(message)
    setSnackbarOpen(true)
  }

  const displayGrid = record => {
    setCurrentGridData(record.values)
    setRowsWithPath(record.horizontal_path_indexes)
    setColsWithPath(record.vertical_path_indexes)
  }

  const renderGrid = () => {
    if (!currentGridData) {
      return <EmptyStateGrid />
    }
    
    return (
      <Grid 
        data={currentGridData} 
        rowsWithPath={rowsWithPath} 
        colsWithPath={colsWithPath} 
        cellClicked={() => {}} />
    )
  }

  const clearData = async () => {
    const url = `${process.env.REACT_APP_API_URL}/grids/clear`
    try {
      await makeDeleteRequest(url)
      setSnackbarMessage("Cleared successfully")
      setSnackbarOpen(true)
      setData([])
    } catch (error) {
      displayError()
    }
  }

  const renderContent = () => {
    if (!data.length) {
      return <EmptyStateHistory />
    }

    return (
      <>
        <h1>Evaluations History</h1>
        <ButtonGroup variant="outlined" aria-label="loading button group">
          <Button onClick={clearData}>Clear data</Button>
        </ButtonGroup>
        <GridUI container spacing={2}>
          <GridUI item xs={6}>
            <EvaluationsTable
              data={data}
              onDisplayButtonClick={displayGrid}
            />
          </GridUI>
          <GridUI item xs={6}>
            {renderGrid()}
          </GridUI>
        </GridUI>
      </>
    )
  }

  return (
    <>
      {renderContent()}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />
    </>
  )
}

export default History
