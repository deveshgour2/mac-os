import React from 'react'
import MacWindows from './MacWindows'
import githubData from '../../assets/github.json'
import "./github.scss"

const Github = () => {


  const GitCard = ({ data = { id: 1, image: "", title: "", description: "", tags:[], repoLink: "", demoLink: "" } }) => {

    return <div className="card">
      <img src={data.image} />
      <h1>{data.title}</h1>
      <p className='description'>{data.description}</p>
      <div className="tags">
        {
          data.tags.map(tag => <p className='tag'>{tag}</p>)
        } 
      </div>
        <div className="links">
          <a href={data.repoLink} target='_blank'>Repository</a>
         {data.demoLink && <a href={data.demoLink} target='_blank'>Demo Link</a>}
        </div>
    </div>
    }
  

  return (
    <MacWindows>
      <div className="cards">
        {
          githubData.map(project => {
            return <GitCard data = {project}/>
          })
        }
      </div>
    </MacWindows>
  )
}

export default Github
