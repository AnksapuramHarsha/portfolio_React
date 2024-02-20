// import React from 'react'
import './Home.css';
import {useNavigate} from 'react-router-dom';
import {Animate} from 'react-simple-animate'

const Home = () => {
  const navigate=useNavigate();
  // console.log(navigate);
  const handleButton=()=>{
    navigate("/contact")
  }
  return (
    <div>
      <div id="home" className="home">
        <h3>Hello, i am Harshavardhan Reddy Anksapuram</h3>
        <br/>
        <p>Front-End Developer</p>
      </div>
      <Animate 
      play
      duration={1.5}
      delay={1}
      start={{
        transform:'translateY(500px)'
      }
      }
      end={{
        transform:'translateY(0px)'
      }}
      >

        <div className='button'>
          <button onClick={handleButton}>Hire me</button>
        </div>
      </Animate>
    </div>
  )
}

export default Home