import React from 'react'

export const Work = () => {
    const projects = [
        {
          title: 'Team-Profile-Generator',
          description: 'This application provide you to create a Team.',
          image: 'src/assets/image-1.png',
          deployedLink: 'https://yildizsrcn.github.io/Team-Profile-Generator/',
          githubLink: 'https://github.com/yildizsrcn/Team-Profile-Generator',
        },
        {
            title: 'Read-Me Generator',
            description: 'This application provide you to create a professional README.md file.',
            image: 'src/assets/image-2.png',
            deployedLink: 'https://yildizsrcn.github.io/ReadMe-Generator/',
            githubLink: 'https://github.com/yildizsrcn/ReadMe-Generator',
          },
          {
            title: 'Weather Dashboard',
            description: 'This website provides current weather including 5 days weather forecast.',
            image: 'src/assets/image-3.png',
            deployedLink: 'https://yildizsrcn.github.io/Weather-Dashboard/',
            githubLink: 'https://github.com/yildizsrcn/Weather-Dashboard',
          },
          {
            title: 'Quiz Test',
            description: 'This website consists of 3 questions to measure your general knowledge within a certain period of time and gives you a score at the end.',
            image: 'src/assets/image-4.png',
            deployedLink: 'https://yildizsrcn.github.io/YSY-Quiz/',
            githubLink: 'https://github.com/yildizsrcn/YSY-Quiz',
          },
          {
            title: 'Work Day Scheduler',
            description: 'You can use this website to schedule your day.',
            image: 'src/assets/image-5.png',
            deployedLink: 'https://yildizsrcn.github.io/Work-Day-Scheduler/',
            githubLink: 'https://github.com/yildizsrcn/Work-Day-Scheduler',
          },
          {
            title: 'Password Generator',
            description: 'Password generator application generates a random password with specific criteria.',
            image: 'src/assets/image-6.png',
            deployedLink: 'https://yildizsrcn.github.io/PasswordGenerator/',
            githubLink: 'https://github.com/yildizsrcn/PasswordGenerator',
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
