import React,{useState} from "react";
import PageHeaderCotent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { json } from "react-router-dom";

const Contenct = () => {
  const[data, setData] = useState ({
    name:'',
    email:'',
    Description:'',
  });
  const {name, email, Description} = (e) => data

  const handleChange = e =>{
    setData({...data, [e.target.name]: e.target.value})
  };
  const handleSubmit = async(e) =>{
    e.preventDefault();

    try{
      const response = await fetch('https://v1.nocodeapi.com/sunnynagle/google_sheets/ITJt=Sheeet1',{
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:json.stringity([[name, email, Description, new DataTransfer().toLocaleString()]])
     
    }
    );
    await response.json();
    setData({ ...data, name: "", email:'', Description:""});

    }catch(err) {
      console.log(err)
    }


  }
 
  return (
    <form onSubmit={handleSubmit}>
    <section id="Contence" className="Contence">
      <PageHeaderCotent headerText="Contence " />
      <div className="content">
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
          <h3 class="header-text">Let's Talk</h3>
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
          <div className="forn">
            <div className="controlswrapper">
              <input
               
                name="name"
                className="inputName"
                type={"text"}
                placeholder="Name"
               
                onChange={handleChange}
              />
              <label htmlFor="name" className="nameLabel"></label>
            </div>
            <div className="emailWrapper">
            
              <input
                required
                name="email"
                className="inputName"
                type={"text"}
                placeholder="Email"
                value={email}
                onChange={handleChange}
              />
              <label htmlFor="name" className="emailLabel"></label>
            </div>
            <div className="DescriptionWrapper">
              <textarea
                required
                name="Description"
                className="inputDescription"
                type={"text"}
                rows={5}
                placeholder="Description"
                value={Description}
                onChange={handleChange}
              />
              <label htmlFor="Description" className="descriptionLabel"></label>
              
            </div>

           <button className="button">Submit</button>
          
            
          </div>
          
        </Animate>
      </div>
      
    </section>
    </form>
  );
};
export default Contenct;
