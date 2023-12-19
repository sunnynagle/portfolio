import {Line} from "rc-progress"
import React from "react";
import './style.scss'
import PageHeaderCotent from '../../components/pageHeaderContent';
import { AnimateKeyframes } from "react-simple-animate";


import{skillsData} from "./utils.js"


const skills=()=>{
return(
    <section id="skills" className="skills">

        <PageHeaderCotent
            headerText = " my Skills "
           
        />
       <div class="content-wrapper">
        {
            skillsData.map((item,i)=>(
<div key={i} class="inner-content"
>


 <div class="servicesWrapp">
            
    <h3 class="category-text">{item.label}</h3>
    <div>{
        item.data.map((skillItem ,j)=> (
            <AnimateKeyframes
             play
             duration={1}
             keyframes={["opacity :1" , "opacity: 0"]}
             iterationCount="1"
             >
             <div class="progressbar-wrapper" key={j}>
             <p class="p">{skillItem.skillName}</p>
             <Line
                percent={skillItem.percentage}
                strokeWidth="2"
                strokeColor="var(--yellow-theme-main-color)"
                trailWidth="2"
                strokeLinecap="square"
             />
            
             </div>
             
            </AnimateKeyframes>
        ))}
        
    </div>
   
</div>
</div>

            ))}
       </div>
       
    



    </section>

)
}
export default skills;