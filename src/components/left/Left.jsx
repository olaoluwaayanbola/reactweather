import React from 'react'
import { useState } from 'react'
import "./Left.css"

const Left = ({ data, condition }) => {
    const src = data[0]?.urls.raw
    console.log(condition, src)
    return (
        <div class='Left_Container'>
            {
                condition ?
                    <div class="img_c" style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1542553458-79a13aebfda6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'})` }}>
                        <div className="info_Box">
                            <div className="Box_One_Info">
                                <span className="Degree"> </span>
                            </div>
                            <div className="Box_One_Info">
                                <div className="place">

                                </div>
                                <div className="Date">

                                </div>
                            </div>
                            <div className="Box_One_Info">
                                <span className="Icon">
                                    
                                </span>
                            </div>
                        </div>
                    </div>
                    :
                    <div class="img_c" style={{ backgroundImage: `url(${src})` }} >
                        <div className="info_Box">
                            <span>

                            </span>
                        </div>
                    </div>
            }

        </div>
    )
}

export default Left