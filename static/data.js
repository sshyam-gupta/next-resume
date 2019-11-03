export default {
  name: "Hey, I'm Shyam",
  subtext: "Frontend Developer based in Mumbai, India",
  jobStatus: "Senior Software Engineer @ Kiprosh",
  instaURL: "https://www.instagram.com/shyamm06/",
  githubURL: "https://github.com/sshyam-gupta",
  linkedinURL: "https://www.linkedin.com/in/shyam-gupta-66463a62",
  resumeURL: "https://sshyam-gupta.netlify.com/static/resume.pdf",
  skills: [
    {
      title: "Languages: ",
      info: "JavaScript (ES6+), Typescript, HTML5, (S)CSS, Dart"
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
            Write modern, performant, maintainable code for a diverse array of client and internal projects.
          </li>
          <li>
            Helped <strong>cure.fit</strong> in building gear vertical on both web and mobile apps.
          </li>
          <li>
            Worked closely with the team to build an e-commerce platform for <strong>cultgear</strong>, one-stop-shop for all your sportswear needs.
          </li>
          <li>
            Helped solidify a direction for cultgear that spans packaging both web and mobile apps in a single codebase.
          </li>
          <li>
            Interfaced with clients on a daily basis, providing technological expertise.
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
            Work with a variety of different languages, platforms, frameworks such as JavaScript, TypeScript, React, Angular.js, Angular, Ionic, Phonegap, Appcelerator Titanium, Netlify.
          </li>
          <li>
            Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.
          </li>
          <li>
            Engineered and maintained major features of VANSO's customer-facing mobile apps using Backbone, HTML, CSS, Cordova, React Native.
          </li>
          <li>
          Manually tested apps in various mobile devices to ensure cross-platform compatibility and responsiveness.
          </li>
        </ul>
      )
    }
  ],
  projects: [{
    title: "cure.fit",
    url: "cure.fit",
    desc: "cure.fit is a health and fitness powerhouse that takes a holistic approach to physical and mental well being. At cure.fit, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, and medical & lifestyle care hassle-free."
  }, {
    title: "cultgear",
    url: "cultgear.com",
    desc: "cultgear is your one-stop shop for all your sportswear needs. Shop for apparel for running, training and everything that enables your active lifestyle."
  }]
}