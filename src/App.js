

//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Info from './components/Info';
import Interests from './components/Interests';
import Image from './components/Image';



const App = ()=> {
  
  
  return (


   
    <section className="section">
        
        <Image className="img"/>
        <Info />
         <section className="info1">
         <About/>
         <Interests/>            
         </section>
          <Footer/>

    </section>
   

  );
}

export default App;
