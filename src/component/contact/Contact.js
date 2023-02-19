import { Button, TextField } from '@mui/material'
import React, { Component } from 'react'
import styles from "../contact/Contact.module.scss"
export class Contact extends Component {
  constructor (props){
    super(props);
    this.state={
      name:"",
      email:"",
      contactNo:"",
      description:""
    }
    this.submitData = this.submitData.bind(this)
    this.inputChange = this.inputChange.bind(this)
  }
  inputChange (e) {
    const {name,value} =  e.target;
    const newValue =  this.state
    this.setState({ newValue ,[name]:value})
    console.log(value)
  }
  submitData(event){
  event.preventDefault();
  const { name, email, contactNo, description } = this.state;

// Validate form data
  if (name.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!/^[0-9]{10}$/.test(contactNo)) {
    alert("Please enter a valid 10-digit contact number.");
    return;
  }

  if (description.trim() === "") {
    alert("Please enter a description.");
    return;
  }

// Form data is valid, proceed with submission
const data = {
  name,
  email,
  contactNo,
  description,
};

console.log(data);
}
  
  render() {
    const formDetails = [
      {label:"Name", name:"name" ,value:this.state.name }, 
      {label:"Email",name:"email" ,value:this.state.email },
       {label:"Mobile No.",name:"contactNo" ,value:this.state.contactNo }, 
       {label:"Description", name:"description" ,value:this.state.description }
    ]
    return (
      <div>
        <section>
        <div className='container mx-auto'>
        <form >
          <h1>Contact us</h1>
          {formDetails.map (ele =>  <TextField id="standard-basic" className={styles.input} label={ele.label} variant="standard" required name={ele.name} value={ele.value} onChange={this.inputChange} />)}
         <div className={styles.btton}><Button className={styles.btn} onClick={this.submitData}>Submit</Button></div>
        </form>
        </div>
        </section>
      </div>
    )
  }
}

export default Contact
