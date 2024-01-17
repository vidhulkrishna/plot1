import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Plotedit from './Plotedit';




import baseUrl from '../../Api'
import './Details.css'

const Plotdetails = () => {
    var[plots,setPlots] = useState([]);
    var[selected,setSelected] = useState();
    var[update,setUpdate] = useState(false);


    useEffect(()=>{
        axios.get(baseUrl + "/plot/pdetails")
        .then(response =>{
            console.log(response.data)
            setPlots(response.data)
        })
        .catch(err=>console.log(err))
    },[])

const deletevalues =(id)=>{
    console.log("deleted",id)
    axios.put(baseUrl+"/plots/updatestatus/"+id)
    .then((response)=>{
        alert("DELETED")
    window.location.reload(false);
    })
}

const updatevalues =(value)=>{
console.log("updated",value);
setSelected(value);
setUpdate(true);
}
var result=
<div className='aa'>
<Typography >ADMIN VIEW</Typography><br/><br/>
<TableContainer>
<Table >
  <TableHead>
    <TableRow>
      <TableCell >Survay No</TableCell>
      <TableCell >Plot Loc</TableCell>
      <TableCell>Price</TableCell>
      <TableCell >Cent</TableCell>
      <TableCell>Image</TableCell>
      <TableCell >Status</TableCell>
      <TableCell>Edit</TableCell>
      <TableCell>Delete</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
      {plots.map((value,index)=>{
          return(
              <TableRow key={index}>
                  <TableCell>{value.Admno}</TableCell>
                  <TableCell>{value.Pname}</TableCell>
                  <TableCell>{value.price}</TableCell>
                  <TableCell>{value.Cno}</TableCell>
                  <TableCell>{value.Image}</TableCell>
                  <TableCell>{value.Status}</TableCell>
                  <TableCell><ModeEditOutlineIcon color='success' onClick={()=>updatevalues(value)}/></TableCell>
                  <TableCell><DeleteForeverIcon color='error' onClick={()=>deletevalues(value._id)}/></TableCell>
              </TableRow>
          )
      })}
  </TableBody>
</Table>
</TableContainer>
</div>

if(update)
      {
        result=<Plotedit data={selected} method='put'/>
      }
  return (result)
}

export default Plotdetails

       