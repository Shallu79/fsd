
import './App.css'

import Navbar from './components/Navbar';
import Card from './components/card';
import Hero from './components/hero';
import Footer from './Components/footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar></Navbar>
       <Card></Card>
       <Hero></Hero>

    </>
  )
}

export default App
