import React, { useState } from 'react'
import './App.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/Windows/Github'
import Notes from './components/Windows/Notes'
import Resume from './components/Windows/Resume'
import Spotify from './components/Windows/Spotify'
import Cli from './components/Windows/Cli'


const App = () => {

  const [windowState, setWindowState] = useState({
    github: false,
    notes: false,
    resume: false,
    spotify: false,
    cli: false
  })

  return (
    <>
      <main>
        <Nav />
        <Dock  windowState={windowState} setWindowState={setWindowState}/>
        {windowState.github && <Github windowName="github" windowState={windowState} setWindowState={setWindowState} />}
        {windowState.notes && <Notes windowName="notes" windowState={windowState} setWindowState={setWindowState} />}
        {windowState.resume && <Resume windowName='resume' windowState={windowState} setWindowState={setWindowState} />}
        {windowState.spotify && <Spotify windowName='spotify' windowState={windowState} setWindowState={setWindowState} />}
        {windowState.cli && <Cli windowName='cli' windowState={windowState} setWindowState={setWindowState} />}
      </main>
    </>
  )
}

export default App
