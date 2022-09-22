import './App.css';
import Left from './components/left/Left';
import Right from './components/right/Right';
import { useState, useEffect } from 'react'
import axios from 'axios'
function App() {
  const [state, setState] = useState({})
  const [input, setInput] = useState("")
  const [weatheria, setweather] = useState({})
  const [bool, setbool] = useState(true)
  const [random, setRandom] = useState(0)

  // handle form
  const handleinput = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // fetching backgroundImage from unsplash
  const fetch = async () => {
    try {
      const data = await axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=6&query=${input}&client_id=ElihHhCfiATgmQsBphWUw24mtbALKw_I0r7jYaMqArY`)
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
      params: { city: `${input}` },
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
    fetch()
    weather()
  }, [])
  return (
    <div className="App_Container">
      <div className="Weather_Main">
        <div className="Left" >
          <Left
            data={state}
            weather={weatheria}
            condition={bool}
            random={random}
            input={input}
          />
        </div>
        <div className="Right">
          <div className="Input_Box">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={input}
                onChange={handleinput}
                placeholder="Region"
                className="Region_Input"
                autoFocus="true"
              />
              <button className="Button" onClick=
                {
                  () => {
                    fetch();
                    weather();
                    setbool(false);
                    setRandom(Math.floor(Math.random() * 5));
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
