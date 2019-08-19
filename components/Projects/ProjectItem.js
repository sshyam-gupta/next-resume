export default (props) => (
  <div className="content">
    <div className="project-item">
      <a className="project-title" href={props.url} target="_blank">{props.title}</a>
      <p className="project-desc">{props.desc}</p>
      {/* <p className="project-desc">Portfolio site designed and coded from scratch to showcase my skills and past work</p> */}
    </div>
  </div>
)