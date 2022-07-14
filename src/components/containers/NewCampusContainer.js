import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewCampusView from '../views/NewCampusView';
import { addCampusThunk} from '../../store/thunks';

class NewCampusContainer extends Component {
  // Initialize state
  constructor(props){
    super(props);
    this.state = {
        campusId: null,
        name: "",
        address: "",
        description: "",
        redirect: false,
        redirectId: null,
    };
  }
  

  componentWillUnmount(){
    this.setState({redirect: false, redirectId: null})
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault(); // Prevent browser reload/refresh after submit
        this.setState({
            redirect: false
        });
        let campus = {
            campusId: 1, 
            name: this.state.name,
            address: this.state.address,
            description: this.state.description
        };
        
    

        
    
        let newCampus = await this.props.addCampus(campus);
    
        this.setState({
            campusId: null,
            name: "",
            address: "",
            description: "",
            redirect: true,
            redirectId: newCampus.id,
        });
        
    }

    render(){
        
       
        if(this.state.redirect){
            return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
        }

        return(
            <div>
                <Header/>
                <NewCampusView
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                />
            </div>
        ); 
        
        
    }

}



// The following input argument is passed to the "connect" function used by "NewStudentContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
    return({
        addCampus: (campus) => dispatch(addCampusThunk(campus)),
    })
}

// Export store-connected container by default
// NewCampusContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(null, mapDispatch)(NewCampusContainer);