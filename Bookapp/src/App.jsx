import './App.css'
import Book from './components/book'

function App() {

  return (
    <div className="App">
      <Book title={"First Book"} price={400}/>
      <Book title={"Second Book"} price={600}/>
      <Book title={"Third Book"} price={800}/>
      <Book title={"Fourth Book"} price={1000}/>
    </div>
  )
}

export default App