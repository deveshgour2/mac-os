import React from 'react'
import MacWindows from './MacWindows'
import './Spotify.scss'

const Spotify = ({ windowState, windowName, setWindowState }) => {
    return (
        <MacWindows windowState={windowState}
            windowName={windowName}
            setWindowState={setWindowState}>
            <div className="spotify-window">
                <iframe data-testid="embed-iframe" style={{ borderradius: "12px" }} src="https://open.spotify.com/embed/playlist/37i9dQZEVXbMWDif5SCBJq?utm_source=generator&theme=0&si=bc5b718e65504605" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"> </iframe>
            </div>
        </MacWindows>
    )
}

export default Spotify
