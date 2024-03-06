import React from 'react';
import Resume from './components/Resume/resume.pdf';


function Resume() {
 return (
    <div>
      <h2>Resume</h2>
      <iframe src="components/resume/resume.pdf" width="100%" height="500px" style={{border: 'none'}}></iframe>
    </div>
 );
}

export default Resume;