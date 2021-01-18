import React, { useState } from 'react';

function Dots({ quantity, active }){

   return(
      <div className='dots'>
         {
             Array(quantity).fill(1).map((elem, index)=>{

               return <label key={elem + index} 
                       className={`dot ${ (active >= 2 && active === index) || (active <= quantity - 3 && active === index) 
                                        ? 'active-dot' : '' } 
                                        ${index <= 1 || index >= quantity - 2
                                        ? 'hidden' : ''
                                        }`}
                       >

                     </label>

             })
         }
      </div>
   )
}

export default Dots