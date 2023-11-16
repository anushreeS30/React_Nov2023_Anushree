import { useState } from "react";

function Stateprs()
{
   const [name, setName] = useState("Kaioken");
   const [count, setCount] = useState(0);
   const transformationhandler = () => {
    let value = count;
    setCount(++value);
    if(count === 3){
    if(name === "Kaioken")
    setName("SuperSaiyan");
else
     setName("Kaioken");
    setCount(0);
    }
   };
   return (
          <div>
            <h1>TOOGLE!!</h1>
            <hr></hr>
            <h1>{name}</h1>
            <button onClick={transformationhandler}>Toogle</button>
          </div>
   );
}
export default Stateprs;