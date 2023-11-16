import {useState} from "react";
function Listitems()
{
    const[Students]=useState(
      [
        {
            id:1,
            name:"John",
            age:21,
        },
        {
            id:2,
            name:"Mike",
            age:21,
        },
        {
            id:3,
            name:"Mik",
            age:20,
        },

    ]);

    return (
        <div>
            <h1>List</h1>
       <hr></hr>
          <ul style={{listStyleType:"none" }}>
            {Students.map((student)=>(
                <li key={student.id}>
                <h3>ID:{student.id}</h3>
                <h5>Name:{student.name}</h5>
                <h5>Age:{student.age}</h5>
                </li>
            ))}
          </ul>
          <hr></hr>
        </div>
    )
};
export default Listitems;