import React, {useState, useEffect} from 'react';
import axios from "axios";

export default function AllStudents(){

    const [students, setStudents] = useState([])

    useEffect(()=>{
        function getStudents(){
            axios.get("http://localhost:8070/student/").then((res)=>{

                console.log(res.data);
                setStudents(res.data);

            }).catch((err)=>{
                alert(err.message);
            })
        }
        getStudents();
    }, [])

    return(
        <div class="container">
            <h1>all students</h1>
            <ul>
            {students.map(student=>(
                    //<li>{todo}</li>
                
                <li>{student.name}<br/>{student.age}<br/>{student.gender}</li>
            ))}
            </ul>
        </div>
    )
}