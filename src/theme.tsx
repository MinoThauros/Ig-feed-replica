import { createTheme } from '@mui/material';
import React from 'react'

export const  theme=createTheme({
    palette:{
        primary:{
            main:"#1760a5",
            light:"skyblue"
        },
        secondary:{
            main:'#15c630'
        },   
    },
    shape:{
        borderRadius:1.5
    }
})

//is a state-like entity like context
//palette follows a set structure

