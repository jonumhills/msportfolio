import { Container, Row, Col } from "react-bootstrap";
import { ReactTyped } from "react-typed";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import mspManoj from '../assets/MSP-Manoj.jpeg';
export const Banner = () => {

  const portfolio1 = "TECHIE"
  const portfolio2 = "PHOTOGRAPHER"



  return (
    <section className="banner" id="home">
      <Container style={{ backgroundColor: '#00181a', backgroundImage: `url('https://www.transparenttextures.com/patterns/escheresque.png')`}}>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h2>{`Hi! I'm Manoj Srinivasa`} <br/> <ReactTyped
      strings={[
        portfolio1,
        portfolio2,
      ]}
      typeSpeed={80}
      backSpeed={100}
      loop
    >
    </ReactTyped></h2>
                  <p>Hello! I'm a graduate student from George Washington University with a passion for backend engineering and system design. With three years of practical experience in backend engineering, 
          I'm eager to venture into freelancing in this domain. My expertise lies in crafting microservices, and I'm proficient in both AWS and Azure cloud environments. 
          <br className="hidden lg:inline-block" />
Beyond coding, I am also passionate about photography. 
I started my journey with a Canon 1300D and have since expanded my skills to capture moments using an iPhone and Sony Alpha. 
A proficient Lightroom editor, I love playing with lights to enhance the visual narrative in my photographs.
<br className="hidden lg:inline-block" />
Freelancing isn't just a career choice for me; it's a way to merge my passions and share them with the world. 
Whether it's designing robust systems or capturing captivating images, I'm eager to collaborate and bring ideas to life. 
If you're in need of a skilled backend engineer or seeking to immortalize moments through photography, 
feel free to reach out—I'd love to connect and discuss how we can bring your vision to fruition.
<br className="hidden lg:inline-block" />
Let's create something extraordinary together!</p>
                
              </div>}
              
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={mspManoj} alt="Header Img"/>
                </div>}
            </TrackVisibility>

          </Col>
        </Row>
      </Container>
    </section>
  )
}