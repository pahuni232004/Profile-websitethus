import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/pahuDP.png";

export default function AboutMe({ id }) {
  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text">
        <h3>Hey there,</h3>I am <span>Pahuni Choudhari</span>. I am a Machine
        learning enthusiast seeking and implementing my skills of python and
        algorithms to build varied kinds of useful machine learning models.
        Along with machine learning i posses deep interest in DSA and web
        development. However ML is my shield to survive in this ever evolving
        world of technology. I started freelancing and dealing with clients at
        an stage in career which helped me step up my tech startup -{" "}
        <span>ETWOT</span> (Evolutionizing the world of technology).{" "}
        <a
          className="resume"
          href="https://etwot.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          etwot.com 
        </a>
         , is a tech service provider , from web development to content
        creation we cater all technical services. Apart from technical skills I
        am a <span>published poet</span>, having two published anthologies to my credit, ”Dive
        into serenity” and “Dive into Ataraxia”.
        <br />
        <br />
        I am also a member of <span>ICF</span>( Indian copyeditors forum), these connections
        expand my horizon of learning and showcasing my talent. I yearn to be a
        person that is well equipped with professional skills and well groomed
        in hobbies. I am on a journey to constantly become a better
        version of myself.
        <br />
        Feel free to{" "}
        <a
          className="resume"
          href="https://drive.google.com/file/d/1q-swavWGrwth9ZMKo95Ki-k76USAvAFD/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          explore my resume.
        </a>
      </div>
      <div className="profile-photo">
        <div className="heading"> About Me</div>
        <img className="img" src={myProfile} alt="Profile"></img>
      </div>
      <div className="name">P A H U N I</div>
    </div>
  );
}
