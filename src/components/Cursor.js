import React, {useContext, useState, useEffect} from "react";
import useMousePosition from "../hooks/useMousePosition";
import { StateContext } from "../context/State";

const Cursor = () => {
 
  const { clientX, clientY } = useMousePosition();
  const {cursor} = useContext(StateContext);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.body.removeEventListener("mouseenter",   handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
    
  return (
    <>
      <div className= "cursor-main-container"
        style={{
          opacity: cursor.active ? 0 : 1,
          transition: "all 0.5s ease-out",
        }}
      >
        <div className="cursor-main"
          style={{
            left: clientX,
            top: clientY,
            transform: `translate(-50%, -50%)`,
            opacity: isVisible ? 1 : 0
          }}
        >
            <span>play reel</span>
            <img 
              src={process.env.PUBLIC_URL + `/images/red-flower.svg`}
              alt="cursor-flower"
            />
        </div>
      </div>

      <div className="cursor-secondary-container" 
        style={{ 
          opacity: cursor.active ? 1 : 0,
          transition: "all 0.5s ease-out",
        }}
      >
        <div className="cursor-secondary"
            style={{
              position: 'absolute',
              left: clientX,
              top: clientY,
              transform: `translate(-50%, -50%)`,
              opacity: isVisible ? 1 : 0
          }}
        >
          <img 
              src={process.env.PUBLIC_URL + `/images/red-flower.svg`} alt="cursor-flower"
          />
        </div>
      </div>
    </>
  );
};

export default Cursor