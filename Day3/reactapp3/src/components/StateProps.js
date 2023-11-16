import { useState } from "react";

function StateProps() {
    //create State
    const [name, setName] = useState("Vidya Banu");
    const [num, setNum]=useState(16);
    const [student, setStudent]=useState({name:"Anu",age:"19"});
    const nameHandler = () => {
        setName("Aishu");
    };
    const numHandler = () => {
        let val=num;
        setNum(++val);
    };
    return(
        <div>
            <h1>State and Props</h1>
            <hr></hr>
            <h2>Hi {name}</h2>
            <h2>My number is {num}</h2>
            <h2>Student name is {student.name} and age is {student.age}</h2>
            <button onClick={nameHandler}>Change Name</button>
            <button onClick={numHandler}>Increment Number</button>
        </div>
    )
}
export default StateProps; 