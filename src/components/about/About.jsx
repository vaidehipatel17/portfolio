import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://i.postimg.cc/G2JyyLZh/IMG-7901-jpg.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
        In the last couple of weeks I've been really inclined towards programming. Have been watching multiple tutorials, 
        attending bootcamps, after learning from Bootcamps implementing them in making some of my projects.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h3 className="a-award-title">Education</h3>
            <p className="a-award-desc">
              I have completed <strong>Web development</strong> course in CDI college in montreal. <br />
              I have learned react full course from bootcamps. <br />
              Having knowledge of various technologies. <br />  
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
