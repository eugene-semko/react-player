import React, { useState } from 'react'
import './Background.css'
import TableIcons from './../icons/TableIcons'
import classNames from 'classnames'
export default function Background (){

    const [imgSrc, setImgSrc] = useState('./images/001.gif')
    const [isImgActive,setIsImgActive] = useState(false)

    setTimeout(() => {
        setImgSrc('')
    }, 5000)
    setTimeout(() => {
        setIsImgActive(true)
    }, 5000)
    const compClass = classNames ({
        'comp':true,
        'comp--active': isImgActive
    })
    return (
        <div>
            <div className = 'computer-wrapper'>
                <img 
                    src = './images/table.png'>

                </img>
                <img className = {compClass}
                    src = './images/comp-rest.png'
                ></img>
            </div>
            <div className = 'content-wrapper'>
                <img src = {imgSrc} className = 'loading'></img>
                <img className = 'bottom-panel' src = './images/bottom-panel.png'></img>
                  <TableIcons />
            </div>
        </div>
    )
}