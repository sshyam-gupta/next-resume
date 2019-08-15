import React from 'react'
import ReactGA from 'react-ga'

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
  resumeURL: 'https://sshyam-gupta.netlify.com/static/resume.pdf'
}

class Home extends React.Component{
  componentDidMount() {
    ReactGA.initialize('UA-139689679-2')
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
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
}

export default Home