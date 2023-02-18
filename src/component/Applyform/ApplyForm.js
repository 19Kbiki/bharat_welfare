import React, { Component } from 'react'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { formDetails, addButton, blockList } from "../../config";
import { TextField } from '@mui/material';
import styles from "../Applyform/ApplyForm.module.scss"
class ApplyForm extends Component {
  constructor (props){
    super(props);
    this.state={
        // position:"",
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
     this.setState((prevState) => ({...prevState,
       personalDetails: {
         ...prevState.personalDetails,
         [name]: value,
       },
       address: {
         ...prevState.address,
         [name]: value,
       },
      }));

      // this.setState({positions:{[name]: value}})
     
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
      qualificationDetails: this.state.qualificationDetails,
      position: this.state.position
    };

     console.log(data)
    }

  render() {
    const personalDetailsArray = [
    {label:"Firstname", name:'firstname', value:this.state.personalDetails.firstName,onChange: this.inputChange},
    {label:"Lastname", name:'lastName', value:this.state.personalDetails.lastName,onChange: this.inputChange},
    {label:"DOB", name:'dob', value:this.state.personalDetails.dob,onChange: this.inputChange},
    {label:"E-mail", name:'email', value:this.state.personalDetails.email,onChange: this.inputChange},
    {label:"Mobile No.",name:'contact', value:this.state.personalDetails.contactNo,onChange: this.inputChange},
    { type: "file" ,label:"",name:'contact', value:this.state.personalDetails.contactNo,onChange: this.inputChange},

    ]
    
    return (
      <div className='py-48'>
        <div className='container mx-auto'>
        <form >
         {/* <FormControl>
          <InputLabel id="demo-simple-select-label">Position</InputLabel>
          <Select   id="demo-simple-select"className="w-96" labelId="demo-simple-select-label" name='position' value={this.state.position}  onChange={this.inputChange}>
            {positionList.map(element=> <MenuItem value={element.name}>{element.name}</MenuItem> )}    
          </Select>
          </FormControl> */}
          <h1>{formDetails.pName}</h1>
          <div className={styles.personalDetails}> 
          {personalDetailsArray.map(element=><TextField type={element.type} className={styles.inputTable} label={element.label} name={element.name}  value={element.value}  onChange={ element.onChange} required/>)}
          </div>
          <h1>{formDetails.aName}</h1>
          <div className={styles.address}> 
          <TextField disabled name='dist' className={styles.inputTable}  value={this.state.address.dist}  onChange={ this.inputChange}/>
          <FormControl>
          <InputLabel id="demo-simple-select-label">Select Block</InputLabel>
          <Select  id="demo-simple-select"className={styles.inputTable} labelId="demo-simple-select-label" name='block' value={this.state.address.block}  onChange={this.inputChange}>
            {blockList.map(element=> <MenuItem value={element.name}>{element.name}</MenuItem> )}    
          </Select>
          </FormControl>
          <TextField label="Panchayet"className={styles.inputTable} name='panchayat' value={this.state.address.panchayat}  onChange={this.inputChange}/>
          <TextField label="Pin Code"className={styles.inputTable} name='pinNo' value={this.state.address.pinNo}  onChange={this.inputChange}/>
          </div>
            {/* Add Qualification */}
          <div className={styles.qHeading}>
           <h1>{formDetails.qName}</h1>
           <button type="button" onClick={this.addQualification}>{addButton.name}</button>
          </div>
          {this.state.qualificationDetails.map((qualification, index) => (
          <div key={index} >
            <div className={styles.removebutton}>

          {index > 0 && (<button type="button" onClick={() => this.removeQualification(index)}>Remove</button>)}
            </div>

            <div className={styles.qualificationDetails}>

          <TextField type="text" label="Qualification" name="qualificationName" value={qualification.qualificationName} onChange={(e) => this.inputChange(e, index)}/>

          <TextField type="text" label="Fullmarks" name="fullMarks" value={qualification.fullMarks} onChange={(e) => this.inputChange(e, index)}  onBlur={(e) => {
            const percentage = e.target.value / 5;
            this.setState((prevState) => {
              const qualificationDetails = prevState.qualificationDetails.slice();
              qualificationDetails[index] = {
                ...qualificationDetails[index],
                percentage: percentage.toFixed(2),
              };
              return {
                qualificationDetails,
              };
            });
          }}/>
            <TextField type="text" label="Percentage" name="percentage" value={qualification.percentage} onChange={(e) => this.inputChange(e, index)}/>
            <TextField type="text" label="University Name" name="universityName" value={qualification.universityName} onChange={(e) => this.inputChange(e, index)}/>

          {/* Remove Qualification */}
            </div>
         
        </div>
      ))}
      <div className={styles.submitButton}>

        <button type='submit' onClick={this.submitData}>submit</button>
      </div>
        </form>
        </div>
      </div>
  );
  }
}

export default ApplyForm
