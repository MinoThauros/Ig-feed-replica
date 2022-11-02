import { Pets } from '@mui/icons-material';
import { AppBar, styled, Toolbar, Typography,Box, Badge } from '@mui/material'
import { theme } from '../theme';
import { InputBase } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';


const StyledToolbar=styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'
});

const Search=styled("div")(({theme})=>({//wraps the component with aditional styling props
  backgroundColor:'white'
}));

const Icons=styled(Box)(({theme})=>({
  //wraps the component with aditional styling props-directly pass called item
  display:'flex',
  border:0
}))

const Navbar=():JSX.Element=>{
  return (
    <AppBar position='sticky' >
        <StyledToolbar>
          <Typography
              variant='h6'
              sx={{
                display:{
                  xs:"none",
                  sm:"block"
                } ,
               
              }}>LAMBDA DEV
              </Typography>
              {/**If we were to encapsulate the pets in the typography container,
               *  it would behave like a flexbox */}
              <Pets
                 sx={{
                  display:{
                    xs:"block",
                    sm:"none",
                  }
              }}/>
              <Search sx={{
                color:"black",
                borderRadius:theme.shape.borderRadius,
                width:'40%',
                padding:"0  10px",
                alignItems:'center',
                justifyContent:'center',


              }}>
                <InputBase 
                placeholder='search...'
                sx={{
                  width:'100%'
                }}
                />
              </Search>
              <Icons>
                <Badge badgeContent={4} color="primary">
                  <MailIcon color="action" />
                </Badge>
              </Icons>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar