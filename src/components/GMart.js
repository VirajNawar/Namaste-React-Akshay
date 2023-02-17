import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
    const [toggle, setToggle] = useState(false)

  return (
    <div className="border border-blue-900 p-2 m-3">
      <h1 className="text-3xl">{title}</h1>
      {
        isVisible && toggle ?
        <>
        <button 
      className="underline"
      onClick={()=>{
        setIsVisible(false)
        setToggle(false)
    }}
      >Hide</button>
      
        </>
        :
        <>
        <button 
      className="underline"
      onClick={()=>{
        setIsVisible(true)
        setToggle(true)
    }}
      >Show</button>
      
        </>
        }
        {isVisible && toggle && <p className="text-lg mt-2">{description}</p>}
    </div>
  );
};
const GMart = () => {
    const [sectionVisible, setSectionVisible] = useState("")
  return (
    <>
      <Section 
      title={"G-Mart"} 
      description={"Description"}
      isVisible ={sectionVisible === "title"} 
      setIsVisible={()=>setSectionVisible("title")}
      />
      <Section 
      title={"About G-Mart"} 
      description={"Description"} 
      isVisible ={sectionVisible ==="about"} 
      setIsVisible={()=>setSectionVisible("about")}
      />
      <Section 
      title={"G-Mart Team"} 
      description={"Description"} 
      isVisible ={sectionVisible ==="team"} 
      setIsVisible={()=>setSectionVisible("team")}
      />
    </>
  );
};

export default GMart;
