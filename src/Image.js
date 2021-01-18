import React, { useState , useEffect} from 'react';

function Image({ img, index, active }){

      
    return(
        
       <div
        className={`image ${active === index ? 'active' : null }`} 
         >
            <img src={img} alt="" />
        </div>
       
    )
}

export default Image