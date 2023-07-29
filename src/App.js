import './App.css';
import ImgMeme from './components/ImgMeme.jsx';
import Cookies from './components/Cookies.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Cookies />
      <NavBar />
      <ImgMeme />
      <Footer />
    </div>
  );
}

export default App;
