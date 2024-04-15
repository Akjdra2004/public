import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Login= () => {
    
  return (
    <div style={{ paddingTop:"80px"}}>
        <Typography variant='h4' color={"dimgray"}>
            LOGIN PAGE
        </Typography>
        <br/>
        <TextField label='Enter your name' variant='outlined' /><br/><br/>
        <TextField label='Enter your password' variant='outlined'  /><br/><br/>
        {/* <TextField label='Author Name' variant='outlined' /><br/><br/> */}
        
        <Button variant='contained'color='secondary' >submit</Button>
    </div>
  )
}

export default Login