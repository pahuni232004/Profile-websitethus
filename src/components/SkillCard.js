import React from 'react'
import "./SkillCardStyle.css";
import { CgCPlusPlus } from "react-icons/cg";
import {DiGit} from "react-icons/di";
import {SiVisualstudiocode, SiReact, SiReactrouter, SiBootstrap, SiFigma, SiInkscape } from "react-icons/si";
import {TbBrandCss3, TbBrandJavascript, TbBrandHtml5} from "react-icons/tb";
import {IoLogoWindows, IoLogoNpm} from "react-icons/io"

import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { FaLinux } from "react-icons/fa6";

import { SiTensorflow } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiScipy } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { SiOpencv } from "react-icons/si";


import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiWebrtc } from "react-icons/si";


export default function SkillCard({id}) {
  return (
    <>
        <div className="skill-container" id = {id}>
          <div className="skill-header">My Skills</div>
          <div className="skill-box">
            <h2>Machine Learning</h2>
            <div className="skillset">
              <abbr title='C++'><SiTensorflow className='techLogo'/></abbr>
              <abbr title='HTML 5'><SiScikitlearn className='techLogo'/></abbr>
              <abbr title='JavaScript'><SiPytorch className='techLogo'/></abbr>
              <abbr title='C++'><SiPandas className='techLogo'/></abbr>
              <abbr title='HTML 5'><SiScipy className='techLogo'/></abbr>
              <abbr title='JavaScript'><SiNumpy className='techLogo'/></abbr>
              <abbr title='C++'><SiKeras className='techLogo'/></abbr>
              <abbr title='C++'><SiOpencv className='techLogo'/></abbr>
            </div>                     
          </div>
          <div className="skill-box">
            <h2>Languages and Frameworks</h2>
            <div className="skillset">
              <abbr title='ReactJS'><CgCPlusPlus className='techLogo'/></abbr>
              <abbr title='CSS 3'><FaPython className='techLogo'/></abbr>
              <abbr title='Git/Github'><TbBrandHtml5 className='techLogo'/></abbr>
              <abbr title='NPM'><TbBrandJavascript className='techLogo'/></abbr>
              <abbr title='Bootstrap'><SiTypescript className='techLogo'/></abbr>
              <abbr title='CSS 3'><FaCss3Alt className='techLogo'/></abbr>
              <abbr title='ReactJS'><SiReact className='techLogo'/></abbr>
              <abbr title='React Router'><SiReactrouter className='techLogo'/></abbr>
              <abbr title='Bootstrap'><SiBootstrap className='techLogo'/></abbr>
              <abbr title='ReactJS'><FaNode className='techLogo'/></abbr>
              <abbr title='React Router'><SiExpress className='techLogo'/></abbr>
              <abbr title='ReactJS'><SiSocketdotio className='techLogo'/></abbr>
              <abbr title='React Router'><SiWebrtc className='techLogo'/></abbr>
              <abbr title='Git/Github'><DiGit className='techLogo'/></abbr>
              <abbr title='Git/Github'><FaGithub className='techLogo'/></abbr>
              
              
            </div>            
          </div>
          <div className="skill-box">
            <h2>Tools & Systems</h2>
            <div className="skillset">
              <abbr title='Visual Studio Code'><SiVisualstudiocode className='techLogo'/></abbr>
              <abbr title='Windows'><IoLogoWindows className='techLogo'/></abbr>
              <abbr title='NPM'><IoLogoNpm className='techLogo'/></abbr>
              <abbr title='Figma'><SiFigma className='techLogo'/></abbr>
              <abbr title='NPM'><SiCanva className='techLogo'/></abbr>
              <abbr title='Bootstrap'><FaLinux className='techLogo'/></abbr>
            </div>            
          </div>
        </div>
    </>

  )
}
