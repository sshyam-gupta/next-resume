export default {
  name: "Hey, I'm Shyam",
  subtext: "JS Developer based in Mumbai, India",
  jobStatus: "Senior Software Engineer @ Kiprosh",
  instaURL: "https://www.instagram.com/shyamm06/",
  githubURL: "https://github.com/sshyam-gupta",
  linkedinURL: "https://www.linkedin.com/in/shyam-gupta-66463a62",
  resumeURL: "https://sshyam-gupta.netlify.com/static/resume.pdf",
  skills: [
    {
      title: "Languages: ",
      info: "JavaScript (ES6), Typescript, HTML5, (S)CSS, Dart"
    },
    {
      title: "Libraries &amp; Frameworks: ",
      info:
        "React, React Native, NextJS, GraphQL, Angular, AngularJS, Flutter, jQuery, Bootstrap, Node, Backbone, Cordova, MongoDB, Express"
    },
    {
      title: "Tools: ",
      info: "Git, Postman, inVision, Abstract, Netlify, Webpack, Firebase"
    }
  ],
  experiences: [
    {
      companyLink: "https://kiprosh.com/",
      companyName: "Kiprosh India",
      companyDuration: "April 2018 &mdash; Present",
      companyDesignation: "Senior Software Engineer",
      description: (
        <ul className="description">
          <li>
            Developed and maintained code for in-house and client websites
            primarily using React &amp; React Native.
          </li>
          <li>
            Propose and implement design and engineering solutions to ensure
            optimal and coherent user experiences for kiprosh website & inhouse
            project
          </li>
          <li>
            Engineered and responsible for developing mobile and web apps for{" "}
            <strong>cure.fit</strong> &amp; <strong>cultgear</strong>
          </li>
        </ul>
      )
    },
    {
      companyLink: "https://www.neosofttech.com/",
      companyName: "Neosoft Technologies",
      companyDuration: "Sept 2015 &mdash; Mar 2018",
      companyDesignation: "Software Engineer",
      description: (
        <ul className="description">
          <li>
            Developed and maintained code client websites & mobile apps
            primarily using BackboneJS, Angular &amp; AngularJS{" "}
          </li>
          <li>
            Tested code in various browsers and mobile devices to ensure
            cross-browser compatibility and responsiveness
          </li>
          <li>
            Clients included <strong>Loylty Rewardz</strong>,{" "}
            <strong>V.A.N.S.O (Interswitch)</strong>,{" "}
            <strong>Dayspring Media</strong> and more
          </li>
        </ul>
      )
    }
  ],
  projects: []
}