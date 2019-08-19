import ProjectItem from "./ProjectItem";

export default ({ projects }) => (
  <>
    {projects && Array.isArray(projects) && projects.length > 0 ? (
    <div className="skills">
      <h4>Skills</h4>
      <div className="content">
        {projects.map(project => (
          <ProjectItem {...project} />
        ))}
      </div>
    </div>
  ) : null}
  </>
)