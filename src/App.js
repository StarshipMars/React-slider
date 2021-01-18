import React, { useState , useEffect} from 'react';
import './App.css';
import data from './images/images';
import Image from './Image.js';
import Dots from './Dots';



function App() {
  let [datas , setDatas] = useState([]);
  let [activeSlide , setActiveSlide] = useState(0);
  let [translate, setTranslate] = useState(0);
  let [elements, setElements] = useState({
    first: 0,
    last: 0
  })

  useEffect(()=>{
    let start = [data[data.length - 2], data[data.length - 1]]
    let end = [data[0], data[1]]
    let images = [...start, ...data, ...end]
    setDatas(images)

    setActiveSlide(activeSlide + 2)
    setTranslate(translate + 2)

    setElements((prev)=>{
        return {
            first: prev.first + 2,
            last: prev.last + images.length - 3
        }
    })
    
  },[])



  const showNextSlide = ()=>{
    let { last } = elements
   
    if(activeSlide === last){
      checkCurrentIndex(2, 2)
    }
    else{
       let count = activeSlide + 1;
       setActiveSlide(count)
       let move = translate + 1;
       setTranslate(move)
    }
    
  }

  const showPrevSlide = ()=>{
    let { first } = elements

     if(activeSlide === first){
      checkCurrentIndex(datas.length - 3, datas.length - 3)
    }
    else{
       let count = activeSlide - 1;
       setActiveSlide(count)
       let move = translate - 1;
       setTranslate(move)
    }
    
  }

  const checkCurrentIndex = (move, active)=>{
    let moveVal = move;
    let activeVal = active;

      setTranslate(moveVal)
      
      setActiveSlide(activeVal)
    }
    
  

  return (
    
    <div className="App">
      
      <div className='btn-group'>
        <button className='btn' onClick={()=> showNextSlide()}>Next</button>
        <button className='btn' onClick={()=> showPrevSlide()}>Prev</button>
      </div>

      <h1>Slider</h1>

      
           {
             datas.length ? 
                    <>
                        <div className="slider-wrapper" style={{width: `${window.innerWidth}px`, overflow: 'hidden' }}>
                              <figure className="current-slide">

                
                                  <div className='slider'
                                  style={{ transform: `translateX(-${translate*(100/datas.length)}%)`}}                             
                                  >
                                    {
                                        datas.map((data, index) => 
                                        
                                            <Image key={index} img={data} index={index} active={activeSlide}/>
                                                  
                                        )
                                    }
                                  </div>

                              </figure>
                        </div> 
                        <Dots quantity={datas.length} active={activeSlide}/> 
                     </>  
                        
                          :
                             <span>...Loading</span>
                         
           }
    </div>
         
      
  );
}

export default App
