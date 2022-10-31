import {Button, Typography} from "@mui/material"
import { Add, Settings } from "@mui/icons-material";

function App() {
  return (
  <div>
    <Button variant="text" color="secondary">Text</Button>
    <Button variant="contained" startIcon={<Settings/>} color="secondary">SETTINGS</Button>
    <Button variant="contained" startIcon={<Add/>} color="success">ADD NEW POST</Button>
    

    <Typography variant="h1" component="p">Playing with typography</Typography>
    <Button variant="contained" sx={{
      backgroundColor:'skyblue',
      color:'#888',
      margin:5,
      "&:hover":{
        backgroundColor:"lightblue"//catching dynamic states of UI
      }
      
    }}>My unique Button</Button>
  </div>


    
  );
}

export default App;
 