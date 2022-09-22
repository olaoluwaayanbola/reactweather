import pop from "../../img/pop.png"
import pop2 from "../../img/pop2.png"
import "./Left.css";

const Left = ({ data, condition, random, input, weather }) => {
    const src = data[random]?.urls.raw

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = mm + '-' + dd + '-' + yyyy;
    return (
        <div class='Left_Container'>
            {
                condition ?
                    <div class="img_c" >
                        <div className="un-render" style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'})` }}>

                        </div>
                    </div>
                    :
                    <div class="img_c" style={{ backgroundImage: `url(${src})` }} >
                        <div className="info_Box">
                            <div className="Box_One_Info">
                                <span className="Degree">
                                    <h3>
                                        {weather?.data?.temp}

                                    </h3>
                                    <span className='degreesym'>°</span>
                                </span>
                            </div>
                            <div className="Box_One_Info">
                                <div className="place">
                                    {input.toUpperCase()}
                                </div>
                                <div className="Date">
                                    {today}
                                </div>
                            </div>
                            <div className="Box_One_Info">
                                <span className="Icon">
                                    {
                                        weather?.data?.cloud_pct < 50 ?
                                            <img
                                                src={pop}
                                                alt="icon-weather"
                                            /> :
                                            <img className="cloudy"
                                                src={pop2}
                                                style={{ width: "200px", height: "100px", marginLeft: "-50px" }}
                                                alt="icon-weather" />
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
            }

        </div>
    )
}

export default Left