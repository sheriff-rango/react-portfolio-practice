import React, {useState, useRef} from 'react'

// creating `context`
const StateContext = React.createContext()

function StateProvider({children}){
    // Set the cursor state
    const [cursor, setCursor] = useState({ active: false });

    // Set the open/close state of the modal
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Hold the reference of the video
    const videoRef = useRef(null)

    // Handle the openModal function
    function openModal(){
        setIsModalOpen(true)
        videoRef.current.play();
    }

    // Handle the closeModal function
    function closeModal(){
        videoRef.current.pause()
        videoRef.current.currentTime=0
        setIsModalOpen(false)
    }

    function playOrPause(){
        if (videoRef.current.paused){
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }
    
    return(
        <StateContext.Provider value={{
            cursor, 
            setCursor, 
            isModalOpen, 
            openModal, 
            closeModal,
            videoRef,
            playOrPause
        }}>
            {children}
        </StateContext.Provider>
    )
}

export {StateContext, StateProvider}