import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component/Navbar';
import Footer from './Component/Footer';
import JumbotronComp from './Component/JumbotronComp';
import Cards from './Component/Cards';

function App() {
  return (

    <div className="App">
      <NavBar bookTitle='KAE BOOKSHOP'/>
      <JumbotronComp/>

      <Cards bookSubTitle='Lastest Release History Books'/>
      <Footer/>
    </div>
  
  );
}

export default App;
