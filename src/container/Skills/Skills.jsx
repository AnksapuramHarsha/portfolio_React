// import React from 'react'
import PageHeader from "../../components/PageHeader/PageHeader"
import {BsInfoCircleFill} from 'react-icons/bs'
import {Animate} from 'react-simple-animate'

import './Skills.css';


const skillsData = [
  {
    label: "FRONT END",
    data: [
      {
        skillName: "HTML",
        percentage: "90",
      },
      {
        skillName: "CSS",
        percentage: "50",
      },
      {
        skillName: "JAVASCRIPT",
        percentage: "80",
      },
      {
        skillName: "REACT JS",
        percentage: "80"
      }
    ],
  },
  {
    label: "BACK END",
    data: [
      {
        skillName: "JAVA",
        percentage: "70",
      },
      {
        skillName: "PYTHON",
        percentage: "65",
      },
      
    ],
  },
  {
    label: "DATABASES",
    data: [
      {
        skillName: "SQL",
        percentage: "70",
      },
      {
        skillName: "MONGO DB",
        percentage: "65",
      },
      
    ],
  },
];


const Skills = () => {
  return (
    <section id="skills" className="skills">
    <PageHeader
      header="My Skills"
      icon={<BsInfoCircleFill size={40} />}
    />
    <Animate
    play
    duration={1.5}
    delay={1}
    start={{
      transform:"translateY(300px)"
    }}
    end={{
      transform:"translateY(0px)"
    }}
    >

    <div className="Wrapper">{
      skillsData.map((item,i)=>(
        <div key={i}>

          <div className="label_headings">{item.label}</div>
          <div className="individual_skills">
            {item.data.map((skillItem,j)=>(
              <p key={j}>{skillItem.skillName}</p>
            ))}
          </div>
        </div>
      ))
      }
    </div>
    </Animate>
    
  </section>
  )
}

export default Skills