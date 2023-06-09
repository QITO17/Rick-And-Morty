import { useEffect, useState } from 'react'
import random from '../public/helpers/random.js'
import './App.css'
import axios from 'axios'
import Location from './components/Location.jsx';
import ResidentList from './components/ResidentList.jsx';
import image from './imgs/logo.png'
import song from './video/rick2.mp3'
function App() {
  
  const [location, setLocation] = useState();


  const handleSubmit = (event) => {
    event.preventDefault(); 
    const locationNew = event.target.locationId.value
    axios.get(`https://rickandmortyapi.com/api/location/${locationNew}`)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  }
  
var audio = new Audio(song);
var isPlaying = false; //Deje Las Variables declaradas con VAR por una cuestion de ambitos

function toggleSong() {
  if (isPlaying) {
    audio.pause(); 
  } else {
    audio.play(); 
  }
  isPlaying = !isPlaying;
}

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${random()}`
    
    axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  }, []);
  

  return (
    <div className="App">
      <button onClick={toggleSong} className='button--song'><i className='bx bx-play'></i></button>

      <div className="backgro">
          <div className="conteiner--word">
            <img src={image} alt="" />
        </div>
      </div>
      <div className="conteiner--all">  
      <form onSubmit={handleSubmit}>

        <div className="formu">
          <input type="text" id='locationId' placeholder='Tipe a location id...' />
          <button className='button--search'>Search <i className='bx bx-search-alt'></i></button>
        </div>

        <h2>Welcome to the crazy universe</h2>
      </form>
        <Location location={location}/>
        <ResidentList location={location}/>
      </div>
    </div>
  )
}

export default App
