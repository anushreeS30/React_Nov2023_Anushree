import {useState}from "react";

function Table()
{
            const[Employee]=useState([
                {
                    id:1,
                    name:"Ayshu Devi",
                    age:19,
                },
                {
                    id:2,
                    name:"Thanisha",
                    age:18,
                },
                {
                    id:3,
                    name:"Geethu",
                    age:19,
                },
            ]);

    return(
        <div>
            <h1>Employee Details</h1>
            <hr></hr>
              <table style={{border:"1"}}>
                <tr>
                    <th>Emp_id</th>
                    <th>Emp_Name</th>
                    <th>Emp_Age</th>
                </tr>
                    {Employee.map((emp)=>(
            
                        <tr key={emp.id} >
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.age}</td>
                    </tr>
                        
                    ))}
              </table>
              
        </div>
    )
}
export default Table;