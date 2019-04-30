import React from "react";
import Toolbar from './components/Toolbar/Toolbar';
import Footer from './components/Footer/Footer';


const App = () => (
  <div>
  <Toolbar></Toolbar>
  <div className="row plp-container">
    <img className="plp-container-image" src="./assets/Image_PDP"/>
  </div>
  <Footer></Footer>
  </div>
);



export default App;