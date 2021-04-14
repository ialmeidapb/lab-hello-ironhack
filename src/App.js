import "bootstrap/dist/css/bootstrap.min.css";
import logo from './images/ironhack-logo.svg'
import bar from './images/menu-top.svg'
import card1 from './images/icon1.png'
import card2 from './images/icon2.png'
import card3 from './images/icon3.png'
import card4 from './images/icon4.png'

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div className='principal mb-5'>
    <div className="app container">
        <div className="d-flex justify-content-between"><img className="ml-3 mt-3 mb-5" src={logo}></img>
        <img className="mr-4 mt-3 mb-5" src={bar}></img></div>
        <div className="text text-white">
        <h1 className="m-5 font-weight-bolder">Say hello to ReactJs</h1>
        <p className="m-5 flex-wrap font-weight-light">You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        </div>
        <div className="button ml-5"><button className="btn btn-light btn-lg">Awesome!</button></div>
    </div>
    
    
    <div className='cards mt-5 mb-5 container d-flex justify-content-center'>
    
    <div className='card1 container d-inline'>
    <img src={card1}></img>
    <h2>Declarative</h2>
    <p>React make it painless to create interactive UIs.</p>
    </div>
    
    <div className='card2 container d-inline'>
    <img src={card2}></img>
    <h2>Components</h2>
    <p>Build encapsuleted components that manage their state.</p>
    </div>
    
    <div className='card3 container d-inline'>
    <img src={card3}></img>
    <h2>Single-Way</h2>
    <p>A set of immutable valties are passed to the component's.</p>
    </div>
    
    <div className='card4 container d-inline'>
    <img src={card4}></img>
    <h2>JSX</h2>
    <p>Statically-typed designed to run on modern browsers.</p>
    </div>

    </div>


    </div>
  );
}

export default App;
