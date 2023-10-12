import React from 'react'
//import Header from './components/Header'
import Footer from './components/Footer'
//import Body from './components/Body'
import State from './components/State';
import './App.css';
//import './State.css';
import NavBar from './components/NavBar';
const App = () => {
  return (
   <html>
    <head>
    </head>
    <body>
    <div className='App'>
      <header><NavBar/></header>
      <main className='constructor'><State/></main>
      <footer class='footer'><p><Footer/></p></footer>
      
   </div>
    </body>
   </html>
   
  )
}

export default App