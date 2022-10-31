import { Pets } from '@mui/icons-material';
import { AppBar, Box, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'

const StyledToolbar=styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'
});

const Navbar=():JSX.Element=>{
  return (
    <AppBar position='sticky' sx={{
      height:'50px'}}>
        <StyledToolbar>
          <Typography
              variant='h6'
              sx={{
                display:{
                  xs:"none",
                  sm:"block"
                }
              }}>LAMBDA DEV
                <Pets
                 sx={{
                  display:{
                    xs:"none",
                    sm:"block"
                  }
                }}/>
            </Typography>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar