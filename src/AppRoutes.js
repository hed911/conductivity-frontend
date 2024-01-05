import { Routes, Route } from "react-router-dom"
import Navbar from "./shared/components/Navbar/Navbar"
import History from "./components/History"
import NewGrid from "./components/NewGrid"
import Container from '@mui/material/Container'

export const routes = [
  { path: "/", name: "History", component: <History/> },
  { path: "/grids/new", name: "New Grid", component: <NewGrid/> }
]

export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="">
        <Routes>
          { routes.map(route => <Route path={route.path} element={route.component} /> ) }
        </Routes>
      </Container>
    </>
  )
}