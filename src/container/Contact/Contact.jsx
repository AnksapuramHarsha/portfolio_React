/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import PageHeader from "../../components/PageHeader/PageHeader"
import {BsInfoCircleFill} from 'react-icons/bs'
import {Animate} from 'react-simple-animate'


import './Contact.css'
const Contact = () => {
  return (
    <div>
      <div>
        <PageHeader header="Contact"
        icon={<BsInfoCircleFill size={30}/>}
      />
    </div>
    <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type={"text"}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button>Submit</button>
          </div>
        </Animate>
      </div>
      <div className="coninfo">
        <h3>let's get in touch</h3>
        <p>Name: Harshavardhan Reddy</p>
        <p>Contact number: 9912764925</p>
        <p>Gmail:harshavardhanreddy2401@gmail.com</p>
        
        

      </div>
    </div>
  )
}

export default Contact