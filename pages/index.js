import React from 'react'

import Styles from './styles';
import Head from './Head'
import Left from '../components/Left';
import Right from '../components/Right';

var DATA = {
  name: "Hey, I'm Shyam",
  subtext: "Frontend Developer based in Mumbai, India",
  jobStatus: "Senior Software Engineer @ Kiprosh",
  instaURL: 'https://www.instagram.com/shyamm06/',
  githubURL: 'https://github.com/sshyam-gupta',
  linkedinURL: 'https://www.linkedin.com/in/shyam-gupta-66463a62',
  resumeURL: 'https://sshyam-gupta.github.io/resume.pdf'
}

function Home (){
    return (
      <>
        <Styles />
        <Head />
        <div className="app">
              <Left
                name={DATA.name}
                subtext={DATA.subtext}
                jobStatus={DATA.jobStatus}
                instaURL={DATA.instaURL}
                githubURL={DATA.githubURL}
                linkedinURL={DATA.linkedinURL}
              />
              <Right
                intro={DATA.intro}
                resumeURL={DATA.resumeURL}
              />
            </div>
      </>
    )
}

export default Home