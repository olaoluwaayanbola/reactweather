import React from 'react'
import './App.css';
import Right from './components/right/Right';
import { useState, useEffect, Suspense, useRef } from 'react'
import axios from 'axios'

const Left = React.lazy(() => import('./components/left/Left'))
function App() {
  const [state, setState] = useState({})
  const [weatheria, setweather] = useState({})
  const [bool, setbool] = useState(true)
  const [random, setRandom] = useState(0)

  const input = useRef("lagos")

  // Geolocation --implemented then removed
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     input.current = { lat: position.coords.latitude, lon: position.coords.longitude }
  //   })
  // }, [])

  // fetching backgroundImage from unsplash
  const fetch = async () => {
    try {
      const data = await axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=10&query=${input.current}&client_id=ElihHhCfiATgmQsBphWUw24mtbALKw_I0r7jYaMqArY`)
      setState(data.data.results)
    } catch (error) {
      console.log("=>" + error)
    }
  }

  // getting weather data from weatheria 
  const weather = async () => {
    const options =
    {
      method: 'GET',
      url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
      params: { city: `${input.current}` },
      headers: {
        'X-RapidAPI-Key': '862b001e0cmsh956a88122e9550cp19f1a9jsn71cb258cff8a',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    }
    try {
      const data = await axios.request(options)
      setweather(data)
    } catch (error) {
      console.log("weather api =>" + error)
    }
  }
  useEffect(() => {
    fetch();
    setbool(false);
    weather()
    // setRandom(Math.floor(Math.random() * 9));
    // const timer = setTimeout(() => weather(), 1500);
    // return () => clearTimeout(timer);
  }, [])

  return (
    <div className="App_Container">
      <div className="Weather_Main">
        <div className="Left">
          <Suspense fallback={<div>Loading...</div>}>
            <Left
              data={state}
              weather={weatheria}
              condition={bool}
              random={random}
              input={input.current}
            />
          </Suspense>
        </div>
        <div className="Right">
          <div className="Input_Box">
            <form onSubmit={(e) => { e.preventDefault() }}>
              <input
                type="text"
                autoFocus={true}
                placeholder="Region"
                className="Region_Input"
                onChange={(e) => { input.current = e.target.value }}
              />
              <button className="Button" onClick=
                {
                  () => {
                    fetch();
                    weather();
                    setbool(false);
                    setRandom(Math.floor(Math.random() * 9));
                  }
                }>
                GO
              </button>
            </form>
          </div>
          <div className="Right_Box">
            <Right data={weatheria.data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
