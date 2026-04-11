import Header from './components/header'
import Footer from './components/footer'
// import Card from './components/card'
import Home from './pages/home'
import "./App.css"
function App() {

  return (
    <>
        <Header />
         <Home title="My App" description="Welcome to my app!"
         imageUrl="https://via.placeholder.com/300" />
      <Footer/>
  
      {/* <Card /> */}
    </>
  )
}

export default App
