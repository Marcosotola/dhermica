
import './App.css';
import Header from './Sections/Header/Header';
import NavBar from './Sections/NavBar/NavBar';
import Main from './Sections/Main/Main'
import Footer from './Sections/Footer/Footer'
import Boot from './Components/Boot/Boot'








function App() {
  return (
    <div className="App">
      <Header />
      <NavBar/>
      <Main />
      <Footer />
      <Boot />

    </div>
  );
}

export default App;