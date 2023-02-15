import React, { useState } from 'react'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from '@mui/material';
import dayjs from "dayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { formDetails, addButton } from "../../config";
function ApplyForm() {

    const [formInput, setFormInput] = useState([
      {
        post: "",
        fName: "",
        lname: "",
        dob: dayjs("2014-08-18T21:11:54"),
        email: "",
        contact_no: "",
        address: "Malda",
        block: "",
        panchayet: "",
        pin_no: "",
        qName: "",
        parsent: "",
        fMarks: "",
        university: "",
      },
    ]);

    const [input , setInput] = useState([{qName:'', parsent:'', fMarks:'', university:""}]);
   
    const handleChange = (e) => {
      let formInputs = [[...formInput], [...input],];
      formInputs[e.target.value] = e.target.value;
      setFormInput(formInputs,e);  
      console.log(formInputs,e);
     };
     
    const addInput =()=>{
      const add = [...input,{qName:'', parsent:'', fMarks:'', university:""}]
      setInput(add)
      console.log(input)
    }

    const removeInput = (index) =>{
    const add = [...input];
    add.splice(index,1)
    setInput(add);
    }

  return (
    <div>
      <section className="pt-60 bg-[#DFF6FF]">
        <div className="container mx-auto">
          <form action="">
            <div className="post">
              <FormControl className="w-96">
                <InputLabel id="demo-simple-select-label">
                  Select Post
                </InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" name="post" value={formInput.post} label="Select Post" onChange={handleChange}>
                  <MenuItem value={"Devops"}>DevOps</MenuItem>
                  <MenuItem value={"Java Developer"}>Java Developer</MenuItem>
                  <MenuItem value={"Front-end Developer"}>Front-end Developer</MenuItem>
                </Select>
              </FormControl>
              <FormControl><input type="file" placeholder="" /></FormControl>
            </div>

            <div className="personal_info ">
              <h1>{formDetails.pName}</h1>
              <FormControl className="w-96">
                <TextField label="Fastname" name='fName' value={formInput.fName} onChange={handleChange}/>
              </FormControl>
              <FormControl className="w-96">
                <TextField label="Lastname" name='lname' value={formInput.lname} onChange={handleChange} />
              </FormControl>
              <FormControl className="w-96">
               
                <TextField name='dob' label="DOB" value={formInput.dob} onChange={handleChange}  />
                  
          
              </FormControl>
              <FormControl className="w-96">
                <TextField label="E-mail" name='lname' value={formInput.email} onChange={handleChange} />
              </FormControl>
              <FormControl className="w-96">
                <TextField label="Mobile No" name='lname' value={formInput.contact_no} onChange={handleChange} />
              </FormControl>
            </div>

            <div className="address ">
              <h1>{formDetails.aName}</h1>
              <FormControl className="w-96">
                <TextField label="Address" name='address' value={formInput.address} onChange={handleChange} />
              </FormControl>
              <FormControl className="w-96">
                <InputLabel id="demo-simple-select-label">Block</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formInput.block}
                  label="Select Post"
                  onChange={handleChange}
                >
                  <MenuItem value={"Devops"}>Ratua I</MenuItem>
                  <MenuItem value={"Java Developer"}>Ratua II</MenuItem>
                  <MenuItem value={"Front-end Developer"}>Manikchak</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="w-96">
                <InputLabel id="demo-simple-select-label">panchayet</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formInput.panchayet}
                  label="Select Post"
                  onChange={handleChange}
                >
                  <MenuItem value={"Ratua I"}>Ratua I</MenuItem>
                  <MenuItem value={"Ratua II"}>Ratua II</MenuItem>
                  <MenuItem value={"manikchak"}>Manikchak</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="w-96">
                <TextField label="Pin code." name='pin_no' value={formInput.pin_no} onChange={handleChange} />
              </FormControl>
            </div>
            {input.map((x, i) => {
              return (
                <>
                  {input.length !== 1 && (
                    <button type="button" onClick={() => removeInput()}>
                      Remove
                    </button>
                  )}
                  {input.length - 1 === i && (
                    <button type="button" onClick={() => addInput()}>
                      {addButton.name}
                    </button>
                  )}

                  <div className="address ">
                    <h1>{formDetails.qName}</h1>
                    <FormControl className="w-96">
                      <TextField label="Qualification" name="qname" value={formInput.qName} onChange={handleChange} />
                    </FormControl>
                    <FormControl className="w-96">
                      <TextField label="Persentege" name="parsent" value={formInput.parsent} onChange={handleChange} />
                    </FormControl>
                    <FormControl className="w-96">
                      <TextField label="fullmarks" name="fMarks" value={formInput.fMarks} onChange={handleChange} />
                    </FormControl>
                    <FormControl className="w-96">
                      <TextField label="university" name="university" value={formInput.university} onChange={handleChange} />
                    </FormControl>
                  </div>
                </>
              );
            })}
          </form>
        </div>
      </section>
    </div>
  );
}

export default ApplyForm
