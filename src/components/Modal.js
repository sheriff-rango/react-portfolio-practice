import React, {useContext} from 'react'
import { StateContext } from "../context/State";

import { Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    FullscreenToggle,
    CurrentTimeDisplay,
    DurationDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton } from 'video-react';


function Modal() {

    const {isModalOpen, closeModal, videoRef} = useContext(StateContext)

    return (
        <div className={`${
            isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay '
          }`}>
            <div className={`modal-container ${
                isModalOpen ? 'show-cursor' : 'hide-cursor'
            }`}>
                
                <div className={`custom-video-container ${
                !isModalOpen ? 'hide-container' : ''
                }`}
                >
                <Player ref={videoRef}>
                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"  />
                    <ControlBar>
                        <ReplayControl disabled />
                        <ForwardControl disabled />
                        <CurrentTimeDisplay disabled />
                        <TimeDivider disabled />
                        <PlaybackRateMenuButton disabled />
                        <VolumeMenuButton disabled />
                        <FullscreenToggle disabled />
                        <DurationDisplay disabled />
                    </ControlBar>
                    
                </Player>
                {/* <VideoProgress
                    progressStart="BottomLeft"
                    type="BottomLine"
                    pathColor="white"
                    pathWidth="3px"
                    pathBorderRadius="2px"
                    src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                    // controls
                    onClick={playOrPause}
                    ref={videoRef}
                /> */}
                </div>
               
                
                <button onClick={closeModal}
                    className={`close-modal-btn ${
                        isModalOpen ? 'show-cursor' : 'hide-cursor'
                    }`}
                >
                   &#x2715;
                </button>
            </div>
        </div>
    )
}

export default Modal
