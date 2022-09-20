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

  // handle form
  const handleinput = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  // fetch backgroundImage
  const fetch = async () => {
    try {
      const data = await axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=1&query=${input}&client_id=ElihHhCfiATgmQsBphWUw24mtbALKw_I0r7jYaMqArY`)
      setState(data.data.results)
    } catch (error) {
      console.log("=>" + error)
    }

  }

  // weatheria get data
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: { q: 'London', days: '3' },
    headers: {
      'X-RapidAPI-Key': '862b001e0cmsh956a88122e9550cp19f1a9jsn71cb258cff8a',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  const weather = async () => {
    try {
      const data = await axios.request(options)
      setweather(data.data)
    } catch (error) {
      console.log("=>" + error)
    }
  }

  useEffect(() => {
    fetch()
    weather()
  }, [])

  console.log(weatheria)
  return (
    <div className="App_Container">
      <div className="Weather_Main">
        <div className="Left">
          <Left data={state} condition={bool} />
        </div>
        <div className="Right">
          <div class="Input_Box">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={input}
                onChange={handleinput}
                placeholder="Region"
                class="Region_Input"
              />
              <button class="Button" onClick={() => { fetch(); setbool(false) }} >
                GO
              </button>
            </form>
          </div>
          <div className="Right_Box">
            <Right data={state[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
