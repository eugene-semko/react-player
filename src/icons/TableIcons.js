import React, { useState } from 'react'
import classNames from 'classnames'
import './TableIcons.css'
import Player from './../player/Player'
import { CSSTransition } from 'react-transition-group';


export default function TableIcons () {
    const [isBottomIconCasseteActive, setIsBottomIconCasseteActive] = useState(false)
    

    const [isRollUpActive, setIsRollUpActive] = useState(false)
    const toggleRollUp = () => {
        setIsBottomIconCasseteActive(!isBottomIconCasseteActive)
    }
    const [isDoubleClick, setIsDoubleClick] = useState(false)

    const toggleDoubleClick = () => {
        if (isDoubleClick) {
            setIsBottomIconCasseteActive(!isBottomIconCasseteActive)
            setIsRollUpActive(true)
            setIsDoubleClick(false)
        } 
        else setIsDoubleClick(true)
    }
    const toggleMiniCasseteIcon = () => {
        setIsBottomIconCasseteActive(!isBottomIconCasseteActive)
        setIsRollUpActive(true)
    }
    const miniIconCasseteClass =  classNames({
        'mini-cassete-icon':true,
        'mini-cassete-icon--active': isRollUpActive 
    })
    const playerWrapperClass = classNames ({
        'player-wrapper': true,
        'player-wrapper--active': isBottomIconCasseteActive
    })
    const casseteIconClass = classNames ({
        'icon-cassete':true,
        'icon-cassete--active': isDoubleClick
    })
    return (
        <div>
            <div className = 'icons-wrapper'>
                <img 
                    onClick = {toggleDoubleClick} 
                    className = {casseteIconClass} 
                    src = './images/icon-cassete.png'
                />
                <div className = 'bottom-icons'>
                    <img 
                        onClick = {toggleMiniCasseteIcon}
                        className = {miniIconCasseteClass}
                        src = './images/mini-icon-cassete.png'>
                    </img>
                </div>
            </div>
                    <div className = {playerWrapperClass}>
                        <img 
                            src = './images/player-main.png'>
                        </img>
                        <img 
                            onClick = {toggleRollUp} 
                            className = 'roll-up-button'
                            src = './images/roll-up-button.png'>

                        </img>
                        <Player />
                    </div>
        </div>
    )
}