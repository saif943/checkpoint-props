//import logo from './logo.svg';
import './App.css';
import Image from './image.jpg'
import Profile from "./profile/profile";
import Card from 'react-bootstrap/Card'
const handleName = (name) => {
  alert(`Welcome ${name}`);}

function App() {
  return (
    <>
            <button   onClick={() => handleName("saif")}>Profil </button> 

      <Profile title="Saif ben lahmer"   Btn={<button   onClick={() => handleName("saif")}>Profil </button>} 
>
        <Card.Img variant="top" src={Image} className="IMG"/>
      </Profile>
  </>
      
  );
}

export default App;
