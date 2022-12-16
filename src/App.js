// import logo from './logo.svg';
import './App.css';
import Navbar from "../src/components/navbar";
import Header from './components/header';
import Workers from './components/workers';
import SignUpForm from './components/form';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Workers/>
      <SignUpForm/>
      <Footer/>
    </div>
  );
}

export default App;
