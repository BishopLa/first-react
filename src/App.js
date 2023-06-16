import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Services from './Pages/Services/Services';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <Classwork/> */}
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/services" exact component={Services}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
