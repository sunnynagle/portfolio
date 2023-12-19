import React from "react";
import {useNavigate} from 'react-router-dom';
import { Animate } from "react-simple-animate";
import './style.scss';

const Home=()=> {

    const navigate = useNavigate();
    console.log(navigate)

   const handleNavigateToContactMePage=() =>{
     navigate('/contenct')
    }

    
return(
   <section id="home" className="home">
   <div className="home__text-wrapper">
    <h1>
    Hello, I'm Sunny Nagle
    <br />
 i'Am  Front End Developer
   

    </h1>
   </div>
   <Animate play
   duration={2.5}
   
    start={{ opacity: 0 }} end={{ opacity: 10 }}>
     
   
 <div className="home__contact-me">
    <button onClick={handleNavigateToContactMePage}>Hire Me</button>
   </div>
   </Animate>

   </section>
)
}
export default Home;