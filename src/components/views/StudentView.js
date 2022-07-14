/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */

import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const StudentView = (props) => {
  const { student, deleteStudent} = props;

 
  if (!student){
    return <div>No students in the database</div>
  }
  


  return (
    
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
    

      <span >
      <img src="https://img.icons8.com/fluency/48/000000/test-account.png" width="100" height="100" alt = "image"/>
      </span>
      <br/><br/>
      {student.campus !== null ? 
      
        <Link style={{textDecoration: 'none'}} to={`/campus/${student.campus.id}`}>
            <h3 >College Campus: <span className="campusLink">{student.campus.name}</span></h3>
        </Link>
        : 
        <h3>NO CAMPUS</h3> 
        
      }
      <h3>Email: {props.student.email}</h3>
      <h3>GPA:  {props.gpa}</h3>
      
      <h3> <Link to={`/editstudent/${student.id}`}>
            <Button variant="contained" color="primary" type="submit" >Edit</Button>
      </Link></h3>
     

      <Button variant="contained" color="primary"  onClick={() => deleteStudent(student.id)}>Delete</Button>
      
      <hr/>
    </div>
    
  );

};

export default StudentView;