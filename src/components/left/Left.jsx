import React from 'react'
import { useState } from 'react'
import "./Left.css"

const Left = ({ data, condition, random, input, weather }) => {
    const src = data[random]?.urls.raw
    const date = weather?.headers?.date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return (
        <div class='Left_Container'>
            {
                condition ?
                    <div class="img_c" style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'})` }}>
                        <div className="info_Box">

                        </div>
                    </div>
                    :
                    <div class="img_c" style={{ backgroundImage: `url(${src})` }} >
                        <div className="info_Box">
                            <div className="Box_One_Info">
                                <span className="Degree">
                                    {weather?.data?.temp}
                                </span>
                            </div>
                            <div className="Box_One_Info">
                                <div className="place">
                                    {input}
                                </div>
                                <div className="Date">
                                    {today}
                                </div>
                            </div>
                            <div className="Box_One_Info">
                                <span className="Icon">

                                </span>
                            </div>
                        </div>
                    </div>
            }

        </div>
    )
}

export default Left