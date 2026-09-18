import React from 'react'
import MacWindows from './MacWindows'
import './resume.scss'

const Resume = ({ windowState, windowName, setWindowState }) => {
    return (
        <MacWindows windowState={windowState}
            windowName={windowName}
            setWindowState={setWindowState}>
            <div className="resume-window">
                <embed src="/resume.pdf" type="" />
            </div>
        </MacWindows>
    )
}

export default Resume
