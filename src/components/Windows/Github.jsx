import React from 'react'
import MacWindows from './MacWindows'
import githubData from '../../assets/github.json'
import "./github.scss"

const Github = ({ windowState, windowName, setWindowState }) => {

  const GitCard = ({
    data = {
      id: 1,
      image: "",
      title: "",
      description: "",
      tags: [],
      repoLink: "",
      demoLink: ""
    }
  }) => {

    return (
      <div className="card">
        <img src={data.image} alt={data.title} />

        <h1>{data.title}</h1>

        <p className="description">
          {data.description}
        </p>

        <div className="tags">
          {data.tags.map((tag, index) => (
            <p className="tag" key={index}>
              {tag}
            </p>
          ))}
        </div>

        <div className="links">
          <a href={data.repoLink} target="_blank" rel="noreferrer">
            Repository
          </a>

          {data.demoLink && (
            <a href={data.demoLink} target="_blank" rel="noreferrer">
              Demo Link
            </a>
          )}
        </div>
      </div>
    )
  }

  return (
    <MacWindows
      windowState={windowState}
      windowName={windowName}
      setWindowState={setWindowState}
    >
      <div className="cards">
        {githubData.map(project => (
          <GitCard
            key={project.id}
            data={project}
          />
        ))}
      </div>
    </MacWindows>
  )
}

export default Github