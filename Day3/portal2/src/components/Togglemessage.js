import {useState } from "react";
function Togglemessage()
{
    const[showmessage,setShowmessage]=useState(false);
    const toogleMessage=()=>{
        setShowmessage(!showmessage);
    };
    return(
        <div>
            <h1>
                Dashboard
            </h1>
            <hr></hr>
            <button onClick={toogleMessage}>
                {showmessage ? "Hide message" : "Show message"}
            </button>
            {showmessage && <p>Sample sentence</p>}
        </div>
    );
}
export default Togglemessage;