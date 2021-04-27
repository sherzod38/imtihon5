import {BrowserRouter as Router} from 'react-router-dom'


import Header from './pages/Header'
import HomePages from './pages/Home'
import Footer from './pages/Footer/Footer'


import './assets/styles/main.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <HomePages/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
