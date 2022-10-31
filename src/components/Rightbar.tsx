import { Box } from '@mui/material'

export default function Rightbar() {
  return (
    <Box sx={{
        bgcolor:"red",
        flex:2,
        p:2,
        display:{
            xs:"none",
            sm:"block"
        }
        
    }}>Feed</Box >
  )
}
