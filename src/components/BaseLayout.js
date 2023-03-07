import React, { useState } from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import { Box, Grid } from "@mui/material";
export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   function handleClick() {
      setDarkMode(!darkMode);
   }
   const [spanish, setSpanish]=useState(false);

   function handleLanguage(){
      setSpanish(!spanish);
   }

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
            justifyContent={'space-between'} >
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleClick} spanish={spanish} handleLanguage={handleLanguage} />
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                  py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                  <p>© Todos los derechos reservados - Christian Suárez 😎 - 2022</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

