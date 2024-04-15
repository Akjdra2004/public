import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Signup= () => {
    
  return (
    <div style={{ paddingTop:"80px"}}>
        <Typography variant='h4' color={"dimgray"}>
            SIGNUP PAGE
        </Typography>
        <br/>
        <TextField label='Enter name' variant='outlined' /><br/><br/>
        <TextField label='Enter mobile number' variant='outlined'  /><br/><br/>
        <TextField label='Enter Email' variant='outlined' /><br/><br/>
        <TextField label='Enter Password' variant='outlined' /><br/><br/>
        
        <Button variant='contained'color='secondary' >submit</Button>
    </div>
  )
}

export default Signup