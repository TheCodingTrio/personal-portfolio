import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, projectURL }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <a href={projectURL} style={{ color: "white" }}>
            <span>View Project</span>
          </a>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
