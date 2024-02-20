// import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeader from '../../components/PageHeader/PageHeader';
import './About.css';
import {Animate} from 'react-simple-animate';


const aboutSummary="Enthusiastic and dedicated Computer Science graduate with solid foundation in Java programming, Front-end Web Development and Problem-Solving skills. Eager to leverage academic achievements and hands on projects to contibute effectively. Posses excellent problem-solving skills and a passion for continuous learning in the ever-evolving field of technology."

const details=[
  {
    label : "Full Name",
    value : "Harshavardhan Reddy Anksapuram"
  },
  {
    label: "Age",
    value: 24
  },
  {
    label: "Gender",
    value: "Male"
  },
  {
    label: "Languages known",
    value: "English, Telugu"
  },
  {
    label: "Address",
    value: "H.no:1-114/5, Ankapur, pincode:503224"
  }
]


const About = () => {
  return (
    <div>
      <PageHeader header="About me"
      icon={<BsInfoCircleFill size={30}/>}
      />
      <Animate 
      play
      duration={2}
      delay={0.5}
      start={
        {
          transform:'translateY(0px)'
         
        }
      }
      end={{
        transform:'translateX(100px)',
        
      }}
      >

      <div className="about_content">
        <h3>Front End Developer</h3>
        <p>{aboutSummary}</p>
      </div>
      </Animate>
      <Animate
      play
      duration={2}
      delay={1}
      start={{
        transform:"translateY(300px)"
      }}
      end={{
        transform:"translateY(100px)"
      }}
      >

      <div className='details'>
        <ul>{
          details.map((item,i)=>(
            <li key={i}>

              <span>{item.label}:</span><span>{item.value}</span>
            </li>
          ))
          }
        </ul>
      </div>
      </Animate>
    </div>
  )
}

export default About;