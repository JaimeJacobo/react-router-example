
import './App.css';

import Home from './components/Home'
import Users from './components/Users'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

import {Route} from 'react-router-dom'

function App() {

  const renderHome = ()=>{
    if(true){
      return 
    }
  }

  return (
    <div className="App">
      <Navbar />

      <Route 
        exact 
        path="/" 
        component={(routeInfo)=><Home routeInfo={routeInfo} />} 
      />

      <Route 
        exact 
        path="/contact" 
        component={(routeInfo)=><Contact routeInfo={routeInfo} />} 
      />


      <Route exact path="/users" component={()=><Users />} />

      <Route 
        exact
        path="/users/:number" 
        component={(routeInfo)=><Users routeInfo={routeInfo} />} 
      />

    </div>
  );
}

export default App;


//localhost:3000 --> Home
//localhost:3000/contact --> Contact
//localhost:3000/users --> Users
