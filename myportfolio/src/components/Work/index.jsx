import React from 'react'

export const Work = () => {
    const projects = [
        {
          title: 'Project 1',
          description: 'This is a description for Project 1.',
          image: 'path/to/image1.jpg',
          deployedLink: 'https://project1.com',
          githubLink: 'https://github.com/user/project1',
        },
        {
            title: 'Project 2',
            description: 'This is a description for Project 1.',
            image: 'path/to/image1.jpg',
            deployedLink: 'https://project1.com',
            githubLink: 'https://github.com/user/project1',
          },
          {
            title: 'Project 3',
            description: 'This is a description for Project 1.',
            image: 'path/to/image1.jpg',
            deployedLink: 'https://project1.com',
            githubLink: 'https://github.com/user/project1',
          },
          {
            title: 'Project 4',
            description: 'This is a description for Project 1.',
            image: 'path/to/image1.jpg',
            deployedLink: 'https://project1.com',
            githubLink: 'https://github.com/user/project1',
          },
          {
            title: 'Project 5',
            description: 'This is a description for Project 1.',
            image: 'path/to/image1.jpg',
            deployedLink: 'https://project1.com',
            githubLink: 'https://github.com/user/project1',
          },
          {
            title: 'Project 6',
            description: 'This is a description for Project 1.',
            image: 'path/to/image1.jpg',
            deployedLink: 'https://project1.com',
            githubLink: 'https://github.com/user/project1',
          },
        // Add more projects here
     ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
    {projects.map((project, index) => (
      <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', textAlign: 'center' }}>
        <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto' }} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Deployed Site</a>
        <br />
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    ))}
  </div>
  )
}
