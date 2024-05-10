import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from "./components/ProjectCard";
import AboutMe from "./components/AboutMe";
import SkillCard from "./components/SkillCard";
import ContactForm from "./components/ContactForm";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: "#ffffff",
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "#F94892",
        }}
      />
      <div>
        <Navbar />
        <HomeBanner id="home" />
        <ProjectCard
          id="project"
          className="odd"
          projectTitle="PCOS Classifier: A Deep Learning Approach for Detection"
          projectDesc="This model utilizes transfer learning with a pre-trained base model, followed by global average pooling and multiple dense layers with batch normalization and dropout for accurate classification of Polycystic Ovary Syndrome (PCOS)."
          projectLink="https://colab.research.google.com/drive/1zwZuUZtx1l_9RSAAtU9F6nlb6c_7mv0G?usp=sharing"
          deployedProjectLink="https://colab.research.google.com/drive/1zwZuUZtx1l_9RSAAtU9F6nlb6c_7mv0G?usp=sharing"
          projectImg={require("./images/Screenshot 2024-05-06 033954.png")}
        />

        <ProjectCard
          projectTitle="Linear Regression Model for Predicting Health Insurance Charges"
          projectDesc="Utilizing demographic and regional data, this model predicts health insurance charges, achieving a train-test split of 80-20 and employing feature scaling for improved performance."
          projectLink="https://github.com/pahuni232004/Insurance-predictor"
          deployedProjectLink="https://colab.research.google.com/github/pahuni232004/Insurance-predictor/blob/main/Linear_regression.ipynb"
          projectImg={require("./images/Screenshot 2024-05-06 032345.png")}
        />

        <ProjectCard
          className="odd"
          projectTitle="Flone: ecommerce-fashion-store"
          projectDesc="Flone: Your destination for trendy fashion, home decor, and lifestyle essentials."
          projectLink="https://github.com/pahuni232004/ecommerce-fashion-store"
          deployedProjectLink="https://github.com/pahuni232004/ecommerce-fashion-store"
          projectImg={require("./images/307235090-44354ea9-da9b-44cb-9970-e00c41cd98f3.png")}
        />
        <AboutMe id="about" />
        <SkillCard id="skills" />
        <ContactForm id="contact" />
      </div>
    </>
  );
}

export default App;
