import { useEffect, useRef, useState } from "react";


const Carousel = ( props ) => {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null)

  function prevElement() {
    if (index === 0) setIndex(props.elementList.length - 1)
    else setIndex(index - 1)
  }

  function nextElement() {
    // if (index === props.elementList.length - 1) return setIndex(0)
    // else setIndex(index + 1) 

    setIndex((currentIndex) => {
      if (currentIndex === props.elementList.length - 1) return 0
      else return currentIndex + 1
    })
  }

  useEffect(() => {
    intervalRef.current = setInterval(nextElement, 30000)

    return () => {
      clearInterval(intervalRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div 
        className="carousel" 
        onMouseEnter={() => clearInterval(intervalRef.current)}
        onMouseLeave={() => { intervalRef.current = setInterval(nextElement, 30000) }}
      >
        {/* <img src={props.elementList[index]} alt="Thumbail" className="carousel-image" /> */}
        {/* <video width="100%" height = "100%" className="carousel-video" muted autoPlay playsInline>
          <source src={props.elementList[index]} type="video/mp4"/>
        </video> */}

        {
          props.elementList.map((element, i) => (
            <video
              width="100%" 
              height = "100%" 
              className="carousel-video" 
              key={i} 
              style={{translate: `${-100 * index}%`}} 
              muted
              autoPlay
              playsInline
              onEnded={nextElement}
            >
              <source src={element} type="video/mp4"/>
            </video>
          ))
        }
        <button className="left-button" onClick={prevElement}> </button>
        <button className="right-button" onClick={nextElement}> </button>
      </div>
    </div>
  )
}

export default Carousel;