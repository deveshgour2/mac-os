import React from 'react'
import "./Dock.scss"


const Dock = () => {
  return (
    <footer className='dock'>
      <div className='icon'>
        <img src="/doc-icons/github-macos-64.svg" alt="" />
      </div>
      <div className='icon'>
        <img src="/doc-icons/note-macos-64.svg" alt="" />
      </div>
      <div className='icon'>
        <img src="/doc-icons/pdf-macos-64.svg" alt="" />
      </div>
      <div className='icon'>
        <img src="/doc-icons/calendar-macos-64.svg" alt="" />
      </div>
      <div className='icon'>
        <img src="/doc-icons/spotify-macos-64.svg" alt="" />
      </div>
      <div className='icon'>
        <img src="/doc-icons/mail-macos-64.svg" alt="" />
      </div>
      <div className='icon'>
        <img src="/doc-icons/link-macos-64.svg" alt="" />
      </div>
      <div className='icon'>
        <img src="/doc-icons/cli-macos-64.svg" alt="" />
      </div>

    </footer>
  )
}

export default Dock
