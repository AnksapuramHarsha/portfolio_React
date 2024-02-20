// import React from 'react'
import {FaBars, FaReact} from 'react-icons/fa';
import {HiX} from 'react-icons/hi'
import {Link} from 'react-router-dom';
import {useState} from 'react';
import './NavSection.css';

const data=[
    {
        label:'Home',
        to:'/home'
    },
    {
        label:'About',
        to:'/about'
    },
    {
        label:'Projects',
        to:'/projects'
    },
    
    {
        label:'Skills',
        to:'/skills'
    },
    {
        label:'Contact',
        to:'/contact'
    },
]
const NavSection = () => {
    const [handleIcon,setHandleIcon]=useState(false);
    const handleToggleIcon=()=>{
        setHandleIcon(!handleIcon)
    }
  return (
    <div>
        <nav className="navBar">
            <div className="navContainer">
                <div className='reactIcon'>
                    <Link>
                        <FaReact size={30}/>
                    </Link>

                </div>
                <div className='itemsContainer'>
                    <ul className='itemsContainerUl'>
                        {
                            data.map((item,key)=>(
                                <Link key={key} to={item.to}>
                                
                                    <li className='liItem'>{item.label}</li>
                                </Link>

                            )

                            )
                        }
                    </ul>
                <div className='navIcon' onClick={handleToggleIcon}>
                        {
                            handleIcon ? <HiX size={30}/>:<FaBars size={30}/>
                        }
                </div>

                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavSection