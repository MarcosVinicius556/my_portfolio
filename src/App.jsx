import PageHeader from "./components/PageHeader/PageHeader"
import PageFooter from "./components/PageFooter/PageFooter"
import Presentation from "./components/Presentation/Presentation"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"

function App() {

  return (
    <>
      <PageHeader />
      <Presentation />
      <About />
      <Projects />
      <PageFooter />
    </>
  )
}

export default App
