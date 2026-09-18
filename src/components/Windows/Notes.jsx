import React, { useEffect, useState } from 'react'
import MacWindows from './MacWindows'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './Notes.scss'

const Notes = ({ windowState, windowName, setWindowState }) => {
    const [markdown, setMarkdown] = useState(null)

    useEffect(() => {
        fetch('/note.txt')
            .then(res => res.text())
            .then(text => setMarkdown(text))
    }, [])

    return (
        <MacWindows  windowState={windowState}
      windowName={windowName}
      setWindowState={setWindowState}>
            <div className="note-window">
                {markdown ? <SyntaxHighlighter language="javascript" style={atelierDuneDark}>
                    {markdown}
                </SyntaxHighlighter> : <p>Loading...</p>}
            </div>
        </MacWindows>
    )
}

export default Notes
