import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './Plots.css'
import axios from 'axios'
import baseUrl from '../../Api'

const Plotedit = (props) => {
    var [inputs,setInputs]=useState(props.data)
    
    const inputhandler =(event)=> {
        const {name,value}=event.target
        setInputs((inputs)=>({...inputs,[name]:value}))
        console.log(inputs)
    }
    
    const savedata =()=>{
      
        if(props.method ==='put'){
          
            axios.put(baseUrl+"/plots/plotedit/"+inputs._id,inputs)
            .then((response)=>{
                alert("Updated")
                window.location.reload(false)
              })
              .catch(err=>console.log(err))
        }
    }
    
   
    

      return (
        <div className='aa'>
        <Typography>REGISTRATION FORM</Typography><br/>
        <TextField  label="Survay No" variant="filled" name="Admno" value={inputs.Admno} onChange={inputhandler}/><br/><br/>
        <TextField  label="Plot Loc" variant="filled" name="Pname" value={inputs.Pname}  onChange={inputhandler}/><br/><br/>
        <TextField  label="Price" variant="filled" name="Price" value={inputs.Price}  onChange={inputhandler} /><br/><br/>
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

export default Plotedit
