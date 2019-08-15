export default (props) => {
  
  return(
    <div className="right">
      <div className="right-inner">
        <div className="introduction">
          <h4>Intro</h4>
          <div className="content">
            <p className="intro-p">Hello! I&#39;m Shyam, a software engineer specialized in building exceptional mobile and web apps that provide intuitive, pixel-perfect user interfaces.</p>
            <p className="intro-p">I enjoy being the bridge between engineering and design, and feel right at home as a front end engineer. I&#39;m experienced in developing and designing products from simple landing pages to full-fledged web apps.</p>
            <span className="intro-p job-pls">Although I'm not currently looking for opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer you!</span>
          </div>
        </div>
        <div className="skills">
          <h4>Skills</h4>
          <div className="content">
            <div className="skill-category">
              <strong>Languages: &nbsp;</strong>
              <span>JavaScript (ES6), Typescript, HTML5, CSS3, Dart</span>
            </div>
            <div className="skill-category">
              <strong>Libraries &amp; Frameworks: &nbsp;</strong>
              <span>React, React Native, Angular, AngularJS, Flutter, jQuery, Bootstrap, Node, Backbone, Cordova, MongoDB, Express</span>
            </div>
            <div className="skill-category">
              <strong>Tools: &nbsp;</strong>
              <span>Git, Postman, inVision, Abstract</span>
            </div>
          </div>
        </div>
        <div className="education">
          <h4>Education</h4>
          <div className="content">
            <div className="university"><a href="http://mu.ac.in" target="_blank">Mumbai University</a></div>
            <div className="college"><a href="http://brharnetc.edu.in/br/" target="_blank">B. R. Harne College of Engineering & Technology</a></div>
            <div className="major"><strong>Major:</strong> Computer Science</div>
            <div className="grad-date">Graduated in: May 2015</div>
          </div>
        </div>
        <div className="experience">
          <h4>Experience</h4>
          <div className="content">
            <div className="exp-item">
              <div className="job">
                <a className="company" href="https://kiprosh.com/" target="_blank">Kiprosh India</a>
                <div className="duration">April 2018 &mdash; Present</div>
              </div>
              <div className="title">Senior Software Engineer</div>
              <ul className="description">
                <li>Developed and maintained code for in-house and client websites primarily using React &amp; React Native.</li>
                <li>Propose and implement design and engineering solutions to ensure optimal and coherent user experiences for kiprosh website & inhouse project</li>
                <li>Engineered and responsible for developing mobile and web apps for curefit &amp; cultgear</li>
              </ul>
            </div>
            <div className="exp-item">
              <div className="job">
                <a className="company" href="https://www.neosofttech.com/" target="_blank">Neosoft Technologies</a>
                <div className="duration">Sept 2015 &mdash; Mar 2018</div>
              </div>
              <div className="title">Software Developer</div>
              <ul className="description">
                <li>Developed and maintained code client websites & mobile apps primarily using BackboneJS, Angular &amp; AngularJS </li>
                <li>Tested code in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</li>
                <li>Clients included Loylty Rewardz, V.A.N.S.O (Interswitch), Dayspring Media and more</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="projects">
          <h4>Projects</h4>
          <div className="content">
            <div className="project-item">
              <a className="project-title" href="url" target="_blank">url</a>
              <p className="project-desc">Portfolio site designed and coded from scratch to showcase my skills and past work</p>
            </div>
          </div>
        </div> */}
        <a className="resume" href={props.resumeURL} target="_blank"><div className="resume-link">Grab a PDF of my full resume</div></a>
      </div>
    </div>
  );
};
