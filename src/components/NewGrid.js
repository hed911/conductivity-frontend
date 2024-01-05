import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import Snackbar from '@mui/material/Snackbar'
import Container from '@mui/material/Container'

import Grid from "./Grid"
import { randomize2DArray, initGrid } from "../shared/helpers/array_methods"
import { makeGetRequest, makePostRequest } from "../shared/helpers/http_methods"
import { isValidGrid } from "../shared/helpers/grid_validation_methods"
import { textTo2DArray } from "../shared/helpers/text_format_methods"
import { useEffect, useState, useRef } from 'react'

const NewGrid = () => {
  const fileInput = useRef()
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState("")
  const [length, setLength] = useState(5)
  const [gridData, setGridData] = useState(initGrid(length))
  const [rowsWithPath, setRowsWithPath] = useState([])
  const [colsWithPath, setColsWithPath] = useState([])
  
  const generateRandomGrid = () => setGridData(randomize2DArray(gridData))

  const toggleCellValue = (i, j) => {
    const copy = structuredClone(gridData)
    copy[i][j] = copy[i][j] === 0 ? 1 : 0
    setGridData(copy)
  }

  const saveRecord = async () => {
    const url = `${process.env.REACT_APP_API_URL}/grids`
    try {
      await makePostRequest(url, { values: JSON.stringify(gridData) })
      setSnackbarMessage("Saved successfully")
      setSnackbarOpen(true)
    } catch (error) {
      displayError()
    }
  }

  const fireFileUpload = () => fileInput.current.click()

  const fileUploaded = e => {
    const file = e.target.files[0]
    var reader = new FileReader()
    reader.onload = event => {
      if (!isValidGrid(event.target.result)) {
        fileInput.current.value = ""
        displayError("File format not valid")
        return
      }

      loadFileContentInGrid(event.target.result)
      fileInput.current.value = ""
    }
    reader.readAsText(file)
  }

  const loadFileContentInGrid = text => {
    const array = textTo2DArray(text)
    setLength(array.length)
    setGridData(array)
  }

  const displayError = (message="There was an error, please try again") => {
    setSnackbarMessage(message)
    setSnackbarOpen(true)
  }
  
  useEffect(() => {
    setGridData(initGrid(length))
  }, [length])

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/grids/find_paths?values=${JSON.stringify(gridData)}`
    const fetchData = async () => {
      const response = await makeGetRequest(url)
      setRowsWithPath(response.payload.horizontal_path_indexes)
      setColsWithPath(response.payload.vertical_path_indexes)
    }

    fetchData()
      .catch(e => displayError())
  }, [gridData])

  return (
    <>
      <h1>New Grid</h1>

      <h3>Define the size of the grid</h3>
      <input ref={fileInput} onChange={fileUploaded} type="file" accept=".txt" style={{ display: "none" }} />
      <Input type="number" value={length} onChange={e => setLength(parseInt(e.target.value))} />

      <h3>Choose an option (optional)</h3>
      <ButtonGroup variant="outlined" aria-label="loading button group">
        <Button onClick={generateRandomGrid}>Generate random</Button>
        <Button onClick={fireFileUpload}>Read from file</Button>
        <Button onClick={saveRecord} color="success" variant="contained">Save in history</Button> 
      </ButtonGroup>

      <Container maxWidth="md">
        <br/>
        <Grid 
          data={gridData} 
          rowsWithPath={rowsWithPath} 
          colsWithPath={colsWithPath} 
          cellClicked={toggleCellValue} />
      </Container>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />
    </>
  )
}

export default NewGrid
