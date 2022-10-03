
import './assets/styles/App.css';
import Navbar from './components/navbar/Navbar';
import AboutMe from'./components/aboutme/AboutMe';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Proyects from './components/proyects/Proyects';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Navbar/> 
     <section style={{height: '100vh'}} id="Header"><Header/></section>
     <section style={{height: '100vh'}} id="AboutMe"><AboutMe/></section>
     <section style={{height: '100vh'}} id="Proyects"><Proyects/></section>
     <section style={{height: '100vh'}} id="ContactMe"><Form/></section>
     
     <Footer/>
    </div>
  );
}

export default App;
