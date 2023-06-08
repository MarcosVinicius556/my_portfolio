import PageHeader from "./components/PageHeader/PageHeader"
import PageFooter from "./components/PageFooter/PageFooter"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <PageHeader />
      <Outlet />
      <PageFooter />
    </>
  )
}

export default App
