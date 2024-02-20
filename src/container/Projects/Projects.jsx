// import React from 'react'
import PageHeader from "../../components/PageHeader/PageHeader"
import {BsInfoCircleFill} from 'react-icons/bs'
import './Projects.css';

const Project=[
  {
    title: "Weapon Detection using Artificial Intelligence and Deep Learning for Security Applications",
    Description:"Surveillance systems do not give a rapid response to deal with suspicious activities such as firing a gun in public places. Consequently, there is a need for technology that can recognize criminal activities from Closed Circuit Televisions (CCTV) footage without the need of human help. So we developed a model using CNN network, it acts in such away that when weapon is detected it is sourrounded with red coloured bounded box and its make easy to police to identify the criminal."
  },
  {
    title:"Big Mart Sales Prediction using Machine Learning Algorithm",
    Description:"Nowadays shopping malls and Big Marts keep the track of their sales data of each and every individual item for predicting future demand of the customer and update the inventory management as well. These data stores basically contain a large number of customer data and individual item attributes in a data warehouse. The resultant data can be used for predicting future sales volume with the help of different machine learning techniques for the retailers like Big Mart."

  },
  {
    title: "Front-end Projects",
    Description: "Designed Tic-tac-toe game; Paper,Rock,Scissor game ; Image Slider; PageLoader; Themes; Accordian and ApiFetchRandomCodeGenerators " 
  }
]

const Projects = () => {
  return (
    <div>
      <div>
        <PageHeader header="Projects"
        icon={<BsInfoCircleFill size={30}/>}
      />
      </div>
      <div className="wrapper">{

        Project.map((individualProject,i)=>(
          <div className="parent" key={i}>

            <div className="title" key={i}>{individualProject.title}</div>
            <div className="description" key={i}>{individualProject.Description}</div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Projects