import React from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"
const MacWindows = ({ children, windowState, windowName, setWindowState }) => {
    return (
        <Rnd default={{
            width: "45vw",
            height: "60vh",
            x: 100,
            y: 100
        }}>
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div
                            onClick={() => { setWindowState(state => ({ ...state, [windowName]: false })) }}
                            className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="title"><p>deveshgour - {windowName}</p></div>
                </div>
                <div className="main">{children}</div>
            </div>
        </Rnd>
    )
}

export default MacWindows
