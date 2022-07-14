/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props;
  
  // Render a single Campus view with list of its students

  

  return (
    <div>
      <h1 className="campusName">{campus.name} </h1>
      
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <h1><span>
          <Link to={`/editcampus/${campus.id}`}>
            <Button variant="contained" color="primary" type="submit"> Edit </Button>
          </Link>
        </span></h1>
      <h3>Students</h3>
      {campus.students.map( student => {
      let name = student.firstname + " " + student.lastname;
      
      return (
        <div key={student.id}>
          <Link to={`/student/${student.id}`}>
            <h4>{name}</h4>
          </Link>
               
        </div>
      );
    

    })}


    </div>
  );
};

export default CampusView;