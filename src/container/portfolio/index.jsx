import React from "react";
import PageHeaderCotent from "../../components/pageHeaderContent";
import { Link } from "react-router-dom";
import imageOne from "../../images/web devlopment.jpeg";
import ImageTwo from "../../images/eccommes.jpeg";
import ImageThree from "../../images/googel.png";
import ImageFour from "../../images/html.png";
import imageFive from "../../images/offie.jpeg";

import './style.scss'
import { useState } from "react";


const portfoliodata = [
  {
    id: 2,
    name: "Ecommerce",
    image: imageOne,
    link:'https://wonderful-stroopwafel-sunny.netlify.app/'
  },
  {
    id: 3,
    name: "Notes App",
    image: ImageTwo,
    link:'https://endearing-dodol-d55d13.netlify.app/'
  },
  {
    id: 2,
    name: "Supplier Design",
    image: ImageThree,
    link:''
  },
  {
    id: 2,
    name: "Ecommerce",
    image: ImageFour,
    link:'<a href="https://wonderful-stroopwafel-sunny.netlify.app/"></a>'
  },
  {
    id: 2,
    name: "Ecommerce",
    image: imageFive,
    link:''
  },
 
 
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  

const [filteredvalue, SetFilterdValue] =useState(1);
const [hoveredValue,setHoveredValue] = useState(null)

function handleFilter(currentId){
    SetFilterdValue(currentId)
};

function handleHover(index){
  setHoveredValue(index)

}

console.log(hoveredValue)

const filterdItems = filteredvalue === 1 ? portfoliodata :
portfoliodata.filter(item=>item.id === filteredvalue)

  return (

    
    <section id="portfolio" className="portfolio">
      <PageHeaderCotent headerText="portfolio " />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li className={item.filterId === filteredvalue ? 'active' : ''} onClick={()=>handleFilter(item.filterId)
            } key={item.filterId}>{item.label}</li>
          ))}
          
        </ul>
        <div className="portfolio__content__cards">
        {
            filterdItems.map((item,index)=>(
                <div className="portfolio__content__cards__item" key={'cardItem${item.name.trim()}'}
                
               onMouseEnter={()=>handleHover(index)}
                onMouseLeave={()=>handleHover(null)}
                
                
                >
                <div className="portfolio__content__cards__item__img-wrapper">
                   <a>
                  
                    <img  src={item.image}/>
                   </a>
                </div>
               <div className="overlay">
               {
                index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                  
                    <button>Visit</button>
                  </div>

                )
               }
                
               </div>
                </div>

            ))
        }

        </div>
      </div>
    </section>
  );
};
export default Portfolio;
