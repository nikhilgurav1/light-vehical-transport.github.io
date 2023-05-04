// import logo from './logo.svg';
// import './App.css';
import About from './About';
import 'node_module/bootstrap/dist/css/bootstrap.css';

import Navbar from './Navbar';
function App(props) {
  return (
<>
<Navbar title="Get Loaded With Us" home="Home" about="About Us"/>

<About/>
</>
  );
}

export default App;
