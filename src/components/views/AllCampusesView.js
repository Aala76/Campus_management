/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const AllCampusesView = (props) => {
  const {allCampuses ,deleteCampus} = props;
  // If there is no campus, display a message.
  if (!props.allCampuses) {
    return <div>
      <p>There are no campuses.</p>
    
    </div>;
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1 className="pageTitle">All Campuses </h1>
      
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>
          <h4>campus id: {campus.id}</h4>
          <p>{campus.address}</p>
          <p>{campus.description}</p>
          <Button onClick={() => deleteCampus(campus.id)} variant="contained" color="primary" >
              Delete Campus
          </Button>

          <hr></hr>
        </div>
      ))}
      <br/>
      <span>
          <Link to={`/newcampus`}>
          <Button  variant="contained" color="primary" >
              Add New Campus
          </Button>
          </Link>
        </span>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;