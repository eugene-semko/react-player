import React, { useState } from 'react'
import classNames from 'classnames'
import './Player.css'
export default function Player () {

    const audios = ["./music/1 (1).mp3", 
               "./music/1 (2).mp3",
             "./music/1 (3).mp3",
             "./music/1 (4).mp3"];

    const [currentSong,setCurrentSong] = useState(0);
    const [audio] = useState(new Audio(audios[0]))

    function playSong() {
        audio.src = audios[currentSong]
        audio.play();
    }

    function togglePause() {
        audio.pause()
        console.log('paused')
        toggleButton()
  }
    function togglePlay() {
        audio.src = audios[currentSong]
        if (audio.paused) {
            audio.play()
        }
        toggleButton()
    }

    function nextAudio() {
        setCurrentSong(currentSong + 1)
        if (currentSong > 3) {
            setCurrentSong(0)
        }
        playSong()
    }

    function prevAudio() {
        setCurrentSong(currentSong - 1)
        if (currentSong < 0) {
            setCurrentSong(3)
        }
        playSong()
    }
    const [isControlActive, setIsControlActive] = useState(false)
    const toggleButton = () => setIsControlActive(!isControlActive)
    const imgClass = classNames({
        '':true,
        'controls--active': isControlActive
    })
    return (
        <div>
            <div className = 'control-panel'>
                    <img
                        src = './images/control-folder.png'>
                        
                    </img>
                    <div className = 'controls'>
                        <img 
                            onClick = {prevAudio}
                            src = './images/prev.png'>

                        </img>
                        <img 
                        
                            className = {imgClass}
                            onClick = {togglePause}
                            src = './images/pause.png'>

                        </img>
                        <img 
                        
                            className = {imgClass}
                            onClick = {togglePlay}
                            src = './images/play.png'>

                        </img>
                        <img 
                            onClick = {nextAudio}
                            src = './images/next.png'>

                        </img>
                    </div>
                </div>
        </div>
    )
}