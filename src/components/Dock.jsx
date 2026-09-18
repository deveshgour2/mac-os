import React from 'react'
import "./Dock.scss"


const Dock = ({ windowState, setWindowState }) => {
  return (
    <footer className='dock'>
      
      <div
        onClick={() => { setWindowState(state => ({ ...state, github: true })) }}
        className='icon github'>
        <img src="/doc-icons/github-macos-64.svg" alt="" />
      </div>
      
      <div
        onClick={() => { setWindowState(state => ({ ...state, notes: true })) }}
        className='icon'>
        <img src="/doc-icons/note-macos-64.svg" alt="" />
      </div>
      
      <div 
       onClick={() => { setWindowState(state => ({ ...state, resume: true })) }}
      className='icon'>
        <img src="/doc-icons/pdf-macos-64.svg" alt="" />
      </div>

      <div 
       onClick={()=>{window.open("https://calendar.google.com/calendar/u/0/r?pli=1", "_blank")}}
      className='icon'>
        <img src="/doc-icons/calendar-macos-64.svg" alt="" />
      </div>
      
      <div 
       onClick={() => { setWindowState(state => ({ ...state, spotify: true })) }}
      className='icon'>
        <img src="/doc-icons/spotify-macos-64.svg" alt="" />
      </div>
      
      <div 
      onClick={()=>{window.open("mailto:devesh@gmail.com", "_blank")}}
      className='icon'>
        <img src="/doc-icons/mail-macos-64.svg" alt="" />
      </div>
      
      <div 
      onClick={()=>{window.open('https://www.linkedin.com/in/devesh-gour-05b464291?utm_source=share_via&utm_content=profile&utm_medium=member_android ', '_blank')}}
      className='icon'>
        <img src="/doc-icons/link-macos-64.svg" alt="" />
      </div>
      
      <div 
       onClick={() => { setWindowState(state => ({ ...state, cli: true })) }}
      className='icon'>
        <img src="/doc-icons/cli-macos-64.svg" alt="" />
      </div>

    </footer>
  )
}

export default Dock
