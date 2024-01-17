import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './Plots.css'
import axios from 'axios'
 //import { useNavigate } from 'react-router-dom'
import baseUrl from '../../Api'

const Plots = () => {
var [inputs,setInputs]=useState({"Admno":'',"Pname":'',"Price":'',"Cno":'',"Status":'ACTIVE'})

//const navigate = useNavigate();

const inputhandler =(event)=> {
    const {name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
}


const savedata =()=>{
  console.log(inputs)
  axios.post(baseUrl+"/plot/pnew",inputs)
  .then((response)=>{alert("Record Saved")})
  .catch(err=>console.log(err))
  alert('form submitted');

   //navigate('/documentdetails')
}


  return (
    <div className='aa'>
      <Typography>REGISTRATION FORM</Typography><br/>
      <TextField  label="Survay No" variant="filled" name="Admno" value={inputs.Admno} onChange={inputhandler}/><br/><br/>
      <TextField  label="Plot Loc" variant="filled" name="Pname" value={inputs.Sname}  onChange={inputhandler}/><br/><br/>
      <TextField  label="Price" variant="filled" name="Price" value={inputs.Price}  onChange={inputhandler} /><br/><br/>
      <TextField  label="Cent" variant="filled" name="Cno" value={inputs.Cno}  onChange={inputhandler} /><br/><br/>
      <TextField  label="Image" variant="filled" name="Image" value={inputs.Image}  onChange={inputhandler} /><br/><br/>
      Status: &nbsp;&nbsp;
      <select name="Status" value={inputs.Status}  onChange={inputhandler}>
       <option value="ACTIVE">ACTIVE</option>
       <option value="INACTIVE">INACTIVE</option>
      </select>
      <br/><br/>
      <Button variant="contained" onClick={savedata}>SUBMIT</Button>
    </div>
  )
}

export default Plots
