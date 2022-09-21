import React from 'react'
import "./Right.css"

const Right = ({ data }) => {
  let sunrise = new Date(data?.sunrise * 1000)
  let sunset = new Date(data?.sunset * 1000)
  let hour = sunrise.getUTCHours();
  let minutes = sunrise.getUTCMinutes();
  let Seconds = sunrise.getUTCSeconds();

  let houru = sunset.getUTCHours();
  let minutesu = sunset.getUTCMinutes();
  let Secondsu = sunset.getUTCSeconds();


  return (
    <div className='Right_Conatainer'>
      <div className="Box_One">
        <div className="sun">
          <h4>
            Sun Rise
            <span className='time'>
              {hour + "-" + minutes + "-" + Seconds} am
            </span>
          </h4>
          <span>
            <img src="https://www.pngmart.com/files/22/Sunset-PNG-Pic.png" alt="" />
          </span>
        </div>
        <div className="sun">
          <h4>
            Sun Set
            <span className="time">
              {houru + "-" + minutesu + "-" + Secondsu} pm
            </span>
          </h4>

          <span>
            <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1723310/sunrise-clipart-md.png" alt="" />
          </span>
        </div>
      </div>
      <div className="Box_Two">
        <header>
          Weather Details
        </header>
        <div className="info_weather">
          <div className="info_data">
            <h4>
              Temperature
            </h4>
            <span>
              {data?.temp}°C
            </span>
          </div>
          <div className="info_data">
            <h4>
              Cloudy
            </h4>
            <span>
              {data?.cloud_pct}%
            </span>
          </div>
          <div className="info_data">
            <h4>
              Humidity
            </h4>
            <span>
              {data?.humidity}%
            </span>
          </div>
          <div className="info_data">
            <h4>
              Wind
            </h4>
            <span>
              {data?.wind_speed} km/hr
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Right