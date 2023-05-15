import PageHeader from "./components/PageHeader/PageHeader"
import PageFooter from "./components/PageFooter/PageFooter"
import Presentation from "./components/Presentation/Presentation"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"

function App() {

  return (
    <>
      <PageHeader />
      <Presentation />
      <About />
      <Projects />
      <Contact />
      <PageFooter />
    </>
  )
}

export default App
