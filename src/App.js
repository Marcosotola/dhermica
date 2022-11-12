
import './App.css';
import Header from './Sections/Header/Header';
import Main from './Sections/Main/Main'
import Footer from './Sections/Footer/Footer'
import Boot from './Components/Boot/Boot'
import Menu from './Components/Menu/Menu'









function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Main />
      <Boot />
      <Footer />
      

    </div>
  );
}

export default App;