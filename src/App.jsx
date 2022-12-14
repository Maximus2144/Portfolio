
//import './assets/styles/App.css';
import Navbar from './components/navbar/Navbar';
import AboutMe from'./components/aboutme/AboutMe';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Proyects from './components/proyects/Proyects';
import Main from './components/main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/> 
     <section style={{height: '100vh', textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', }} id="Main"><Main/></section>
     <section style={{height: '100vh', textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', }} id="AboutMe"><AboutMe/></section>
     <section style={{height: '100vh', textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', }} id="Proyects"><Proyects/></section>
     <section style={{height: '100vh', textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', }} id="ContactMe"><Form/></section>
     
     <Footer/>
    </div>
  );
}

export default App;
