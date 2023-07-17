import './App.css';
import Main from './Main.jsx';
import Nav from './Nav';
import Prompt from './Prompt';
import Midcomp from './Midcomp';
import Social from './Social';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className='side'>
        <Prompt />
        <div className='totaltop'>
          <Main />
          <Nav />
        </div>
      </div>
      <div className='middle'>
        <Midcomp />
      </div>
      <div className='visit'>
        <Social/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>

  );
}

export default App;
