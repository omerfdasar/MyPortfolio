import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I am able to grasp new technologies and concepts quickly to
                develop innovative and creative solutions to problems. <br></br>{" "}
                I am always eager to learn about various technologies, tools,
                and libraries.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="item-img" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="item-img" />
                  <h5>Spring Boot</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="item-img" />
                  <h5>Java</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="item-img" />
                  <h5>JavaScript </h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="item-img" />
                  <h5>APIs</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="item-img" />
                  <h5>SASS </h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="item-img" />
                  <h5>Bootstrap </h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="item-img" />
                  <h5>Tailwind </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="item-img" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="item-img" />
                  <h5>Next.js</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="item-img" />
                  <h5>TypeScript </h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="item-img" />
                  <h5>Git </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="item-img" />
                  <h5>PostgreSQL </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="item-img" />
                  <h5>Jest </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="item-img" />
                  <h5>Cypress </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="item-img" />
                  <h5>AWS </h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="corner" />
    </section>
  );
};

export default Skills;
