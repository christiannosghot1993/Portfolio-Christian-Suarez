import React from 'react';
import { Box } from "@mui/material";
import sol from "../../img/sol.png";
import luna from "../../img/luna.png";
import spain from "../../img/spain.png";
import unitedkingdom from "../../img/united-kingdom.png";
export default function Toggler({ darkMode, handleClick, spanish, handleLanguage }) {
   const transition = 'all 250ms ease'

   return (
      <div style={{ display: 'flex' }}>
         <Box fontSize={'1.5rem'} sx={{ cursor: 'pointer', ":hover": { transform: 'translateY(-3px)', transition: transition }, paddingTop:'9px', paddingLeft:'30px' }}>
            {
               darkMode ?
                  <span onClick={handleClick} aria-label="Full Moon" role="img">
                     <img src={sol} alt='light mode'></img>
                  </span>
                  :
                  <span onClick={handleClick} aria-label="New Moon" role="img">
                     <img src={luna} alt='dark mode'></img>
                  </span>
            }
         </Box>
         <Box fontSize={'1.5rem'} sx={{ cursor: 'pointer', ":hover": { transform: 'translateY(-3px)', transition: transition }, paddingTop:'9px', paddingLeft:'30px' }}>
            {
               spanish ?
                  <span onClick={handleLanguage} aria-label="English" role="img">
                     
                     <img src={unitedkingdom} alt='english'></img>
                  </span>
                  :
                  <span onClick={handleLanguage} aria-label="Spanish" role="img">
                     <img src={spain} alt='spanish'></img>
                  </span>
            }
         </Box>
      </div>
   )
}