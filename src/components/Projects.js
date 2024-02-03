import { Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./Projectcard";
import projImg1 from "../assets/MSP2.JPG";
import projImg2 from "../assets/MSP1.JPG";
import cryptoAnalysisProj from "../assets/CryptoAnalysis.PNG";
import ocrProject from "../assets/OCRProject.png";
import flowerdexProj from "../assets/FlowerdexProj.png"
import { BsInstagram, BsGithub } from "react-icons/bs";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { PhotoAlbum } from "react-photo-album";

export const Projects = () => {

  // const RenderPhoto = ({ layout, layoutOptions, imageProps: { alt, style, ...restImageProps } }) => (
  //   <div

  //   >
  //     <img alt={alt} style={{ ...style, width: "100%", padding: 0 }} {...restImageProps} />
  //   </div>
  // );
  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
  const photography = [
    { src: projImg1 , width: 1080, height: 800 },
    { src: projImg2, width: 800, height: 800 },
    { src: projImg1, width: 500, height: 800 },
    { src: projImg2, width: 1080, height: 800 },
    { src: projImg1 , width: 1080, height: 800},
    { src: projImg2, width: 300, height: 800 },
    { src: projImg1, width: 1080, height: 800 },
    { src: projImg2, width: 1080, height: 800 },
    { src: projImg1 , width: 1080, height: 800},
    { src: projImg2, width: 900, height: 800 },
    { src: projImg1, width: 1080, height: 800 },
    { src: projImg2, width: 1080, height: 800 },
  ];
  const photos = photography.map((photo) => ({
    src: photo.src,
    width: photo.width,
    height: photo.height,
    srcSet: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: photo.src,
        width: breakpoint,
        height,
      };
    }),
  }));
  

  const projects = [
    {
      title: "CryptoAnalysis",
      description: "Design & Development",
      imgUrl: cryptoAnalysisProj,
      githubUrl: "https://github.com/jonumhills/cryptoAnalysis"
    },
    {
      title: "OCR Deatils Recognition",
      description: "Design & Development",
      imgUrl: ocrProject,
      githubUrl: "https://github.com/jonumhills/OCR_Card_Details"
    },
    {
      title: "FlowerDex",
      description: "Design & Development",
      imgUrl: flowerdexProj,
      githubUrl: "https://github.com/jonumhills/FlowerDex"
    }
  ];



  return (
    <section className="photography" id="photography">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="photography-bx wow zoomIn">
    <section className="project" id="projects">
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div >
                <Tab.Container id="projects-tabs" defaultActiveKey="Projects">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="Projects">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Photography">Photography</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="Photography">
                      <Row>
                        <PhotoAlbum layout="columns"  photos={photos} />
                         {/* renderPhoto={RenderPhoto} */}
                        <h3>More at <a href="https://www.instagram.com/_manoj.photos/" target="_blank" rel="noopener noreferrer"> <BsInstagram /></a></h3>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="Projects">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        <h3>More at <a href="https://github.com/jonumhills" target="_blank" rel="noopener noreferrer"> <BsGithub /></a></h3>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
    </section>
    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

