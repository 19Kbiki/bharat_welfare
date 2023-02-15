import React, { Component } from 'react'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { formDetails, addButton ,blockList} from "../../config";
import { TextField } from '@mui/material';
class ApplyForm extends Component {
  constructor (props){
    super(props);
    this.state={
        personalDetails: {firstName:"", lastName:"", dob:'', email:"", contactNo:"",profilePhoto:""},
        address:{dist:"Malda",block:"",panchayat:"",pinNo:""},
        qualificationDetails: [{qualificationName: "",percentage:"",fullMarks: "",universityName:""},],  
    }
    this.submitData = this.submitData.bind(this)
    this.inputChange = this.inputChange.bind(this)
    this.addQualification = this.addQualification.bind(this);
    this.removeQualification = this.removeQualification.bind(this);
  }

  inputChange(e, index) {
    const { name, value } = e.target;
    this.setState((prevState) => {
      const qualificationDetails = prevState.qualificationDetails.slice();
      qualificationDetails[index] = {
        ...qualificationDetails[index],
        [name]: value,
      };
      return {
        qualificationDetails,
      };
    });
     this.setState(prevState => ({
      ...prevState,
      personalDetails: {
        ...prevState.personalDetails,
        [name]: value
      },
    }));
    this.setState(prevState => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value
      },
    }));
  }

  addQualification() {
    this.setState((prevState) => ({
      qualificationDetails: [
        ...prevState.qualificationDetails,
        { qualificationName: "",percentage:"",fullMarks: "",universityName:"" },
      ],
    }));
  }
  
  removeQualification(index) {
    this.setState((prevState) => {
      const qualificationDetails = prevState.qualificationDetails.slice();
      qualificationDetails.splice(index, 1);
      return {
        qualificationDetails,
      };
    });
  }
    submitData (event){
    event.preventDefault();
    const data = {
      personalDetails: {
       firstName :this.state.personalDetails.firstName,
       lastName:this.state.personalDetails.lastName,
       email:this.state.personalDetails.email,
       contactNo: this.state.personalDetails.contactNo,
       dob: this.state.personalDetails.dob,
       profilePhoto: this.state.personalDetails.profilePhoto,
      },
      address:{
        dist: "Malda",
        block:this.state.address.block,
        panchayat:this.state.address.panchayat,
        pinNo:this.state.address.pinNo,
      },
      qualificationDetails: this.state.qualificationDetails
    };
     console.log(data)
    }

  render() {
    
    return (
      <div className='py-48'>
        <form >
          <div> 
          <h1>{formDetails.pName}</h1>
          <TextField label="Firstname" name='firstName'  value={this.state.personalDetails.firstName}  onChange={ this.inputChange}/>
          <TextField label="Lastname" name='lastName' value={this.state.personalDetails.lastName}  onChange={this.inputChange}/>
          <TextField label="DOB" name='dob' value={this.state.personalDetails.dob}  onChange={this.inputChange}/>
          <TextField label="E-mail" name='email' value={this.state.personalDetails.email}  onChange={this.inputChange}/>
          <TextField label="Mobile No." name='contactNo' value={this.state.personalDetails.contactNo}  onChange={this.inputChange}/>
          </div>
          <div> 
          <h1>{formDetails.aName}</h1>
          <TextField disabled name='dist'  value={this.state.address.dist}  onChange={ this.inputChange}/>
          <FormControl>
          <InputLabel id="demo-simple-select-label">Select Block</InputLabel>
          <Select className='w-96' id="demo-simple-select" labelId="demo-simple-select-label" name='block' value={this.state.address.block}  onChange={this.inputChange}>
            {blockList.map(element=> <MenuItem value={element.name}>{element.name}</MenuItem> )}    
          </Select>
          </FormControl>
          <TextField label="Panchayet" name='panchayat' value={this.state.address.panchayat}  onChange={this.inputChange}/>
          <TextField label="Pin Code" name='pinNo' value={this.state.address.pinNo}  onChange={this.inputChange}/>
          </div>
            {/* Add Qualification */}
           <button type="button" onClick={this.addQualification}>{addButton.name}</button>
           <h1>{formDetails.qName}</h1>
          {this.state.qualificationDetails.map((qualification, index) => (
          <div key={index}>
          
          <TextField type="text" label="Qualification" name="qualificationName" value={qualification.qualificationName} onChange={(e) => this.inputChange(e, index)}/>
          <TextField type="text" label="Percentage" name="percentage" value={qualification.percentage} onChange={(e) => this.inputChange(e, index)}/>
          <TextField type="text" label="Fullmarks" name="fullMarks" value={qualification.fullMarks} onChange={(e) => this.inputChange(e, index)}/>
          <TextField type="text" label="University Name" name="universityName" value={qualification.universityName} onChange={(e) => this.inputChange(e, index)}/>

          {/* Remove Qualification */}
          {index > 0 && (<button type="button" onClick={() => this.removeQualification(index)}>Remove</button>)}
          <br />
        </div>
      ))}
    
      <br />
        <button type='submit' onClick={this.submitData}>submit</button>
        </form>

      </div>
  );
  }
}

export default ApplyForm
