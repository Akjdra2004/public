import { Button } from '@mui/material'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <Button

    
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="demo-positioned-menu"
    
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
     
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default Dashboard