import PageHeader from "./components/PageHeader/PageHeader"
import PageFooter from "./components/PageFooter/PageFooter"
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {

  

  return (
    <>
      <PageHeader />
      <ToastContainer closeButton={false} />
      <Outlet />
      <PageFooter />
    </>
  )
}

export default App
